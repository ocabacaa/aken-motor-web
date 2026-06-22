import { FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="bg-red-600 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Motor Bermasalah?
        </h2>

        <p className="text-red-100 text-lg max-w-2xl mx-auto mb-10">
          Jangan tunggu sampai kerusakan semakin parah.
          Konsultasikan masalah motor Anda dengan mekanik berpengalaman
          di Aken Motor sekarang juga.
        </p>

        <a
          href="https://wa.me/628xxxxxxxxxx"
          target="_blank"
          className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:scale-105 duration-300"
        >
          <FaWhatsapp size={24} />
          Hubungi Kami Sekarang
        </a>

      </div>
    </section>
  );
}