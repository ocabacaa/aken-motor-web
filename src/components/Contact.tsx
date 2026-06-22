import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-100 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Hubungi Kami
          </h2>

          <p className="text-gray-600 mt-4">
            Siap melayani berbagai kebutuhan servis motor Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Info */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <div className="flex items-center gap-4 mb-8">
              <FaWhatsapp className="text-green-500 text-2xl" />
              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <p className="text-gray-600">
                  +62 8xxxxxxxxxx
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <FaInstagram className="text-pink-500 text-2xl" />
              <div>
                <h3 className="font-semibold">Instagram</h3>
                <p className="text-gray-600">
                  @akenmotor
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <FaMapMarkerAlt className="text-red-500 text-2xl" />
              <div>
                <h3 className="font-semibold">
                  Alamat
                </h3>

                <p className="text-gray-600">
                  Pontianak, Kalimantan Barat
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaClock className="text-blue-500 text-2xl" />

              <div>
                <h3 className="font-semibold">
                  Jam Operasional
                </h3>

                <p className="text-gray-600">
                  Setiap hari
                </p>

                <p className="text-gray-600">
                  08.00 - 20.00 WIB
                </p>
              </div>
            </div>

          </div>

          {/* Google Maps */}
          <div className="rounded-3xl overflow-hidden shadow-lg">

            <iframe
              title="Aken Motor Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.8486412946622!2d110.82348793745042!3d-2.3166495837721253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e0f59000e2c9aa7%3A0x29a07e2afcb76497!2sBengkel%20Aken%20Motor!5e1!3m2!1sid!2sid!4v1782143569322!5m2!1sid!2sid"
              width="100%"
              height="100%"
              loading="lazy"
              className="min-h-[450px]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}