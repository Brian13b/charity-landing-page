export default function CTA() {
  return (
    <section className="relative py-20 px-35 bg-[#00715D] text-white">
      <div className="flex flex-row items-center justify-between">
        {/* Texto */}
        <div className="text-left">
          <h2 className="font-[recoleta] text-7xl font-semibold leading-tight max-w-3xl">
            Let’s Help Other With Your Charity
          </h2>
        </div>

        {/* Botón */}
        <div className="my-5">
          <button className="bg-[#FDD65B] font-[objektiv] text-[#003B29] font-semibold px-8 py-5 hover:brightness-110 transition">
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
}
