import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#030014]/80 backdrop-blur-lg shadow-xl border-b border-white/5 py-4' : 'bg-transparent py-8'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex items-center justify-between">
        {/* LOGO */}
        <a href="#" className="flex items-center gap-2 text-2xl font-bold text-white tracking-wider font-outfit drop-shadow-md">
          SAI KUMAR<span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse shadow-[0_0_10px_#d946ef]"></span>
        </a>

        {/* Desktop Navbar Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-fuchsia-400 transition-colors uppercase tracking-wide"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu could be toggled here - default a simplified version */}
        <nav className="flex md:hidden items-center gap-4">
          {/* Showing just a few core links for mobile to prevent overflow, or could use a button */}
          <a href="#about" className="text-sm font-medium text-gray-300">About</a>
          <a href="#contact" className="text-sm font-medium text-fuchsia-400">Contact</a>
        </nav>

      </div>
    </motion.header>
  );
}
