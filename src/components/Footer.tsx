import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href="tel:+33123456789"
                className="flex items-center space-x-2 hover:text-blue-400"
              >
                <Phone className="h-4 w-4" />
                <span>06 21 87 99 62</span>
              </a>
              <a
                href="mailto:contact@constat-amiable.fr"
                className="flex items-center space-x-2 hover:text-blue-400"
              >
                <Mail className="h-4 w-4" />
                <span>constatamiable@ifpass.fr</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">À propos</h3>
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
