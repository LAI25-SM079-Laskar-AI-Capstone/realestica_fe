import type { Property } from "../types/property";
import { useNavigate } from "react-router-dom";

interface PropertyCardProps {
  item: Property;
  variant?: "compact" | "spacy";
  axis?: "vertical" | "horizontal";
}

const PropertyCard = ({
  item,
  variant = "compact",
  axis = "vertical",
}: PropertyCardProps) => {
  const navigate = useNavigate();

  const handleDetail = (id: string) => {
    navigate(`/properties/${id}`);
  };

  return (
    <figure
      onClick={() => handleDetail(item.id)}
      className={`rounded-xl cursor-pointer transition duration-300 ease-in overflow-hidden ${
        axis === "horizontal" ? "grid grid-cols-2" : "grid grid-cols-1"
      }`}
    >
      <div id="img-wrap" className="h-40 w-full overflow-hidden bg-gray-200">
        <img
          src="image.png"
          alt="property image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-3">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600">
          <i className="bx bx-location"></i> {item.location_text}
        </p>

        <div className="flex gap-3 mt-2 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <i className="bx bx-bed"></i>
            <p>{item.specifications.bedrooms}</p>
          </div>
          <div className="flex items-center gap-1">
            <i className="bx bx-shower"></i>
            <p>{item.specifications.bathrooms}</p>
          </div>
          <div className="flex items-center gap-1">
            <i className="bx bx-area"></i>
            <p>{item.specifications.building_area}</p>
          </div>
        </div>

        {variant === "spacy" && (
          <div className="flex flex-col text-sm text-slate-500 mt-2">
            <p className="mb-2 line-clamp-2">{item.description}</p>
            <p>{item.property_type}</p>
          </div>
        )}

        <div className="flex justify-between items-center gap-2 mt-2">
          <p className="text-md font-bold text-blue-600">
            {item.price_display}
          </p>
          <button className="text-xs border border-slate-300 rounded-full py-1 px-3 hover:border-slate-800 hover:bg-slate-800 hover:text-white">
            book now
          </button>
        </div>
      </div>
    </figure>
  );
};

export default PropertyCard;
