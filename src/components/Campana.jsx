export default function Campana() {
  const campaigns = [
    { title: "Covid - 19", img: "/campana1.jpg" },
    { title: "Food Bank", img: "/campana2.jpg" },
    { title: "Safe Water", img: "/campana3.jpg" },
  ];

  return (
    <section id="campaign" className="py-20 px-35 bg-[#F9F5E8]">
      <div className="mx-auto grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h2 className="font-[recoleta] text-6xl md:text-7xl font-bold text-[#003B29] leading-tight">
            Support Your Community
          </h2>
          <div className="w-16 h-[2px] bg-[#0C2117] my-8"></div>
          <p className="font-[objektiv] text-gray-400 pb-10 max-w-3xl">
            The legal definition of a charitable organization (and of charity) varies
            between countries and in charity law affects charitable organizations also vary.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {campaigns.slice(0, 2).map((c, idx) => (
              <div key={idx} className="overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-72 object-cover"
                />
                <div className="bg-white p-10">
                  <h3 className="font-[recoleta] text-xl font-semibold text-[#0C2117]">
                    {c.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-1 flex flex-col">
          <img
            src={campaigns[2].img}
            alt={campaigns[2].title}
            className="w-full h-full object-cover flex-1"
          />
          <div className="bg-white p-10">
            <h3 className="font-[recoleta] text-xl font-semibold text-[#0C2117]">
              {campaigns[2].title}
            </h3>
          </div>
          <div className="my-8 text-center">
            <a
              href="#"
              className="font-[objektiv] text-[#0C2117] font-semibold underline underline-offset-4 hover:text-[#00715D] transition"
            >
              View All Campaign
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

