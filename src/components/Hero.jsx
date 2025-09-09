import CircularTextButton from '../utils/CircularTextButton';
import CurvedArrow from '../utils/CurvedArrow';

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* Texto */}
      <div className="flex flex-col justify-top px-35 py-12">
        <h1 className="font-[recoleta] text-7xl/21 tracking-wide font-bold text-[#003B29] mb-8">
          Charity Is An Act Of A Soft Heart.
        </h1>

        <p className="font-[objektiv] text-md text-[#898989] leading-relaxed max-w-md mb-8">
          We’ve spent the last 5 years helping over 25,00000 <br /> teams just like
          yourself create and sustain <br /> successful online support.
        </p>

        {/* Botón y video */}
        <div className="flex justify-between items-center mb-20">
          <button className="bg-[#00715D] text-white px-9 py-4 max-h-25 font-medium tracking-wide hover:bg-[#003B29] transition-colors">
            Donate Now
          </button>
          <CurvedArrow />
          <CircularTextButton />
        </div>

        {/* Links */}
        <div className="flex justify-between text-[#223534] text-sm font-medium w-full">
          <a href="#" className="hover:text-[#016144]">Youtube</a>
          <span>•</span>
          <a href="#" className="hover:text-[#016144]">Facebook</a>
          <span>•</span>
          <a href="#" className="hover:text-[#016144]">Instagram</a>
        </div>
      </div>

      {/* Imagen */}
      <div className="bg-[#FDD65B] flex items-end pt-12 pr-35">
        <img
          src="/hero.jpg"
          alt="Charity"
          className="w-full h-full object-cover object-right"
        />
      </div>
    </section>
  );
}
