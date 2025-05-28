import { useSearchParams } from "react-router-dom";
import PropertyList from "../features/house/components/houseList";
import useProperties from "../features/house/hooks/useProperties";
import BackButton from "../shared/components/back-button";

const ResultPage = () => {
  const [searchParams] = useSearchParams();
  const filterQuery = searchParams.get("query_search") || "";
  const { houses } = useProperties({ filter: filterQuery });

  return (
    <main className="max-w-[1100px] mx-auto py-12">
      <BackButton />

      <h2 className="text-3xl font-bold mb-6">
        Search Results for "{filterQuery}"
      </h2>
      <article className="grid grid-cols-1 gap-4">
        <PropertyList data={houses} axis="horizontal" />
      </article>
    </main>
  );
};

export default ResultPage;
