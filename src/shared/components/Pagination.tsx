import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  hasPrev: boolean;
  hasNext: boolean;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  hasPrev,
  hasNext,
  onPageChange,
  isLoading,
}) => {
  return (
    <div className="mt-6 flex justify-center items-center gap-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!hasPrev || !!isLoading}
        className="px-4 py-2 border text-slate-500 border-slate-500/50 rounded-full hover:cursor-pointer disabled:opacity-50"
      >
        Previous
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasNext || !!isLoading}
        className="px-4 py-2 border text-slate-500 border-slate-500/50 rounded-full hover:cursor-pointer disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
