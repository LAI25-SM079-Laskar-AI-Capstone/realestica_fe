import { useState, useCallback } from 'react';
import { getPropertyById } from '../api/recommendation';
import type { RecommendedProperty } from '../types';

export function useProperty() {
  const [property, setProperty] = useState<RecommendedProperty | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProperty = useCallback(async (propertyId: number) => {
    setLoading(true);
    setError(null);

    try {
      const response = await getPropertyById(propertyId);

      if (response.status === 'success') {
        setProperty(response.data);
      } else {
        setError(response.error || 'Failed to fetch property');
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    property,
    loading,
    error,
    fetchProperty,
  };
}
