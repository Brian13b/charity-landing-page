import { FaStar } from "react-icons/fa";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

export default function Testimonial() {
  return (
    <section className="py-20 px-35 text-center">
      <div className="relative bg-white rounded-l-[30%] flex w-full mb-20">
        <div className="absolute bg-[#00715D] text-white w-30 h-30 flex items-center justify-center rounded-b-full z-10">
          <FaStar className="text-yellow-500 text-xl mr-2" />
          <span className="font-[recoleta] font-semibold text-xl"> 5.0</span>
        </div>

        <div className="absolute left-0 w-1/2 h-[600px] rounded-t-full">
          <img
            src="/testimonio1.png"
            alt="testimonio"
            className="w-full h-full object-cover object-top rounded-b-full bg-[#FDD65B]"
          />
        </div>

        <div className="ml-auto w-1/2 p-21 flex flex-col justify-start">
          <blockquote className="font-[objektiv] text-xl text-gray-500 leading-relaxed mb-15 text-left">
            "We're very happy that the challenge went well, and we're grateful that we have a partner in Charity Challenge whom we could trust to take the best possible care of our supporters."
          </blockquote>
          <h3 className="font-[recoleta] text-3xl font-semibold not-italic text-left">
            Mustafa Kamal
          </h3>
          <p className="font-[objektiv] font-semibold text-sm text-gray-600 text-left mt-2">
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
