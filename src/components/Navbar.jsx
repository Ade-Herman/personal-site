import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 2xl:px-16 py-4 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md border-b border-sky-100/80 shadow-sm py-3"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-360 3xl:max-w-430 4xl:max-w-500 mx-auto flex justify-between items-center">
        <a
          href="#"
          className="text-xl md:text-2xl font-black tracking-tighter text-text-main flex items-center gap-2 group"
        >
          <span className="w-8 h-8 rounded-lg bg-sky-400 text-white flex items-center justify-center font-extrabold text-sm shadow-md group-hover:scale-105 transition-transform">
            A
          </span>
          <span>ADE</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 2xl:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm 2xl:text-base font-medium text-text-muted hover:text-brand-primary transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-primary hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-text-main text-white px-6 py-2.5 rounded-full text-sm 2xl:text-base font-semibold hover:bg-brand-secondary hover:shadow-lg transition-all active:scale-95"
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

