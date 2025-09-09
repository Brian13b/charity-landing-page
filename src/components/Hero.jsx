import CircularTextButton from '../utils/CircularTextButton';
import CurvedArrow from '../utils/CurvedArrow';

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center md:justify-top px-6 md:px-35 py-12 order-2 md:order-1">
        <h1 className="font-[recoleta] text-4xl md:text-7xl/21 tracking-wide font-bold text-[#003B29] mb-8 leading-tight">
          Charity Is An Act Of A Soft Heart.
        </h1>

        <p className="font-[objektiv] text-md text-[#898989] leading-relaxed max-w-full md:max-w-md mb-8">
          We've spent the last 5 years helping over 25,00000 <br className="hidden md:block" /> teams just like
          yourself create and sustain <br className="hidden md:block" /> successful online support.
        </p>

        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-0 mb-20">
          <button className="bg-[#00715D] text-white px-9 py-4 max-h-25 font-medium tracking-wide hover:bg-[#003B29] transition-colors w-full md:w-auto">
            Donate Now
          </button>
          <div className="hidden md:block">
            <CurvedArrow />
          </div>
          <div className="hidden md:block">
            <CircularTextButton />
          </div>
        </div>

        <div className="flex justify-center md:justify-between text-[#223534] text-sm font-medium w-full">
          <a href="#" className="hover:text-[#016144]">Youtube</a>
          <span>•</span>
          <a href="#" className="hover:text-[#016144]">Facebook</a>
          <span>•</span>
          <a href="#" className="hover:text-[#016144]">Instagram</a>
        </div>
      </div>

      <div className="bg-[#FDD65B] flex items-end pt-12 px-6 md:px-0 md:pr-35 order-1 md:order-2 min-h-[300px] md:min-h-auto">
        <img
          src="/hero.jpg"
          alt="Charity"
          className="w-full h-full object-cover object-center md:object-right"
        />
      </div>
    </section>
  );
}