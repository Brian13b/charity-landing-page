export default function CTA() {
  return (
    <section className="relative py-20 px-6 md:px-35 bg-[#00715D] text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        <div className="text-center md:text-left">
          <h2 className="font-[recoleta] text-3xl md:text-7xl font-semibold leading-tight max-w-full md:max-w-3xl">
            Let's Help Other With Your Charity
          </h2>
        </div>

        <div className="my-5">
          <button className="bg-[#FDD65B] font-[objektiv] text-[#003B29] font-semibold px-8 py-5 hover:brightness-110 transition w-full md:w-auto">
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
}
