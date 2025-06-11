import { images } from "../../predict/utils/constant";
import type { Property } from "../types/property";
import { useNavigate } from "react-router-dom";

interface PropertyListProps {
  data: Property[];
  variant?: "compact" | "spacy";
  axis?: "vertical" | "horizontal";
}

const PropertyList = ({
  data,
  variant = "compact",
  axis = "vertical",
}: PropertyListProps) => {
  const navigate = useNavigate();
  const handleDetail = (id: string) => {
    navigate(`/properties/${id}`);
  };
  return (
    <>
      {data.map((item, index) => {
        const imageUrl = images[index % images.length];
        return axis === "horizontal" ? (
          <figure
            key={item.id}
            onClick={() => {
              handleDetail(item.id);
            }}
            className="grid grid-cols-2 rounded-xl  cursor-pointer transition duration-300 ease-in"
          >
            <div id="img-wrap" className="h-40 rounded-xl overflow-hidden">
              <img
                src={imageUrl}
                alt="property image"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-3">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.location_text}</p>
              <div className="flex gap-3 mt-2 text-sm text-gray-500">
                <div
                  id="bed"
                  className="flex items-center justify-between gap-1"
                >
                  <i className="bx  bx-bed"></i>
                  <p>{item.specifications.bedrooms}</p>
                </div>

                <div
                  id="shower"
                  className="flex items-center justify-between gap-1"
                >
                  <i className="bx  bx-shower"></i>{" "}
                  <p>{item.specifications.bathrooms} </p>
                </div>

                <div
                  id="bed"
                  className="flex items-center justify-between gap-1"
                >
                  <i className="bx  bx-area"></i>
                  <p>{item.specifications.building_area}</p>
                </div>
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
              <div
                id="cta"
                className="flex justify-between items-center gap-2 mt-2"
              >
                <p className="text-md font-bold text-blue-600 ">
                  {item.price_display}
                </p>
                <button className="text-xs border border-slate-100 rounded-full py-1 px-3 hover:cursor-pointer hover:border-slate-800 hover:bg-slate-800 hover:text-white">
                  book now
                </button>
              </div>
            </div>
          </figure>
        ) : (
          <figure
            key={item.id}
            onClick={() => {
              handleDetail(item.id);
            }}
            className="grid grid-cols-[1fr] rounded-xl  cursor-pointer transition duration-300 ease-in"
          >
            <div id="img-wrap" className="h-40 rounded-xl overflow-hidden">
              <img
                src={imageUrl} // Gunakan imageUrl di sini
                alt="property image"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-3">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                <i className="bx  bx-location"></i> {item.location_text}
              </p>
              <div className="flex gap-3 mt-2 text-sm text-gray-500">
                <div
                  id="bed"
                  className="flex items-center justify-between gap-1"
                >
                  <i className="bx  bx-bed"></i>
                  <p>{item.specifications.bedrooms}</p>
                </div>

                <div
                  id="shower"
                  className="flex items-center justify-between gap-1"
                >
                  <i className="bx  bx-shower"></i>{" "}
                  <p>{item.specifications.bathrooms} </p>
                </div>

                <div
                  id="bed"
                  className="flex items-center justify-between gap-1"
                >
                  <i className="bx  bx-area"></i>
                  <p>{item.specifications.building_area}</p>
                </div>
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
              <div
                id="cta"
                className="flex justify-between items-center gap-2 mt-2"
              >
                <p className="text-md font-bold text-blue-600 ">
                  {item.price_display}
                </p>
                <button className="text-xs border border-slate-300 rounded-full py-1 px-3 hover:cursor-pointer hover:border-slate-800 hover:bg-slate-800 hover:text-white">
                  book now
                </button>
              </div>
            </div>
          </figure>
        );
      })}
    </>
  );
};

export default PropertyList;
