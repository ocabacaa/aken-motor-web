import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Servis Motor Cepat &
            <span className="text-red-600"> Terpercaya</span>
          </h1>

          <p className="mt-6 text-gray-300">
            Melayani ganti oli, tune up, servis CVT,
            kelistrikan dan berbagai perawatan motor lainnya.
          </p>

          <button className="mt-8 bg-red-600 px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-red-700">
            <FaWhatsapp />
            Chat WhatsApp
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src="/mekanik.png"
            alt="mekanik"
            className="rounded-3xl"
          />
        </div>

      </div>
    </section>
  );
}