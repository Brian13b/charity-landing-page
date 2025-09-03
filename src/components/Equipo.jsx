export default function Equipo() {
  const members = [
    { name: "Jane Doe", role: "Founder", img: "/team1.jpg" },
    { name: "John Smith", role: "Coordinator", img: "/team2.jpg" },
    { name: "Emily Brown", role: "Volunteer", img: "/team3.jpg" },
  ];

  return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center text-gray-900">Meet Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {members.map((m, idx) => (
          <div key={idx} className="rounded-lg shadow p-6 flex flex-col items-center">
            <img src={m.img} alt={m.name} className="w-32 h-32 rounded-full object-cover" />
            <h3 className="mt-4 text-xl font-semibold">{m.name}</h3>
            <p className="text-gray-500">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
