import PropertyList from "../features/house/components/houseList";
import HouseSearch from "../features/house/components/houseSearch";
import useProperties from "../features/house/hooks/useProperties";
import HousePredict from "../features/predict/components/housePredict";

import Pagination from "../shared/components/Pagination";

import { useSearchParams } from "react-router-dom";

const PAGE_LIMIT = 12;

const HousePages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1) return;
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("page", newPage.toString());
      return next;
    });
  };

  const { houses, meta, isLoading, isError, error } = useProperties({
    currentPage,
    limit: PAGE_LIMIT,
  });

  const totalPages = Math.ceil(meta.total / PAGE_LIMIT);

  return (
    <main className="max full p-4 gap-12">
      <div className="max-w-[1100px] mx-auto py-24 flex flex-col gap-12">
        <div
          id="title"
          className="flex flex-col items-center gap-4 text-center"
        >
          <h1 className="font-bold text-5xl">House Properties in Jakarta</h1>
          <p className="max-w-[50ch]">
            Rumah strategis, informasi lengkap, keputusan lebih cepat. Telusuri
            properti rumah di Jakarta dengan pengalaman pencarian yang mudah dan
            cerdas.
          </p>
          <HouseSearch />
        </div>

        <section>
          <HousePredict />
        </section>

        <section id="houses-section">
          {isLoading ? (
            <p>Loading...</p>
          ) : isError ? (
            <p>Error: {error?.message}</p>
          ) : (
            <>
              <div>
                <div className="flex justify-between items-baseline mb-4 gap-4">
                  <h2 className="text-2xl font-bold ">House Properties</h2>

                  <span className="text-lg text-slate-400 font-semibold">
                    Total: {meta.total}
                  </span>
                </div>

                <article className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-3">
                  <PropertyList data={houses} />
                </article>

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  hasPrev={meta.has_prev}
                  hasNext={meta.has_next}
                  onPageChange={handlePageChange}
                />
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
};

export default HousePages;
