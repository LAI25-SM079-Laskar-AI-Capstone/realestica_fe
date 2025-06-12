export default function Footer() {
  return (
    <footer>
      {/* Hero CTA Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <img
          src="image-9.jpeg"
          alt="Final CTA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white -tracking-wider">
            Mari Bicarakan Rumah Impian Anda.
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-200 max-w-md">
            Hubungi Realestica dan pelajari bagaimana prediksi harga berbasis AI
            bisa mengubah strategi properti Anda—mulai dari riset hingga
            keputusan akhir.
          </p>
          <button className="mt-6 px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition">
            Hubungi Sekarang
          </button>
        </div>
      </section>

      {/* Footer Content Section */}
      <div className="max-w-5xl mx-auto ">
        <section className="py-6 md:py-12">
          <div className="container mx-auto px-4 grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
            {/* Logo & Description */}
            <div className="flex flex-col gap-6">
              <a href="/" className=" w-fit  ">
                <h3 className="sr-only">brijr/components</h3>
                <img
                  src="realestica-black-nobg.png"
                  alt="Logo"
                  width={120}
                  height={28}
                  className="transition-all hover:opacity-75 "
                />
              </a>
              <p className="text-base max-w-xs text-gray-700">
                Platform cerdas untuk prediksi harga dan rekomendasi rumah di
                Jakarta.
              </p>
            </div>
            {/* Website Links */}
            <div className="flex flex-col gap-2">
              <h5 className="font-semibold text-lg mb-2">Website</h5>
              <a
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Cari Properti
              </a>
              <a
                href="/market"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Tren Pasar
              </a>
              <a
                href="/about-us"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Tentang Kami
              </a>
              <a
                href="/contact-us"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Hubungi Kami
              </a>
            </div>
            {/* Legal Links */}
            <div className="flex flex-col gap-2">
              <h5 className="font-semibold text-lg mb-2">Legal</h5>
              <a
                href="/privacy-policy"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/cookie-policy"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </section>
        {/* Divider */}
        <hr className="border-t border-gray-200 my-8" />
        {/* Bottom Bar */}
        <section>
          <div className=" my-8 mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Icons */}
            <div className="flex gap-2">
              {[
                { icon: "bxl bx-instagram", label: "INstagram" },
                { icon: "bxl bx-twitter-x", label: "Twitter" },
                { icon: "bxl bx-linkedin-square", label: "Linkedin" },
              ].map(({ icon, label }) => (
                <button
                  key={icon}
                  className="flex items-center justify-center p-2 w-10 h-10 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                  aria-label={label}
                >
                  <i className={`bx ${icon} text-xl`} />
                </button>
              ))}
            </div>
            {/* Copyright */}
            <p className="text-sm text-gray-500 text-center md:text-left">
              ©{" "}
              <a
                href="https://github.com/LAI25-SM079-Laskar-AI-Capstone"
                className="hover:underline"
              >
                LAI25-SM079
              </a>{" "}
              . All rights reserved. {new Date().getFullYear()}
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
}
