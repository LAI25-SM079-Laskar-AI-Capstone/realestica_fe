import { useSearchParams } from "react-router-dom";
import PropertyList from "../features/house/components/houseList";
import useProperties from "../features/house/hooks/useProperties";
import BackButton from "../shared/components/back-button";
import Pagination from "../shared/components/Pagination";
import HouseSearch from "../features/house/components/houseSearch";
import FilterModal, {
  type FilterModalHandle,
} from "../features/house/components/filterModal";
import { useRef } from "react";

const PAGE_LIMIT = 6;

const ResultPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterQuery = searchParams.get("query_search") || "";
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const modalRef = useRef<FilterModalHandle>(null);
  const openModal = () => modalRef.current?.open();

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

  const handlePageChange = (newPage: number) => {
    if (newPage < 1) return;
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("page", newPage.toString());
      return next;
    });
  };

  const { houses, meta, isLoading, isError, error } = useProperties({
    filter: filterQuery,
    currentPage,
    limit: PAGE_LIMIT,
  });

  const totalPages = Math.ceil(meta.total / PAGE_LIMIT);

  return (
    <main className="min-h-screen max-w-[1100px] mx-auto p-4 py-12">
      <BackButton />

      <HouseSearch />

      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error: {error?.message}</p>
      ) : (
        <>
          <div className="flex flex-col justify-between items-center sm:flex-row gap-4 sm:items-center">
            <h2 className="text-3xl font-bold mb-6">
              {meta.total} Results Found for "{filterQuery}"
            </h2>
            <div className="filter-wrap flex gap-4">
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
