// PredictionResultSkeleton.tsx
import React from "react";

const PredictionResultSkeleton: React.FC = () => {
  return (
    <div className="bg-white m-6 animate-pulse">
      <div id="result-skeleton" className="flex gap-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>

        <section className="w-220 relative p-6 bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
          <div className="relative z-10">
            <h4 className="text-sm font-semibold text-gray-500 mb-1 flex items-center justify-between">
              <div className="h-4 bg-gray-300 rounded w-48"></div>
            </h4>
            <div className="mb-6 mt-2">
              <div className="h-10 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
            <div
              id="disclaimer-skeleton"
              className="bg-gray-200 p-2 rounded-lg"
            >
              <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
              <div className="h-3 bg-gray-300 rounded w-11/12 mb-1"></div>
              <div className="h-3 bg-gray-300 rounded w-10/12"></div>
            </div>
          </div>
        </section>
      </div>
      <section className="mt-8 text-center">
        <div className="h-5 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
        <div className="h-32 bg-gray-100 rounded-lg w-full"></div>
      </section>
    </div>
  );
};

export default PredictionResultSkeleton;
