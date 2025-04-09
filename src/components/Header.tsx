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
    <header className="bg-blue-600 text-white shadow-lg relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 py-10">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo-MMA.png"
              alt="Logo"
              className="h-16 object-contain border rounded-lg"
            />{" "}
            <span className="text-xl font-bold">Constat Amiable Guide</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ to, icon: Icon, text }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{text}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-blue-700 rounded-lg transition"
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
            absolute top-full left-0 right-0 bg-blue-600 shadow-lg md:hidden
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
                className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-lg transition"
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
