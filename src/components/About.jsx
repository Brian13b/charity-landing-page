export default function About() {
  return (
    <section id="about" className="grid md:grid-cols-2 gap-12 py-16 px-8 items-center">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
        <p className="mt-6 text-gray-600 leading-relaxed">
          We are a non-profit organization dedicated to making the world a better place
          by helping those in need. Through education, donations, and volunteering,
          we aim to bring hope and opportunities to communities worldwide.
        </p>
        <button className="mt-8 bg-primary text-white px-6 py-3 rounded hover:bg-primary/90 transition-colors">
          Learn More
        </button>
      </div>
      <div>
        <img src="/about.jpg" alt="About us" className="rounded-lg shadow" />
      </div>
    </section>
  );
}
