export default function Footer() {
  return (
    <footer className="bg-[#F9F5E8] py-20 px-35">
      <div className="grid grid-cols-[45%_55%] gap-8">
        {/* Newsletter */}
        <div>
          <h3 className="font-[recoleta] text-2xl font-semibold text-[#003B29]">Newsletter</h3>
          <p className="font-[objektiv] mt-10 text-gray-500 text-sm">
            Subscribe to our newsletter to get more informations
          </p>
          <div className="my-8 flex max-w-md border-[5px] border-white">
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

        {/* Otras 3 columnas */}
        <div className="grid grid-cols-3 gap-10">
          {/* Navigation */}
          <div>
            <h3 className="font-[recoleta] text-2xl font-semibold text-[#003B29]">Navigation</h3>
            <ul className="font-[objektiv] mt-10 space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-[#003B29]">Home</a></li>
              <li><a href="#" className="hover:text-[#003B29]">Campaign</a></li>
              <li><a href="#" className="hover:text-[#003B29]">Team</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-[recoleta] text-2xl font-semibold text-[#003B29]">About Us</h3>
            <ul className="font-[objektiv] mt-10 space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-[#003B29]">About Us</a></li>
              <li><a href="#" className="hover:text-[#003B29]">Contact</a></li>
              <li><a href="#" className="hover:text-[#003B29]">Address</a></li>
            </ul>
          </div>

          {/* Help */}
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

      {/* Separador */}
      <div className="mt-8 border-t border-gray-300"></div>

      {/* Créditos */}
      <div className="mt-10 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <span>Designed By Tanim Khan</span>
        <span>WWW.Dribbbble.Com/Tanim_ui</span>
      </div>
    </footer>
  );
}
