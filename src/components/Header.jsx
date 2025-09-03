export default function Header() {
  return (
    <header className="flex w-full h-16">

      <div className="flex-1 bg-[#F9F4E8] flex items-center">
        <div className="text-2xl font-extrabold tracking-tight px-8">
          Ta<span className="text-[#223534]">&gt;</span>
        </div>
      </div>

      <div className="flex-1 bg-[#FDD65C] flex justify-center items-center">
        <nav className="flex gap-8 text-[#016144] font-medium">
          <a href="#about" className="hover:text-primary transition-colors">
            About Us
          </a>
          <span className="mx-2">•</span>
          <a href="#campaigns" className="hover:text-primary transition-colors">
            Campaign
          </a>
          <span className="mx-2">•</span>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}