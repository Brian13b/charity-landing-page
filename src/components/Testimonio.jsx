import { FaStar } from "react-icons/fa";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

export default function Testimonial() {
  return (
    <section className="py-20 px-6 md:px-35 text-center">
      <div className="relative bg-white rounded-none md:rounded-l-[30%] flex flex-col md:flex-row w-full mb-20">
        <div className="absolute bg-[#00715D] text-white w-20 h-20 md:w-30 md:h-30 flex items-center justify-center rounded-b-full md:rounded-b-full z-10 top-4 left-4 md:top-auto md:left-0">
          <FaStar className="text-yellow-500 text-lg md:text-xl mr-1 md:mr-2" />
          <span className="font-[recoleta] font-semibold text-lg md:text-xl mt-1">5.0</span>
        </div>

        <div className="relative md:absolute md:left-0 w-full md:w-1/2 h-64 md:h-[600px] rounded-t-lg md:rounded-b-full order-1 md:order-none">
          <img
            src="/testimonio1.png"
            alt="testimonio"
            className="w-full h-full object-cover object-center md:object-top rounded-t-lg md:rounded-b-full bg-[#FDD65B]"
          />
        </div>

        <div className="w-full md:ml-auto md:w-1/2 p-8 md:p-21 flex flex-col justify-center md:justify-start order-2 md:order-none">
          <blockquote className="font-[objektiv] text-lg md:text-xl text-gray-500 leading-relaxed mb-8 md:mb-15 text-center md:text-left">
            "We're very happy that the challenge went well, and we're grateful that we have a partner in Charity Challenge whom we could trust to take the best possible care of our supporters."
          </blockquote>
          <h3 className="font-[recoleta] text-3xl font-semibold not-italic text-center md:text-left">
            Mustafa Kamal
          </h3>
          <p className="font-[objektiv] font-semibold text-sm text-gray-600 text-center md:text-left mt-2">
            Ceo, Toogle
          </p>
        </div>
      </div>

      <div className="flex justify-center my-10 gap-4">
        <button className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-[#FFEBA7] transition">
          <TfiAngleLeft className="text-2xl text-gray-700 text-bold" />
        </button>
        <button className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-[#FFEBA7] transition">
          <TfiAngleRight className="text-2xl text-gray-700" />
        </button>
      </div>

    </section>
  );
}