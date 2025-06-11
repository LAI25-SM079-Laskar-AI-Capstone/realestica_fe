import { useState, forwardRef, useImperativeHandle } from "react";

type FilterValues = {
  location_text?: string;
  min_price?: string;
  max_price?: string;
  sort?: "asc" | "desc";
};

export interface FilterModalHandle {
  open: () => void;
}

const FilterModal = forwardRef<
  FilterModalHandle,
  {
    initialValues: FilterValues;
    onApply: (filters: FilterValues) => void;
  }
>(({ initialValues, onApply }, ref) => {
  const [filters, setFilters] = useState<FilterValues>(initialValues);
  const [dialog, setDialog] = useState<HTMLDialogElement | null>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      dialog?.showModal();
    },
  }));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value || undefined,
    }));
  };

  const applyFilters = () => {
    onApply(filters);
    dialog?.close();
  };

  return (
    <dialog
      ref={setDialog}
      className="rounded-xl p-6 w-full max-w-md backdrop:bg-black/40 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <form method="dialog" className="space-y-4">
        <h2 className="text-xl font-semibold">Filter Properties</h2>

        <select
          name="location_text"
          value={filters.location_text || ""}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Pilih Lokasi</option>
          <option value="jakarta barat">Jakarta Barat</option>
          <option value="jakarta pusat">Jakarta Pusat</option>
          <option value="jakarta selatan">Jakarta Selatan</option>
          <option value="jakarta timur">Jakarta Timur</option>
          <option value="jakarta utara">Jakarta Utara</option>
        </select>

        <div className="flex gap-4">
          <input
            type="number"
            name="min_price"
            placeholder="Min Price"
            value={filters.min_price || ""}
            onChange={handleChange}
            className="w-1/2 border p-2 rounded"
          />
          <input
            type="number"
            name="max_price"
            placeholder="Max Price"
            value={filters.max_price || ""}
            onChange={handleChange}
            className="w-1/2 border p-2 rounded"
          />
        </div>

        <select
          name="sort"
          value={filters.sort || ""}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Sort By</option>
          <option value="asc">Price Low to High</option>
          <option value="desc">Price High to Low</option>
        </select>

        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={() => dialog?.close()}
            className="px-4 py-2 rounded border hover:cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={applyFilters}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:cursor-pointer"
          >
            Apply
          </button>
        </div>
      </form>
    </dialog>
  );
});

export default FilterModal;
