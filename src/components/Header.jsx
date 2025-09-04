export default function Header() {
  return (
    <header className="grid grid-cols-2 w-full h-20">
      {/* Logo */}
      <div className="flex items-center justify-start bg-[#F9F4E8] pl-35 pt-8">
        <h1 className="text-2xl font-bold tracking-tight text-[#223534]">
          Ta<span className="text-[#223534]">&gt;</span>
        </h1>
      </div>

      {/* Nav */}
      <div className="flex items-center justify-end bg-[#FBCE46] pr-35 pt-8">
        <nav className="flex gap-15 text-[#016144] font-bold text-sm">
          <a href="#about" className="hover:text-[#016144] transition-colors">
            About Us
          </a>
          <span className="text-[#016144]">•</span>
          <a href="#campaign" className="hover:text-[#016144] transition-colors">
            Campaign
          </a>
          <span className="text-[#016144]">•</span>
          <a href="#contact" className="hover:text-[#016144] transition-colors">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}