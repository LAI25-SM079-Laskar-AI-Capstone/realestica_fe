import type { Property } from "../types/property"; // Sesuaikan path dengan lokasi model Property

interface PropertyListProps {
  data: Property[];
  variant?: "compact" | "spacy";
}

const PropertyList = ({ data, variant = "spacy" }: PropertyListProps) => {
  return (
    <>
      {data.map((item) => (
        <figure
          key={item.id}
          className="grid grid-cols-[1fr] p-4 rounded-xl border border-slate-400 hover:shadow-xl hover:shadow-slate-400 cursor-pointer transition duration-300 ease-in"
        >
          <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.location_text}</p>
          <p className="text-md font-bold text-blue-600 mt-2">
            {item.price_display}
          </p>
          <div className="flex gap-4 mt-2 text-sm text-gray-500">
            <p>{item.specifications.bedrooms} Kamar Tidur</p>
            <span>•</span>
            <p>{item.specifications.bathrooms} Kamar Mandi</p>
          </div>

          {variant === "spacy" && (
            <div
              id="description"
              className="flex flex-col justify-between text-sm text-slate-500 mt-2"
            >
              <p className="mb-2 text-ellipsis line-clamp-2">
                {item.description}
              </p>
              <div className="flex gap-2">
                <p>{item.property_type}</p>
              </div>
            </div>
          )}
        </figure>
      ))}
    </>
  );
};

export default PropertyList;
