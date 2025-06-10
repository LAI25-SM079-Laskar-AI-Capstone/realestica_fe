export interface PaginationProps {
  currentPage: number;
  hasNext: boolean;
  hasPrev: boolean;
  total: number;
  limit: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
}
