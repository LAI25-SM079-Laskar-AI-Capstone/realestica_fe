import AnalisisPasar from "../features/about-us/components/analisisPasar";
// import DaftarIsi from "../features/about-us/components/daftarIsi";
import Intro from "../features/about-us/components/intro";
import LatarBelakang from "../features/about-us/components/latarBelakang";
import Link from "../features/about-us/components/link";
import Roadmap from "../features/about-us/components/roadmap";
import Solusi from "../features/about-us/components/solusi";
import StakeHolder from "../features/about-us/components/stakeHolder";
import Status from "../features/about-us/components/status";
import TeamMentor from "../features/about-us/components/teamMentor";
import Teknologi from "../features/about-us/components/teknologi";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-8">
      <Intro />

      {/* <DaftarIsi /> */}

      <TeamMentor />

      <LatarBelakang />

      <AnalisisPasar />

      <Solusi />

      <Teknologi />

      <Status />

      <Link />

      <Roadmap />

      <StakeHolder />
    </main>
  );
}
