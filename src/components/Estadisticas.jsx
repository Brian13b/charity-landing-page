export default function Estadisticas() {
  const stats = [
    { number: "985+", label: "Donations Received", img: "estadistica1.jpg" },
    { number: "$10 M", label: "Money Donated", img: "estadistica2.jpg" },
    { number: "12+", label: "Active Campaigns", img: "estadistica3.jpg" },
    { number: "$60 M", label: "Charity in last Year", img: "estadistica4.jpg" },
  ];

  return (
    <section className="bg-[#00715D] py-16 px-6 md:px-35 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-20">
      {stats.map((stat, idx) => (
        <div key={idx} className="flex flex-row items-center">
          <img src={stat.img} alt={stat.label} className="w-20 h-20 object-cover mr-2" />
          <div className="flex flex-col items-start">
            <h3 className="font-[recoleta] text-4xl font-semibold text-white">{stat.number}</h3>
            <p className="font-[objektiv] mt-2 text-gray-200">{stat.label}</p>
          </div>
        </div>
      ))}
    </section>
  );
}