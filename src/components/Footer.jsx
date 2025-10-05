import { Mail, Phone, Instagram, Twitter, Facebook } from 'lucide-react'; // Import icons from lucide-react

const Footer = () => {
  return (
    <footer className="bg-[#721B27] text-white py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <img src="/brand-items/logo-with-background.svg" alt="E-Samn Labs Logo" />
          <p className="text-sm">
            Transforming ideas into scalable digital solutions that drive growth through web, mobile, and cloud tech.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/services" className="hover:text-gray-300">Our Services</a></li>
            <li><a href="/why-us" className="hover:text-gray-300">Why Us</a></li>
            <li><a href="/pricing" className="hover:text-gray-300">Pricing</a></li>
            <li><a href="/portfolio" className="hover:text-gray-300">Portfolio</a></li>
          </ul>
        </div>

        {/* Legal Terms */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Legal Terms</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:text-gray-300">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <a href="mailto:info@esamnmlabs.tech" className="hover:text-gray-300">info@esamnmlabs.tech</a>
            </li>
            <li className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>+254 796009226</span>
            </li>
          </ul>
          <div className="mt-2">
            <h5 className="text-sm font-medium mb-1">Social Media</h5>
            <div className="flex space-x-2">
              <a href="https://instagram.com" aria-label="Instagram">
                <Instagram className="w-5 h-5 hover:text-gray-300" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <Twitter className="w-5 h-5 hover:text-gray-300" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <Facebook className="w-5 h-5 hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-xs mt-8 md:ml-22">© 2025 esamnmlabs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;