// import Navbar from "../shared/components/navbar";

// import useMarkets from "../features/market-intelligence/hooks/useMarket";

const MarketPage = () => {
  // const { markets: Recommended } = useMarkets({});

  return (
    <main className="max full p-4 gap-12  ">
      {/* <Navbar /> */}

      <main className="max-w-[1100px] mx-auto py-24 flex flex-col gap-12">
        <div
          id="title"
          className="flex flex-col items-center gap-4 text-center"
        >
          <h1 className="font-bold text-5xl ">House MuseMarkets in Jakarta</h1>
          <p className="max-w-[50ch]">
            Rumah strategis, informasi lengkap, keputusan lebih cepat. Telusuri
            properti rumah di Jakarta dengan pengalaman pencarian yang mudah dan
            cerdas.
          </p>
        </div>

        <section>
          {/* <h2 className="mb-2">House</h2> */}
          <article className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-3">
            {/* <PropertyList data={Recommended} /> */}
          </article>
        </section>
      </main>
    </main>
  );
};

export default MarketPage;
