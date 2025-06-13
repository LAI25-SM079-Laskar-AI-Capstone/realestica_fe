const members = [
  {
    name: "Abil Khairi",
    id: "A251YBM006",
    role: "Frontend Developer",
    photo: "member-1.jpg",
    university: "Universitas Malikussaleh",
    social_media: {
      github: "https://www.github.com/BILIIIIIII",
      linkedin: "https://www.linkedin.com/in/khairiabill",
      instagram: "https://www.instagram.com/abillzein792",
      email: "abillzein792@gmail.com",
    },
  },
  {
    name: "Muhammad Rizki",
    id: "A299YBM348",
    role: "Backend & DevOps",
    university: "Universitas Pendidikan Indonesia",
    photo: "member-1.jpg",
    social_media: {
      github: "https://github.com/MuhammadRizki8",
      linkedin: "https://www.linkedin.com/in/rizki-muhammad-32b4b4203/",
      instagram: "https://www.instagram.com/krng_kng",
      email: "mrizki135790@gmail.com",
    },
  },
  {
    name: "Ramadhani Sarah Alicya Bilqis",
    id: "A200XBF416",
    role: "UI/UX Enthusiast",
    university: "Universitas Diponegoro",
    photo: "member-1.jpg",
    social_media: {
      github: "https://www.github.com/alicyabilqis",
      linkedin: "https://www.linkedin.com/in/ramadhani-sarah",
      instagram: "https://www.instagram.com/alicyabilqis_",
      email: "rmdhnsrh@gmail.com",
    },
  },
  {
    name: "Steven C Michael",
    id: "A248YBM468",
    role: "ML Engineer",
    university: "Universitas Lampung",
    photo: "member-1.jpg",
    social_media: {
      github: "https://www.github.com/StevenCMichael",
      linkedin: "https://www.linkedin.com/in/steven-c-michael-830447288/",
      instagram: "https://www.instagram.com/justevcm",
      email: "steven0907bdl@gmail.com",
    },
  },
];
const TeamMentor = () => {
  return (
    <section id="tim-mentor" className="py-16">
      <div>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-gray-900">
          Tim Kami & Mentor
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-10">
          Realestica dikembangkan oleh tim mahasiswa Universitas di bawah
          bimbingan mentor:
        </p>

        {/* Grid of Team Members */}
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-2">
          {members.map((person) => (
            <figure
              key={person.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 transition duration-300"
            >
              <div className="flex flex-col md:flex-row items-center gap-6 p-6">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-24 h-24 rounded-full object-cover "
                />
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {person.name}
                  </h3>
                  <div className="flex gap-2">
                    <p className="text-gray-600 text-sm mt-1">{person.id}</p>
                    <p className="text-gray-600 text-sm mt-1">{person.role}</p>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">
                    {person.university}
                  </p>
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
          ))}
        </div>

        {/* Mentor Notes */}
        <div className="mt-12 space-y-6 text-gray-700">
          <p className="text-base md:text-lg leading-relaxed">
            <strong>Mentor:</strong> Bagas Bangkit Pambudi (sesi mentoring: 28
            Mei 2025). Dalam sesi tersebut, tim menerima masukan terkait
            validasi rencana awal, metodologi, dan desain fitur sehingga proyek
            dapat selesai sesuai target.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Kolaborasi internal tim dan bimbingan mentor menjadi kunci
            kelancaran pengembangan Realestica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamMentor;
