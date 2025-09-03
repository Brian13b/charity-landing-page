export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-[#F9F4E8]">

      <div className="flex flex-col justify-center px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Charity Is An Act Of A Soft Heart.
        </h1>
        <p className="mt-6 text-gray-600 max-w-md">
          We’ve spent the last 5 years helping over 25,000 teams just like yours
          create and sustain successful online support.
        </p>
        <div className="mt-8">
          <button className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
            Donate Now
          </button>
        </div>

        <div className="flex gap-6 mt-8 text-gray-500">
          <a href="#" className="hover:text-primary">Youtube</a>
          <span className="mx-2">•</span>
          <a href="#" className="hover:text-primary">Facebook</a>
          <span className="mx-2">•</span>
          <a href="#" className="hover:text-primary">Instagram</a>
        </div>
      </div>

      <div className="flex bg-[#FDD65C] pr-8 md:pr-12">
        <img
          src="https://picsum.photos/1200/800"
          alt="Charity"
          className="w-full h-auto md:h-full object-cover object-left"
        />
      </div>
    </section>
  );
}