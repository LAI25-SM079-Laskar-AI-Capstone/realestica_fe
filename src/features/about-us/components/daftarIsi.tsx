const links = [
  { href: "#tim-mentor", label: "Tim & Mentor" },
  { href: "#latar-belakang", label: "Latar Belakang" },
  { href: "#analisis-swat", label: "Analisis Pasar & SWOT" },
  { href: "#solusi-fitur", label: "Solusi & Fitur" },
  { href: "#teknologi-metode", label: "Teknologi & Metode" },
  { href: "#status", label: "Status & Pencapaian" },
  { href: "#link-dokumentasi", label: "Link & Dokumentasi" },
  { href: "#roadmap", label: "Roadmap & Rencana" },
  { href: "#stakeholder", label: "Stakeholder & Kolaborasi" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Hubungi Kami" },
];
const DaftarIsi = () => {
  return (
    <nav id="daftar-isi" aria-label="Daftar Isi" className="my-8">
      <div className="bg-gray-50 rounded-lg p-4 md:p-6  mx-auto">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 ">
          Daftar Isi
        </h2>
        <ul className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-2 md:gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-block px-3 py-1 rounded-md text-sm md:text-base font-medium text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default DaftarIsi;
