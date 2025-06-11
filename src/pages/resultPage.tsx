import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

import useProperties from "../features/house/hooks/useProperties";
import PropertyList from "../features/house/components/houseList";
import HouseSearch from "../features/house/components/houseSearch";
import FilterModal, {
  type FilterModalHandle,
} from "../features/house/components/filterModal";
import BackButton from "../shared/components/back-button";
import Pagination from "../shared/components/Pagination";

const PAGE_LIMIT = 6;

const ResultPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterQuery = searchParams.get("query_search") || "";
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  // Modal ref & handler
  const modalRef = useRef<FilterModalHandle>(null);
  const openModal = () => modalRef.current?.open();

  // Filter detection
  const hasActiveFilters =
    searchParams.has("location_text") ||
    searchParams.has("min_price") ||
    searchParams.has("max_price") ||
    searchParams.has("sort");

  // Clear filters
  const handleClearFilters = () => {
    const newParams = new URLSearchParams(searchParams);
    ["location_text", "min_price", "max_price", "sort"].forEach((key) =>
      newParams.delete(key)
    );
    newParams.set("page", "1"); // Reset to page 1
    setSearchParams(newParams);
  };

  // Apply filters from modal
  const handleApply = (filters: Record<string, string | undefined>) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(filters).forEach(([key, value]) => {
      if (value) newParams.set(key, value);
      else newParams.delete(key);
    });
    setSearchParams(newParams);
  };

  // Page navigation
  const handlePageChange = (newPage: number) => {
    if (newPage < 1) return;
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("page", newPage.toString());
      return next;
    });
  };

  // Fetching properties
  const { houses, meta, isLoading, isError, error } = useProperties({
    filter: filterQuery,
    currentPage,
    limit: PAGE_LIMIT,
  });

  const totalPages = Math.ceil(meta.total / PAGE_LIMIT);

  return (
    <main className="min-h-screen max-w-[1100px] mx-auto px-4 py-12">
      <BackButton />
      <HouseSearch />

      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p className="text-red-500">Error: {error?.message}</p>
      ) : meta.total === 0 ? (
        <div className="text-center mt-12 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Kami tidak menemukan hasil yang sesuai untuk keyword "
            {filterQuery || "your search"}"
          </h2>
          <p className="text-sm text-gray-500">
            Coba sesuaikan filter atau kata kunci pencarian Anda untuk melihat
            lebih banyak hasil.
          </p>

          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-red-500 hover:bg-gray-100 transition"
            >
              Clear Filters
              <i className="bx bx-x"></i>
            </button>
          )}
        </div>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold">
              {meta.total.toLocaleString()} Results Found for "{filterQuery}"
            </h2>

            <div className="flex flex-wrap gap-2 sm:gap-4">
              <button
                onClick={openModal}
                className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition"
              >
                Filters <i className="bx bx-slider"></i>
              </button>

              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-red-500 hover:bg-gray-100 transition"
                >
                  Clear <i className="bx bx-x"></i>
                </button>
              )}
            </div>
          </div>

          <article className="grid grid-cols-1 gap-4">
            <PropertyList data={houses} axis="horizontal" />
          </article>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            hasPrev={meta.has_prev}
            hasNext={meta.has_next}
            onPageChange={handlePageChange}
          />
        </>
      )}

      {/* Filter Modal */}
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

export default ResultPage;
