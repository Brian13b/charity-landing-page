export default function About() {
  return (
    <section id="about" className="relative flex justify-center bg-[#F9F5E8] py-16 md:py-32 px-6 md:px-35 mt-16 md:mt-40">
      <div className="relative bg-white rounded-none md:rounded-l-[30%] flex flex-col md:flex-row w-full">
        <div className="relative md:absolute md:-top-43 md:left-0 w-full md:w-1/2 h-64 md:h-[600px] rounded-t-lg md:rounded-t-full order-1 md:order-none">
          <img
            src="/about.jpg"
            alt="About us"
            className="w-full h-full object-cover object-center md:object-top rounded-t-lg md:rounded-t-full"
          />
        </div>

        <div className="w-full md:ml-auto md:w-1/2 p-8 md:p-16 flex flex-col justify-center order-2 md:order-none">
          <h2 className="font-[recoleta] text-4xl md:text-7xl font-bold text-[#003B29]">
            About Us
          </h2>
          <div className="w-16 h-[2px] bg-[#003B29] my-6"></div>
          <p className="font-[objektiv] text-gray-600 leading-relaxed">
            The legal definition of a charitable organization (and of charity)
            varies between countries and in some instances regions of the
            country. The regulation, the tax treatment, and the way in which
            charity law affects charitable organizations also vary.
          </p>
          <a href="#"
            className="mt-6 inline-block font-[objektiv] text-[#003B29] font-semibold underline underline-offset-4 hover:text-[#00715D] transition"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}