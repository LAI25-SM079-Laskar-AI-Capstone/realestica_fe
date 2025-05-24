import PropertyList from "../features/house/components/houseList";
import useProperties from "../features/house/hooks/useProperties";
import Navbar from "../shared/components/navbar";

const HousePages = () => {
  const { houses: Houses } = useProperties({
    property_type: "House",
  });

  const { houses: apartements } = useProperties({
    property_type: "Apartment",
  });

  return (
    <main className="p-4 gap-12 max-w-[1000px] mx-auto">
      <Navbar />
      <main className="p-2">
        <section className="mb-12">
          <h2 className="mb-2">House</h2>
          <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            <PropertyList data={Houses} />
          </article>
        </section>
        <section>
          <h2 className="mb-2">Apartment</h2>
          <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            <PropertyList data={apartements} variant="compact" />
          </article>
        </section>
      </main>
    </main>
  );
};

export default HousePages;
