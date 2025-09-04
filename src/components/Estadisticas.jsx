export default function Estadisticas() {
  const stats = [
    { number: "985+", label: "Donations Received" },
    { number: "$10M", label: "Money Donated" },
    { number: "12+", label: "Active Campaigns" },
    { number: "$60 M", label: "Charity in last Year" },
  ];

  return (
    <section className="bg-[#016144] py-16 px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
      {stats.map((stat, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <h3 className="font-[averia] text-4xl font-extrabold text-white">{stat.number}</h3>
          <p className="mt-2 text-white">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
