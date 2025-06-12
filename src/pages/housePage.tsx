import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

import FilterModal, {
  type FilterModalHandle,
} from "../features/house/components/filterModal";
import PropertyList from "../features/house/components/houseList";
import HouseSearch from "../features/house/components/houseSearch";
import useProperties from "../features/house/hooks/useProperties";

import HousePredict from "../features/predict/components/housePredict";

import Pagination from "../shared/components/Pagination";

const PAGE_LIMIT = 12;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
} as const;

const HousePages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const handleClearFilters = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("location_text");
    newParams.delete("min_price");
    newParams.delete("max_price");
    newParams.delete("sort");
    newParams.set("page", "1");
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
    <motion.main
      className="w-full py-4 pt-0 gap-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Jumbotron */}
      <div
        className="w-full relative overflow-hidden  py-24 "
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/45  backdrop-blur-xs"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[1100px] mx-auto relative z-10 flex flex-col items-center justify-center text-center gap-4 px-4 sm:px-6 lg:px-8"
        >
          <motion.h1
            className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-7xl tracking-tight lg:-tracking-wider text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            House Properties in Jakarta
          </motion.h1>

          <motion.p
            className="max-w-prose text-sm sm:text-base md:text-lg text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
          >
            Rumah strategis, informasi lengkap, keputusan lebih cepat. Telusuri
            properti rumah di Jakarta dengan pengalaman pencarian yang mudah dan
            cerdas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ scale: 1.01 }}
          >
            <HouseSearch />
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12 flex flex-col gap-12 md:gap-16">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.16, 0.77, 0.47, 0.97],
          }}
        >
          <HousePredict />
        </motion.section>

        <motion.section
          id="houses-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
        >
          {isLoading ? (
            <motion.div
              className="flex justify-center items-center h-64"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          ) : isError ? (
            <motion.p
              className="text-red-500 p-4 bg-red-50 rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "backOut",
              }}
            >
              Error: {error?.message}
            </motion.p>
          ) : (
            <div>
              {/* Header */}
              <motion.div
                className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <motion.h2
                  className="text-2xl md:text-3xl font-bold"
                  variants={itemVariants}
                >
                  House Properties
                </motion.h2>

                <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-fit gap-3 sm:gap-4">
                  <motion.span
                    className="text-sm md:text-base text-slate-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      duration: 0.5,
                    }}
                  >
                    Total: {meta.total.toLocaleString()} rumah
                  </motion.span>

                  <motion.div
                    className="flex gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.3,
                      duration: 0.5,
                    }}
                  >
                    <motion.button
                      onClick={openModal}
                      className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{
                        scale: 0.95,
                        transition: { duration: 0.1 },
                      }}
                    >
                      Filters
                      <i className="bx bx-slider"></i>
                    </motion.button>

                    <AnimatePresence>
                      {hasActiveFilters && (
                        <motion.button
                          onClick={handleClearFilters}
                          className="flex items-center gap-2 px-4 py-2 rounded-full text-red-500 hover:bg-gray-100 transition-colors"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 15,
                            },
                          }}
                          exit={{
                            opacity: 0,
                            x: 20,
                            transition: { duration: 0.2 },
                          }}
                          whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                          }}
                          whileTap={{
                            scale: 0.95,
                            transition: { duration: 0.1 },
                          }}
                        >
                          Clear
                          <i className="bx bx-x" />
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>

              {/* Grid of Properties */}
              <motion.article
                className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr min-h-[200px]"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                <PropertyList data={houses} />
              </motion.article>

              {/* Pagination */}
              {showPagination && (
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.2,
                    },
                  }}
                >
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    hasPrev={meta.has_prev}
                    hasNext={meta.has_next}
                    onPageChange={handlePageChange}
                  />
                </motion.div>
              )}
            </div>
          )}
        </motion.section>
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
    </motion.main>
  );
};

export default HousePages;
