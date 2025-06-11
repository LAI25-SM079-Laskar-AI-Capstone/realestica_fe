import React from "react";
import type { RecommendedProperty } from "../types";
import { images } from "../../predict/utils/constant";
import { useNavigate } from "react-router-dom";
// import type { Property } from "../../house/types/property";

// function normalizeToProperty(rec: RecommendedProperty): Property {
//   return {
//     ...rec,
//     monthly_installment_info: rec.monthly_installment_info ?? '',
//     estimated_savings: rec.estimated_savings ?? '',
//     facilities: rec.facilities ?? [],
//     nearby_points_of_interest_text: '', // opsional, atau generate dari rec.nearby_points_of_interest
//     createdAt: new Date(rec.createdAt),
//     updatedAt: new Date(rec.updatedAt),
//     specifications: {
//       ...rec.specifications,
//       carport_capacity: typeof rec.specifications.carport_capacity === 'string' ? parseInt(rec.specifications.carport_capacity, 10) || undefined : rec.specifications.carport_capacity,
//       maid_bathrooms: undefined,
//       maid_bedrooms: undefined,
//     },
//   };
// }

interface PropertyRecommendationsProps {
  recommendations: RecommendedProperty[];
  loading: boolean;
  error: string | null;
  showRecommendations: boolean;
  variant?: "compact" | "spacy";
  axis?: "vertical" | "horizontal";
}

const PropertyRecommendations: React.FC<PropertyRecommendationsProps> = ({
  recommendations,
  // loading,
  // error,
  variant = "compact",
  // axis = "vertical",
}) => {
  const navigate = useNavigate();

  const handleDetail = (id: string) => {
    navigate(`/properties/${id}`);
  };

  return (
    <>
      {recommendations.map((item, index) => {
        const imageUrl = images[index % images.length];
        return (
          <figure
            key={item.id}
            onClick={() => {
              handleDetail(String(item.id));
            }}
            className="grid grid-cols-[1fr] flex-none w-72 rounded-xl  cursor-pointer transition duration-300 ease-in"
          >
            <div id="img-wrap" className="h-40 rounded-xl overflow-hidden">
              <img
                src={imageUrl}
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

export default PropertyRecommendations;
