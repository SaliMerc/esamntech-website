import { Mail, Phone, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#721B27] text-white py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <img src="/brand-items/logo-with-background.svg" alt="E-Samn Labs Logo" />
          <p className="text-sm mt-5">
            Transforming ideas into scalable digital solutions that drive growth through web, mobile, and cloud tech.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link className='hover:text-gray-300' to='/#home'>Home</Link>
            </li>
            <li>
              <Link className='hover:text-gray-300' to='/#services'>Our Services</Link>
            </li>
            <li>
              <Link className='hover:text-gray-300' to='/#why-us'>Why Us</Link>
            </li>
            <li>
              <Link className='hover:text-gray-300' to='/#pricing'>Pricing</Link>
            </li>
            <li>
              <Link className='hover:text-gray-300 visited:text-[#BCAC99]' to='/portofolio'>Portofolio</Link>
            </li>
          </ul>
        </div>

        {/* Legal Terms */}
        <div>
          <h4 className="font-semibold mb-2">Legal Terms</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to='/privacy-policy' className='hover:text-gray-300 visited:text-[#BCAC99]'>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to='/terms-of-service' className='hover:text-gray-300 visited:text-[#BCAC99]'>
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-center">
              <a href="mailto:info@esamnmlabs.tech" className="hover:text-gray-300">
                <img src="/icons/email-icon.svg" alt="Email"  className='pr-4'/>
                </a>
              <a href="mailto:info@esamnmlabs.tech" className="hover:text-gray-300">info@esamnmlabs.tech</a>
            </li>
            <li className="flex items-center">
              <a href="tel:+254796009226" className="hover:text-gray-300"><img src="/icons/phone-icon.svg" alt="Email"  className='pr-4'/></a>
              <a href="tel:+254796009226" className="hover:text-gray-300">+254 796009226</a>
            </li>
          </ul>
          <div className="mt-2">
            <h5 className="text-sm font-medium mb-2 underline mt-5">Social Media</h5>
            <div className="flex space-x-2">
              <a href="https://instagram.com" aria-label="LinkedIn">
                <img src="/icons/linkedin-icon.svg" alt="LinkedIn"  className='pr-4'/>
              </a>
              <a href="https://twitter.com" aria-label="TikTok">
                <img src="/icons/tiktok-icon.svg" alt="TikTok"  className='pr-4'/>
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <img src="/icons/facebook-icon.svg" alt="Facebook"  className='pr-4'/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className='mt-8' />
      <div className='flex flex-col md:flex-row justify-between'>
        <p className="text-xs mt-8 md:ml-22">© 2025 esamnmlabs. All rights reserved.</p>
        <p className="text-xs mt-8 md:ml-22">
          <a href="https://esamnlabs.vercel.app/" target="_blank" rel="noopener noreferrer">
            Developed by E-Samn Labs
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;