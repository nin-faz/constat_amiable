import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 text-white mt-auto shadow-2xl animate-fade-in">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wide uppercase">
              Contact
            </h3>
            <div className="space-y-2">
              <a
                href="tel:+33 21 87 99 62"
                className="flex items-center space-x-2 hover:text-purple-200 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>06 21 87 99 62</span>
              </a>
              <a
                href="mailto:constatamiable@ifpass.fr"
                className="flex items-center space-x-2 hover:text-purple-200 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>constatamiable@ifpass.fr</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wide uppercase">
              Liens utiles
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-purple-200 transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-200 transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-200 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wide uppercase">
              À propos
            </h3>
            <p className="text-white">
              Guide complet pour vous aider à remplir votre constat amiable en
              cas d'accident automobile.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white text-center text-white">
          <p>
            © {new Date().getFullYear()} Constat Amiable Guide. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
