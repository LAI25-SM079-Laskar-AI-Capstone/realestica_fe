import { useState, useCallback } from 'react';
import { getRecommendationProperty, getSimilarProperties, getPropertyById } from '../api/recommendation';
import type { Property, RecommendationByCriteriaRequest, SimilarPropertiesRequest } from '../types';

interface UseRecommendationState {
  recommendations: Property[];
  loading: boolean;
  error: string | null;
  totalFound: number;
  computationTime: number;
}

export function useRecommendation() {
  const [state, setState] = useState<UseRecommendationState>({
    recommendations: [],
    loading: false,
    error: null,
    totalFound: 0,
    computationTime: 0,
  });

  const getRecommendations = useCallback(async (params: RecommendationByCriteriaRequest) => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const response = await getRecommendationProperty(params);

      if (response.status === 'success') {
        setState((prev) => ({
          ...prev,
          recommendations: response.data.recommendations,
          totalFound: response.data.total_found,
          computationTime: response.data.computation_time_ms,
          loading: false,
        }));
      } else {
        setState((prev) => ({
          ...prev,
          error: response.error || 'Failed to get recommendations',
          loading: false,
        }));
      }
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : 'An error occurred',
        loading: false,
      }));
    }
  }, []);

  const getSimilar = useCallback(async (params: SimilarPropertiesRequest) => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const response = await getSimilarProperties(params);

      if (response.status === 'success') {
        setState((prev) => ({
          ...prev,
          recommendations: response.data.recommendations,
          totalFound: response.data.total_found,
          computationTime: response.data.computation_time_ms,
          loading: false,
        }));
      } else {
        setState((prev) => ({
          ...prev,
          error: response.error || 'Failed to get similar properties',
          loading: false,
        }));
      }
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : 'An error occurred',
        loading: false,
      }));
    }
  }, []);

  const clearRecommendations = useCallback(() => {
    setState({
      recommendations: [],
      loading: false,
      error: null,
      totalFound: 0,
      computationTime: 0,
    });
  }, []);

  return {
    ...state,
    getRecommendations,
    getSimilar,
    clearRecommendations,
  };
}

// src/features/recommendation/hooks/useProperty.ts
export function useProperty() {
  const [property, setProperty] = useState<Property | null>(null);
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
