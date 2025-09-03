export default function Footer() {
  return (
    <footer className="py-10 px-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold">CharityOrg</h3>
          <p className="mt-4 text-sm">
            Making the world better, one step at a time.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#campaigns" className="hover:text-white">Campaigns</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        © 2025 CharityOrg. All rights reserved.
      </div>
    </footer>
  );
}
