import { services } from "../data/services";

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Layanan Kami
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="shadow-lg p-8 rounded-2xl hover:-translate-y-2 duration-300"
            >
              <h3 className="text-xl font-semibold">
                {service}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}