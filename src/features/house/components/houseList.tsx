import type { Property } from '../types/property';
import PropertyCard from './houseCard';

interface PropertyListProps {
  data: Property[];
  variant?: 'compact' | 'spacy';
  axis?: 'vertical' | 'horizontal';
}

const PropertyList = ({ data, variant = 'compact', axis = 'vertical' }: PropertyListProps) => {
  return (
    <>
      {data.map((item) => (
        <PropertyCard key={item.id} item={item} variant={variant} axis={axis} />
      ))}
    </>
  );
};

export default PropertyList;
