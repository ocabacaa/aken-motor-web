import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-red-600">
          AKEN MOTOR
        </h1>

        <a
          href="#contact"
          className="bg-red-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-700"
        >
          <FaWhatsapp />
          WhatsApp
        </a>

      </div>
    </nav>
  );
}