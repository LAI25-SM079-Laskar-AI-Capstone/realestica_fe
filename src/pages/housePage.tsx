<<<<<<< HEAD
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
=======
import { useState } from 'react';
import PropertyList from '../features/house/components/houseList';
import HousePredict from '../features/house/components/housePredict';
import HouseSearch from '../features/house/components/houseSearch';
import useProperties from '../features/house/hooks/useProperties';
import Pagination from '../features/house/components/Pagination';

const HousePages = () => {
  const [searchParams, setSearchParams] = useState({});

  const [housesPage, setHousesPage] = useState(1);
  const itemsPerPage = 12;
>>>>>>> f670cb874c14e75040b7371b8a6de55d7db1e715

  const {
    houses: recommended,
    isLoading: recommendedLoading,
    error: recommendedError,
  } = useProperties({
    limit: 6,
    sort: 'desc',
  });

  const cleanSearchParams = Object.fromEntries(Object.entries(searchParams).filter(([_, value]) => value !== undefined && value !== null && value !== ''));

  const {
    houses: houses,
    isLoading: housesLoading,
    error: housesError,
    meta: housesMeta,
  } = useProperties({
    property_type: 'House',
    ...cleanSearchParams,
    limit: itemsPerPage,
    offset: (housesPage - 1) * itemsPerPage,
  });

  const handleSearch = (newParams: any) => {
    // Only set params that have actual values
    const cleanParams = Object.fromEntries(Object.entries(newParams).filter(([_, value]) => value !== undefined && value !== null && value !== ''));
    setSearchParams(cleanParams);
    setHousesPage(1);
  };

  const handleHousesPageChange = (page: number) => {
    setHousesPage(page);
    document.getElementById('houses-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="max full p-4 gap-12">
      <main className="max-w-[1100px] mx-auto py-24 flex flex-col gap-12">
        <div id="title" className="flex flex-col items-center gap-4 text-center">
          <h1 className="font-bold text-5xl">House Properties in Jakarta</h1>
          <p className="max-w-[50ch]">Rumah strategis, informasi lengkap, keputusan lebih cepat. Telusuri properti rumah di Jakarta dengan pengalaman pencarian yang mudah dan cerdas.</p>

          <HouseSearch onSearch={handleSearch} />
        </div>

<<<<<<< HEAD
        <HousePredict />

=======
        {/* Recommended Section */}
>>>>>>> f670cb874c14e75040b7371b8a6de55d7db1e715
        <section>
          <h2 className="text-2xl font-bold mb-4">Recommended Properties</h2>
          {recommendedLoading && <div className="text-blue-600">Loading recommended properties...</div>}
          {recommendedError && <div className="text-red-600 bg-red-50 p-3 rounded">Error loading recommended properties</div>}
          <HousePredict Recommended={recommended} />
        </section>

        {/* Houses Section - TAMBAH ID */}
        <section id="houses-section">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Houses</h2>
            {housesMeta && (
              <p className="text-gray-600">
                Showing {houses.length} of {housesMeta.total} properties
              </p>
            )}
          </div>

          {housesLoading && <div className="text-blue-600">Loading houses...</div>}
          {housesError && <div className="text-red-600 bg-red-50 p-3 rounded">Error loading houses</div>}

          <article className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-3">
            <PropertyList data={houses} />
          </article>

          {/* PAGINATION UNTUK HOUSES */}
          {housesMeta && housesMeta.total > itemsPerPage && (
            <div className="mt-6">
              <Pagination currentPage={housesPage} hasNext={housesMeta.has_next} hasPrev={housesMeta.has_prev} total={housesMeta.total} limit={itemsPerPage} onPageChange={handleHousesPageChange} isLoading={housesLoading} />
            </div>
          )}
        </section>

        {/* Debug Section - Remove in production */}
        <section className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-bold mb-2">Debug Info</h3>
          <div className="text-sm">
            <p>Recommended: {recommended.length} properties</p>
            <p>
              Houses: {houses.length} properties (Page {housesPage})
            </p>
          </div>
        </section>
      </main>
    </main>
  );
};

export default HousePages;
