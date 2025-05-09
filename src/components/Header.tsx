import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-blue-900">
              Luis<span className="text-emerald-700">Villada</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-800 hover:text-blue-800 transition-colors font-medium"
            >
              Servicios
            </a>
            {/* <a
              href="#consultants"
              className="text-gray-800 hover:text-blue-800 transition-colors font-medium"
            >
              Consultores
            </a> */}
            <a
              href="#case-studies"
              className="text-gray-800 hover:text-blue-800 transition-colors font-medium"
            >
              Casos de Éxito
            </a>
            <a
              href="#blog"
              className="text-gray-800 hover:text-blue-800 transition-colors font-medium"
            >
              Formación
            </a>
            <a
              href="#contact"
              className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-2 rounded-md transition-colors font-medium"
            >
              Contactar
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-800"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 px-2 mt-2 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3">
              <a
                href="#services"
                className="text-gray-800 hover:text-blue-800 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              {/* <a
                href="#consultants"
                className="text-gray-800 hover:text-blue-800 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Consultores
              </a> */}
              <a
                href="#case-studies"
                className="text-gray-800 hover:text-blue-800 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Casos de Éxito
              </a>
              <a
                href="#blog"
                className="text-gray-800 hover:text-blue-800 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Formación
              </a>
              <a
                href="#contact"
                className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition-colors font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contactar
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
