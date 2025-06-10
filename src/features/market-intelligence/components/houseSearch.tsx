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
    <form onSubmit={handleSearchSubmit} className="mb-8 flex justify-center">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search properties..."
        className="px-4 py-2 border rounded-l-md focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
      >
        <i className="bx  bx-search"></i>
      </button>
    </form>
  );
};

export default HouseSearch;
