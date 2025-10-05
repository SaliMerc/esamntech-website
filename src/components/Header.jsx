import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'Why Us', href: '/#why-us' },
    { name: 'Our Services', href: '/#services' },
    { name: 'Portfolio', href: '/portofolio' },
    { name: 'Pricing', href: '/#pricing' },
  ];

  return (
    <header className={`w-full fixed top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-[#FFFAF6]' : 'bg-[#FFFAF600]'
      }`}>
      <nav className="mx-auto px-4 sm:px-6 lg:px-4 max-w-7xl flex items-center justify-between h-28">

        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="text-xl sm:text-2xl font-bold flex items-center">
            <Link to='/#home'>
                <img src="/brand-items/esamn-main-logo.svg" alt="E-Samn Labs Logo" />
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-black hover:text-[#721B27] hover:underline transition-colors duration-200 font-medium text-sm lg:text-base"
            >
              {item.name}
            </Link>
          ))}

          <Button text="Contact" color="maroon" width="w-35" to="/#contact" />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#721B27] hover:text-[#721B27] transition-colors duration-200 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={50} /> : <Menu size={50} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-25 right-4 w-[90%] h-[100vh] bg-[#FFFAF6] shadow-lg rounded-lg px-10 py-4`}>
          <div className="flex flex-col space-y-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-[#721B27] transition-colors duration-200 font-medium py-2 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {/* <a
              href="#contact"
              className="bg-[#721B27] text-white px-4 py-2 rounded-md hover:bg-[#721B27] transition-colors duration-200 font-medium text-center text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a> */}

            <Button text="Contact" color="maroon" width="w-full" to="/#contact" onClick={() => setIsMenuOpen(false)} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;