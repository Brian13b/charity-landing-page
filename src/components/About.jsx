export default function About() {
  return (
    <section id="about" className="relative flex justify-center bg-[#F8F4EC] py-32 px-35 mt-40">
      <div className="relative bg-white rounded-l-[30%] flex w-full">
        <div className="absolute -top-43 left-0 w-1/2 h-[600px] rounded-t-full">
          <img
            src="/about.jpg"
            alt="About us"
            className="w-full h-full object-cover object-top rounded-t-full"
          />
        </div>

        <div className="ml-auto w-1/2 p-16 flex flex-col justify-center">
          <h2 className="font-[recoleta] text-7xl font-bold text-[#0C2117]">
            About Us
          </h2>
          <div className="w-16 h-[2px] bg-[#0C2117] my-6"></div>
          <p className="font-[objektiv] text-gray-600 leading-relaxed">
            The legal definition of a charitable organization (and of charity)
            varies between countries and in some instances regions of the
            country. The regulation, the tax treatment, and the way in which
            charity law affects charitable organizations also vary.
          </p>
          <a href="#"
            className="mt-6 inline-block font-[objektiv] text-[#0C2117] font-semibold underline underline-offset-4 hover:text-[#00715D] transition"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}