import type { TeamCardProps } from "./types/teamMember";

const TeamCard = ({ person, hoveredId, setHoveredId }: TeamCardProps) => {
  const isDimmed = hoveredId !== null && hoveredId !== person.id;

  return (
    <figure
      className={`bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 transition duration-300 ${
        isDimmed ? "grayscale opacity-40" : ""
      }`}
      onMouseEnter={() => setHoveredId(person.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      <div className="flex flex-col md:flex-row items-center gap-6 p-6">
        <img
          src={person.photo}
          alt={person.name}
          className="w-24 h-24 rounded-full object-cover transition duration-300 "
        />
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>
          <div className="flex gap-2 flex-wrap justify-center md:justify-start">
            <p className="text-gray-600 text-sm mt-1">{person.id}</p>
            <p className="text-gray-600 text-sm mt-1">{person.role}</p>
          </div>
          <a
            href={person.university.url}
            className="text-gray-600 text-sm mt-1 hover:underline block"
          >
            {person.university.name}
          </a>
          <div className="flex justify-center md:justify-start gap-3 mt-3">
            <a
              href={person.social_media.linkedin}
              aria-label="LinkedIn"
              className="text-blue-700 hover:text-blue-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="text-3xl bxl bx-linkedin"></i>
            </a>
            <a
              href={person.social_media.instagram}
              aria-label="Instagram"
              className="text-pink-600 hover:text-pink-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="text-3xl bxl bx-instagram"></i>
            </a>
            <a
              href={person.social_media.github}
              aria-label="GitHub"
              className="text-gray-800 hover:text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="text-3xl bxl bx-github"></i>
            </a>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default TeamCard;
