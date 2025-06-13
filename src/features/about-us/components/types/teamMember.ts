export type University = {
  name: string;
  url: string;
};

export type SocialMedia = {
  linkedin: string;
  instagram: string;
  github: string;
  email: string;
};

export type TeamMember = {
  id: string | number;
  name: string;
  photo: string;
  role: string;
  university: University;
  social_media: SocialMedia;
};

export type TeamCardProps = {
  person: TeamMember;
  hoveredId: string | number | null;
  setHoveredId: (id: string | number | null) => void;
};
