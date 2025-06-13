import { useState } from "react";
import TeamCard from "./teamCard";
import { members } from "../utils/constant";
import type { TeamMember } from "./types/teamMember";

const TeamMentor = () => {
  const [hoveredId, setHoveredId] = useState<string | number | null>(null);

  return (
    <section id="tim-mentor" className="py-16">
      <div>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-gray-900">
          Tim Kami & Advisor
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-10">
          Realestica dikembangkan oleh tim mahasiswa Universitas dan
          Freshgraduate di bawah bimbingan advisor:
        </p>

        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-2">
          {members.map((person: TeamMember) => (
            <TeamCard
              key={person.id}
              person={person}
              hoveredId={hoveredId}
              setHoveredId={setHoveredId}
            />
          ))}
        </div>

        <div className="mt-12 space-y-6 text-gray-700">
          <p className="text-base md:text-lg leading-relaxed">
            <strong>Advisor:</strong> Bagas Bangkit Pambudi (sesi mentoring: 28
            Mei 2025). Dalam sesi tersebut, tim menerima masukan terkait
            validasi rencana awal, metodologi, dan desain fitur sehingga proyek
            dapat selesai sesuai target.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Kolaborasi internal tim dan bimbingan Advisor menjadi kunci
            kelancaran pengembangan Realestica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamMentor;
