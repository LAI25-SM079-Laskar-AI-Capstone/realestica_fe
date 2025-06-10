import { useSearchParams } from "react-router-dom";
import PropertyList from "../features/house/components/houseList";
import useProperties from "../features/house/hooks/useProperties";
import BackButton from "../shared/components/back-button";
import Pagination from "../shared/components/Pagination";

const PAGE_LIMIT = 6;

const ResultPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterQuery = searchParams.get("query_search") || "";
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
    filter: filterQuery,
    currentPage,
    limit: PAGE_LIMIT,
  });

  const totalPages = Math.ceil(meta.total / PAGE_LIMIT);

  return (
    <main className="min-h-screen max-w-[1100px] mx-auto py-12">
      <BackButton />

      <h2 className="text-3xl font-bold mb-6">
        Search Results for "{filterQuery}"
      </h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error: {error?.message}</p>
      ) : (
        <>
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
    </main>
  );
};

export default ResultPage;
