import PropertyList from "../features/house/components/houseList";
import HousePredict from "../features/predict/components/housePredict";
import HouseSearch from "../features/house/components/houseSearch";
import useProperties from "../features/house/hooks/useProperties";

// import Navbar from "../shared/components/navbar";

const HousePages = () => {
  // const { houses: Recommended } = useProperties({});

  const { houses: Houses } = useProperties({
    limit: 6,
    sort: "desc",
  });

  const { houses: apartements } = useProperties({});

  return (
    <main className="max full p-4 gap-12  ">
      {/* <Navbar /> */}

      <main className="max-w-[1100px] mx-auto py-24 flex flex-col gap-12">
        <div
          id="title"
          className="flex flex-col items-center gap-4 text-center"
        >
          <h1 className="font-bold text-5xl ">House Properties in Jakarta</h1>
          <p className="max-w-[50ch]">
            Rumah strategis, informasi lengkap, keputusan lebih cepat. Telusuri
            properti rumah di Jakarta dengan pengalaman pencarian yang mudah dan
            cerdas.
          </p>

          <HouseSearch />
        </div>

        <HousePredict />

        <section>
          {/* <h2 className="mb-2">House</h2> */}
          <article className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-3">
            <PropertyList data={Houses} />
          </article>
        </section>

        <section>
          {/* <h2>Apartment</h2> */}
          <article className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-3">
            <PropertyList data={apartements} variant="spacy" />
          </article>
        </section>
      </main>
    </main>
  );
};

export default HousePages;
