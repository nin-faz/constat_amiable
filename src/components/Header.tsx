import { Car, FileText, Home, Info, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", icon: Home, text: "Accueil" },
    { to: "/guide", icon: FileText, text: "Guide" },
    { to: "/about", icon: Info, text: "À propos" },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 text-white shadow-2xl relative animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 py-10">
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              src="/logo-MMA.png"
              alt="Logo"
              className="h-16 object-contain border-2 border-blue-300 rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300 bg-white/80 backdrop-blur"
            />
            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-100 via-white to-purple-200 bg-clip-text text-transparent drop-shadow-lg tracking-wide animate-fade-in">
              Constat Amiable Guide
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ to, icon: Icon, text }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 shadow-md hover:scale-105 transition-transform duration-200 font-semibold text-base tracking-wide"
              >
                <Icon className="h-5 w-5" />
                <span>{text}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 shadow-md hover:scale-110 transition-transform duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            absolute top-full left-0 right-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 shadow-2xl md:hidden
            transform transition-transform duration-200 ease-in-out
            ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }
          `}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map(({ to, icon: Icon, text }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 p-2 rounded-xl transition font-semibold"
              >
                <Icon className="h-5 w-5" />
                <span>{text}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
