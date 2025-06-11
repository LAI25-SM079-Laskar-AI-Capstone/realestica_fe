import React from 'react';
import type { Property } from '../types';

interface PropertyRecommendationsProps {
  recommendations: Property[];
  loading: boolean;
  error: string | null;
  showRecommendations: boolean;
}

const PropertyRecommendations: React.FC<PropertyRecommendationsProps> = ({ recommendations, loading, error, showRecommendations }) => {
  if (!showRecommendations) {
    return null;
  }

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-gray-800">🏘️ Rekomendasi Properti Serupa</h4>
        {loading && (
          <div className="flex items-center text-sm text-gray-600">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
            Mencari rekomendasi...
          </div>
        )}
      </div>

      {/* Recommendation Error */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <p className="text-sm">
            <strong>Error rekomendasi:</strong> {error}
          </p>
        </div>
      )}

      {/* Recommendations List */}
      {recommendations.length > 0 && (
        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {recommendations.map((property) => (
            <div key={property.id} className="min-w-[280px] max-w-xs flex-shrink-0 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
              {/* Gambar Placeholder */}
              <div className="h-36 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">Gambar Properti</div>

              {/* Konten */}
              <div className="p-4">
                <h5 className="font-medium text-gray-900 text-base mb-1 truncate">{property.title}</h5>
                <div className="text-sm font-semibold text-green-600 mb-2">{property.price_display}</div>

                <div className="text-sm text-gray-600 mb-2">📍 {property.location_text}</div>

                <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-2">
                  <span>🛏️ {property.specifications.bedrooms} kamar</span>
                  <span>🚿 {property.specifications.bathrooms} mandi</span>
                  <span>🏠 {property.specifications.building_area}</span>
                  <span>🌍 {property.specifications.land_area}</span>
                </div>

                {property.facilities.length > 0 && (
                  <div className="text-xs text-gray-500">
                    <strong>Fasilitas:</strong> {property.facilities.slice(0, 3).join(', ')}
                    {property.facilities.length > 3 && `... +${property.facilities.length - 3} lainnya`}
                  </div>
                )}

                {property.estimated_savings && <div className="mt-2 text-xs text-blue-600 font-medium">💰 {property.estimated_savings}</div>}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Recommendations Message */}
      {!loading && recommendations.length === 0 && showRecommendations && (
        <div className="text-center py-8 text-gray-500">
          <p>Tidak ada rekomendasi properti serupa ditemukan.</p>
          <p className="text-sm mt-1">Coba sesuaikan kriteria pencarian Anda.</p>
        </div>
      )}
    </div>
  );
};

export default PropertyRecommendations;
