export default function Footer() {
  return (
    <footer className="bg-[#F9F5E8] py-20 px-6 md:px-35">
      <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-8">
        <div>
          <h3 className="font-[recoleta] text-2xl font-semibold text-[#003B29]">Newsletter</h3>
          <p className="font-[objektiv] mt-10 text-gray-500 text-sm">
            Subscribe to our newsletter to get more informations
          </p>
          <div className="my-8 flex flex-col md:flex-row max-w-full md:max-w-md border-[5px] border-white">
            <input
              type="email"
              placeholder="Email"
              className="font-[objektiv] flex-1 px-8 py-4 bg-white focus:outline-none"
            />
            <button className="bg-[#00715D] text-white px-8 py-4 font-medium">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-[recoleta] text-2xl font-semibold text-[#003B29]">Navigation</h3>
            <ul className="font-[objektiv] mt-10 space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-[#003B29]">Home</a></li>
              <li><a href="#" className="hover:text-[#003B29]">Campaign</a></li>
              <li><a href="#" className="hover:text-[#003B29]">Team</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-[recoleta] text-2xl font-semibold text-[#003B29]">About Us</h3>
            <ul className="font-[objektiv] mt-10 space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-[#003B29]">About Us</a></li>
              <li><a href="#" className="hover:text-[#003B29]">Contact</a></li>
              <li><a href="#" className="hover:text-[#003B29]">Address</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-[recoleta] text-2xl font-semibold text-[#003B29]">Help</h3>
            <ul className="font-[objektiv] mt-10 space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-[#003B29]">Donar Guide</a></li>
              <li><a href="#" className="hover:text-[#003B29]">FAQ</a></li>
              <li><a href="#" className="hover:text-[#003B29]">We Are Hiring</a></li>
              <li><a href="#" className="hover:text-[#003B29]">Returns</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-300"></div>

      <div className="mt-10 flex flex-col md:flex-row justify-between text-sm text-gray-500 text-center md:text-left gap-4 md:gap-0">
        <span>Designed By Tanim Khan</span>
        <span>WWW.Dribbbble.Com/Tanim_ui</span>
      </div>
    </footer>
  );
}