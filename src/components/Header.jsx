export default function Header() {
  return (
    <header className="font-[objektiv] grid grid-cols-1 md:grid-cols-2 w-full h-auto md:h-20">
      {/* Logo */}
      <div className="flex items-center justify-center md:justify-start bg-[#F9F5E8] px-4 md:pl-35 py-6 md:pt-8">
        <h1 className="text-3xl tracking-[0.2em] text-[#0C2117] font-bold">
          Ta<span className="text-[#00715D]">:</span>Ya
        </h1>
      </div>

      {/* Nav */}
      <div className="flex items-center justify-center md:justify-end bg-[#FDD65B] px-4 md:pr-35 py-6 md:pt-8">
        <nav className="flex flex-col md:flex-row gap-4 md:gap-15 text-[#003B29] font-bold text-md text-center md:text-left">
          <a href="#about" className="hover:text-[#016144] transition-colors">
            About Us
          </a>
          <span className="text-[#003B29] hidden md:inline">•</span>
          <a href="#campaign" className="hover:text-[#00715D] transition-colors">
            Campaign
          </a>
          <span className="text-[#003B29] hidden md:inline">•</span>
          <a href="#contact" className="hover:text-[#00715D] transition-colors">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
