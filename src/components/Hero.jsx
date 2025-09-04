export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* Texto */}
      <div className="flex flex-col justify-top px-35 py-12">
        <h1 className="text-7xl font-extrabold text-[#223534] leading-normal mb-8">
          Charity Is An Act Of A Soft Heart.
        </h1>

        <p className="text-[#555] text-base leading-relaxed max-w-md mb-8">
          We’ve spent the last 5 years helping over 25,00000 <br /> teams just like
          yourself create and sustain <br /> successful online support.
        </p>

        {/* Botón y video */}
        <div className="flex items-center mb-12 w-full">
          <button className="bg-[#016144] text-white px-9 py-4 font-medium hover:bg-[#014c34] transition-colors">
            Donate Now
          </button>

          <div className="relative flex items-center justify-end w-20 h-20 rounded-full">
            <p className="absolute text-[#555]">Learn about us through this video</p>
            <button className="bg-[#FBCE46] text-[#223534] w-12 h-12 rounded-full flex items-center justify-center font-bold">
              ▶
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="flex justify-between gap-6 text-[#223534] text-sm font-medium w-full">
          <a href="#" className="hover:text-[#016144]">Youtube</a>
          <span>•</span>
          <a href="#" className="hover:text-[#016144]">Facebook</a>
          <span>•</span>
          <a href="#" className="hover:text-[#016144]">Instagram</a>
        </div>
      </div>

      {/* Imagen */}
      <div className="bg-[#FBCE46] flex items-end pt-12 pr-35">
        <img
          src="../../public/hero.jpg"
          alt="Charity"
          className="w-full h-full object-cover object-right"
        />
      </div>
    </section>
  );
}
