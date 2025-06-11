import { useRef } from "react";
import FilterModal, {
  type FilterModalHandle,
} from "../features/house/components/filterModal";
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

  const handleClearFilters = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("location_text");
    newParams.delete("min_price");
    newParams.delete("max_price");
    newParams.delete("sort");
    newParams.set("page", "1"); // optional: reset to page 1
    setSearchParams(newParams);
  };

  const hasActiveFilters =
    searchParams.has("location_text") ||
    searchParams.has("min_price") ||
    searchParams.has("max_price") ||
    searchParams.has("sort");

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

  const modalRef = useRef<FilterModalHandle>(null);

  const openModal = () => modalRef.current?.open();

  const handleApply = (filters: Record<string, string | undefined>) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    setSearchParams(newParams);
  };
  const showPagination = totalPages > 1;
  return (
    <main className="max full p-4 gap-12">
      <div className="max-w-[1100px] mx-auto py-24 flex flex-col gap-12">
        <div
          id="title"
          className="w-full flex flex-col items-center justify-center text-center gap-4 px-4 sm:px-6 lg:px-8 py-8 md:py-12"
        >
          <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900">
            House Properties in Jakarta
          </h1>
          <p className="max-w-prose text-sm sm:text-base md:text-lg text-gray-600">
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

                  <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                    <span className="text-sm text-slate-400 ">
                      Total: {meta.total} rumah
                    </span>
                    <button
                      onClick={openModal}
                      className="flex items-center gap-2 px-4 py-2 hover:cursor-pointer rounded-full hover:bg-gray-100"
                    >
                      Filters
                      <i className="bxr  bx-slider"></i>
                    </button>

                    {hasActiveFilters && (
                      <button
                        onClick={handleClearFilters}
                        className="flex items-center gap-2 px-4 py-2 hover:cursor-pointer rounded-full hover:bg-gray-100 text-red-500"
                      >
                        Clear
                        <i className="bx bx-x"></i>
                      </button>
                    )}
                  </div>
                </div>

                <article
                  className={`grid gap-3
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-4
    auto-rows-fr
    min-h-[200px]
  `}
                >
                  <PropertyList data={houses} />
                </article>

                {showPagination && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    hasPrev={meta.has_prev}
                    hasNext={meta.has_next}
                    onPageChange={handlePageChange}
                  />
                )}
              </div>
            </>
          )}
        </section>
      </div>
      <FilterModal
        ref={modalRef}
        initialValues={{
          location_text: searchParams.get("location_text") || "",
          min_price: searchParams.get("min_price") || "",
          max_price: searchParams.get("max_price") || "",
          sort: (searchParams.get("sort") as "asc" | "desc") || undefined,
        }}
        onApply={handleApply}
      />
    </main>
  );
};

export default HousePages;
