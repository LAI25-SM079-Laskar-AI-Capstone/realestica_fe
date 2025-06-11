import React from 'react';
import type { RecommendedProperty } from '../types';
import PropertyCard from '../../house/components/houseCard';
import type { Property } from '../../house/types/property';

function normalizeToProperty(rec: RecommendedProperty): Property {
  return {
    ...rec,
    monthly_installment_info: rec.monthly_installment_info ?? '',
    estimated_savings: rec.estimated_savings ?? '',
    facilities: rec.facilities ?? [],
    nearby_points_of_interest_text: '', // opsional, atau generate dari rec.nearby_points_of_interest
    createdAt: new Date(rec.createdAt),
    updatedAt: new Date(rec.updatedAt),
    specifications: {
      ...rec.specifications,
      carport_capacity: typeof rec.specifications.carport_capacity === 'string' ? parseInt(rec.specifications.carport_capacity, 10) || undefined : rec.specifications.carport_capacity,
      maid_bathrooms: undefined,
      maid_bedrooms: undefined,
    },
  };
}

interface PropertyRecommendationsProps {
  recommendations: RecommendedProperty[];
  loading: boolean;
  error: string | null;
  showRecommendations: boolean;
}

const PropertyRecommendations: React.FC<PropertyRecommendationsProps> = ({ recommendations, loading, error, showRecommendations }) => {
  if (!showRecommendations) return null;

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

      {/* Error message */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <p className="text-sm">
            <strong>Error rekomendasi:</strong> {error}
          </p>
        </div>
      )}

      {/* List of recommendations */}
      {recommendations.length > 0 && (
        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {recommendations.map((property) => (
            <div key={property.id} className="min-w-[280px] max-w-xs flex-shrink-0">
              <PropertyCard item={normalizeToProperty(property)} variant="compact" axis="vertical" />
            </div>
          ))}
        </div>
      )}

      {/* No recommendations fallback */}
      {!loading && recommendations.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>Tidak ada rekomendasi properti serupa ditemukan.</p>
          <p className="text-sm mt-1">Coba sesuaikan kriteria pencarian Anda.</p>
        </div>
      )}
    </div>
  );
};

export default PropertyRecommendations;
