import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const HouseSearch = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      navigate(`/result?query_search=${encodeURIComponent(trimmedQuery)}`);
    }
  };
  return (
    <form
      onSubmit={handleSearchSubmit}
      className="w-full max-w-md flex items-center gap-0 overflow-hidden rounded-full border border-slate-200 mb-8"
    >
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search properties..."
        className="flex-1 px-6 py-2 text-sm sm:text-base focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 flex items-center justify-center"
      >
        <i className="bx bx-search text-xl sm:text-2xl" />
      </button>
    </form>
  );
};

export default HouseSearch;
