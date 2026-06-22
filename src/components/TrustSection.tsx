import { testimonials } from "../data/testimonials";
import {
  FaMotorcycle,
  FaSmileBeam,
  FaTools,
} from "react-icons/fa";

export default function TrustSection() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Mengapa Memilih Aken Motor?
          </h2>

          <p className="text-gray-600 mt-4">
            Bengkel terpercaya dengan pengalaman dan pelayanan terbaik.
          </p>
        </div>

        {/* Statistik */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <FaTools className="text-5xl text-red-600 mx-auto mb-4" />

            <h3 className="text-4xl font-bold text-gray-900">
              10+
            </h3>

            <p className="text-gray-600 mt-2">
              Tahun Pengalaman
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <FaMotorcycle className="text-5xl text-red-600 mx-auto mb-4" />

            <h3 className="text-4xl font-bold text-gray-900">
              5000+
            </h3>

            <p className="text-gray-600 mt-2">
              Motor Diservis
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <FaSmileBeam className="text-5xl text-red-600 mx-auto mb-4" />

            <h3 className="text-4xl font-bold text-gray-900">
              98%
            </h3>

            <p className="text-gray-600 mt-2">
              Pelanggan Puas
            </p>
          </div>

        </div>

        {/* Testimoni */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-10">
            Apa Kata Pelanggan Kami?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-3xl shadow-lg p-8"
              >
                <p className="text-gray-600 italic">
                  "{item.comment}"
                </p>

                <h3 className="font-bold mt-6 text-red-600">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}