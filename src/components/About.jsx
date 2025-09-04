export default function About() {
  return (
    <section id="about" className="flex bg-[#F8F4EC] py-32 px-35">
      <div className="absolute w-1/2 flex">
        <div className="w-[85%] overflow-hidden">
          <img
            src="/about.jpg"
            alt="About us"
            className="w-full h-[600px] object-cover rounded-t-[50%]"
          />
        </div>
      </div>

      {/* Card */}
      <div className="bg-white shadow-xl overflow-hidden flex w-full">
        {/* Texto */}
        <div className="w-[45%] p-12 flex flex-col transform translate-x-[120%]">
          <h2 className="font-[recoleta] text-6xl font-bold text-[#0C2117]">
            About Us
          </h2>
          <div className="w-16 h-[2px] bg-[#0C2117] my-6"></div>
          <p className="font-[objektiv] text-gray-600 leading-relaxed">
            The legal definition of a charitable organization (and of charity) varies
            between countries and in some instances regions of the country. The regulation,
            the tax treatment, and the way in which charity law affects charitable
            organizations also vary.
          </p>
          <a
            href="#"
            className="mt-6 inline-block font-[objektiv] text-[#0C2117] font-semibold underline underline-offset-4 hover:text-[#00715D] transition"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
