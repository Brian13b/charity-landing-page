export default function Equipo() {
  const members = [
    { name: "Lily Gomez", role: "Founder", img: "/equipo1.png", color: "bg-[#FDD65B]" },
    { name: "Dm Lincoln", role: "Co-Founder", img: "/equipo2.png", color: "bg-[#00715D]" },
    { name: "Serena Mei", role: "Manager", img: "/equipo3.png", color: "bg-[#F6C948]" },
    { name: "Abdel Latif", role: "Superviser", img: "/equipo4.png", color: "bg-[#00715D]" },
  ];

  return (
    <section className="py-20 bg-[#F9F5E8] flex flex-col justify-center items-center">
      <div className="w-full px-6 md:px-35">
        <h2 className="font-[recoleta] text-4xl md:text-7xl font-bold text-center text-[#003B29]">
          Our Team
        </h2>
        <div className="w-16 h-[2px] bg-[#003B29] mt-6 mb-16 md:mb-30 mx-auto"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-5 my-16">
          {members.map((m, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="relative w-60 h-60 flex items-center justify-center">
                <div className={`absolute inset-0 rounded-full ${m.color}`}></div>
                <img
                  src={m.img}
                  alt={m.name}
                  className="relative w-80 h-80 -top-10 rounded-full object-cover z-10"
                />
              </div>
              <h3 className="mt-6 font-[recoleta] text-3xl font-semibold text-[#003B29]">{m.name}</h3>
              <p className="text-gray-500 font-[objektiv]">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}