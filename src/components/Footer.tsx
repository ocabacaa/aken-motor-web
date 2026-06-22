import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10">

          {/* Kiri */}
          <div>
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              AKEN MOTOR
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Bengkel motor terpercaya di Pontianak yang
              melayani servis rutin, tune up, kelistrikan,
              servis CVT, injeksi, dan overhaul mesin.
            </p>
          </div>

          {/* Kanan */}
          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />

              <span className="text-gray-300">
                Pontianak, Kalimantan Barat
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaInstagram className="text-pink-500" />

              <span className="text-gray-300">
                @akenmotor
              </span>
            </div>

          </div>

        </div>

        <hr className="border-gray-700 my-10" />

        <div className="text-center text-gray-400 text-sm">
          © 2026 Aken Motor. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}