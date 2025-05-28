import { useState } from "react";
import type { Property } from "../types/property";
import PropertyList from "./houseList";

const facilities = [
  "Kolam Renang",
  "Keamanan 24 Jam",
  "Taman",
  "Garasi",
  "Gym",
  "Akses Jalan Tol",
  "Dekat Sekolah",
  "Dekat Pusat Perbelanjaan",
];

interface PropertyListProps {
  Recommended: Property[];
  variant?: "compact" | "spacy";
  axis?: "vertical" | "horizontal";
}

const HousePredict = ({ Recommended }: PropertyListProps) => {
  const [showResult, setShowResult] = useState(false);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);

  const handleFacilityChange = (facility: string) => {
    setSelectedFacilities((prev) =>
      prev.includes(facility)
        ? prev.filter((f) => f !== facility)
        : [...prev, facility]
    );
  };

  return (
    <details className=" p-4 rounded-xl bg-slate-100 ">
      <summary className="text-xl font-semibold ">
        <i className="bx bx-sparkles-alt " />
        Predict Estimated Price
      </summary>
      <section className="predict-price px-4">
        <form
          className="mt-4 flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            setShowResult(true);
          }}
        >
          <div className="flex gap-4">
            <div className="flex flex-col">
              <label
                className=" text-slate-400 font-medium mb-1"
                htmlFor="lebar"
              >
                Lebar (m)
              </label>
              <input
                id="lebar"
                type="number"
                min={0}
                className="bg-white border-none rounded px-2 py-1"
                placeholder="Masukkan lebar"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="font-medium mb-1 text-slate-400"
                htmlFor="panjang"
              >
                Panjang (m)
              </label>
              <input
                id="panjang"
                type="number"
                min={0}
                className="bg-white border-none rounded px-2 py-1"
                placeholder="Masukkan panjang"
              />
            </div>
          </div>
          <details className="mt-3">
            <summary className="font-medium cursor-pointer select-none py-2 px-1 rounded hover:bg-gray-100">
              Fasilitas
            </summary>
            <div className="flex flex-wrap gap-3 mt-2">
              {facilities.map((facility) => (
                <label key={facility} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={facility}
                    checked={selectedFacilities.includes(facility)}
                    onChange={() => handleFacilityChange(facility)}
                  />
                  {facility}
                </label>
              ))}
            </div>
          </details>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700"
          >
            Predict
          </button>
        </form>
        {showResult && (
          <section>
            <div className="mt-6 p-4 rounded shadow bg-blue-50 max-w-xs mx-auto">
              <div className="text-gray-500 text-sm mb-1">Estimated Price</div>
              <div className="text-2xl font-bold text-blue-700 mb-1">
                Rp 8.500.000
                <span className="text-base font-medium text-gray-600">
                  {" "}
                  /bulan
                </span>
              </div>
              <div className="text-xs text-gray-400">
                *Estimasi berdasarkan fasilitas terpilih
              </div>
            </div>
            <div>
              <h2 className="mb-2">Recommendation for you</h2>
              <article className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-1">
                <PropertyList data={Recommended} />
              </article>
            </div>
          </section>
        )}
      </section>
    </details>
  );
};

export default HousePredict;
