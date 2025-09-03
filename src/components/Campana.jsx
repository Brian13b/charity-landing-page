export default function Campana() {
  const campaigns = [
    { title: "Covid-19", img: "/campaign1.jpg" },
    { title: "Food Bank", img: "/campaign2.jpg" },
    { title: "Safe Water", img: "/campaign3.jpg" },
  ];

  return (
    <section id="campaigns" className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center text-gray-900">Support Your Community</h2>
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {campaigns.map((c, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow overflow-hidden">
            <img src={c.img} alt={c.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{c.title}</h3>
              <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                Donate Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
