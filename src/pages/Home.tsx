import {
  ArrowRight,
  ClipboardCheck,
  FileText,
  Users,
  FileQuestion,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.title = "Accueil";
  }, []);

  return (
    <main className="flex-1 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 min-h-screen relative overflow-hidden animate-fade-in">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2 blur-2xl animate-fade-in"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 rounded-full opacity-30 translate-x-1/3 translate-y-1/3 blur-2xl animate-fade-in"></div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center py-32 rounded-b-3xl shadow-2xl animate-fade-in"
        style={{
          backgroundImage:
            'linear-gradient(rgba(49, 46, 129, 0.5), rgba(99, 102, 241, 0.3)), url("https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 relative z-10 transform transition-all duration-700 hover:scale-105 animate-fade-in">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 rounded-full blur-xl opacity-40 animate-pulse"></div>
              </div>
              <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-purple-500 drop-shadow-lg tracking-wide animate-fade-in">
                Constat Amiable - Votre assistant
              </h1>
              <p className="text-white text-lg max-w-xl mx-auto animate-fade-in">
                Suivez ces étapes essentielles pour bien remplir votre constat
              </p>
              <div className="mt-8">
                <Link
                  to="/guide"
                  className="btn-sexy inline-flex p-4 rounded-full items-center shadow-xl hover:scale-105 animate-fade-in"
                >
                  Commencer le guide
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What is Constat Amiable Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-3xl mx-auto">
          <div className="card-sexy p-8 mb-12 border border-blue-100 relative overflow-hidden group animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
              <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-4 rounded-full text-blue-600 flex-shrink-0 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                <FileQuestion className="h-12 w-12" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-600">
                  À quoi sert un constat amiable ?
                </h2>
                <div className="bg-blue-50/80 p-6 rounded-xl text-left shadow-inner">
                  <p className="text-lg text-gray-700 mb-4">
                    Imagine que tu viens d'avoir un petit accrochage avec une
                    autre voiture (ça arrive même aux meilleurs conducteurs !
                    😅). Le constat amiable, c'est comme un "rapport officiel"
                    que tu remplis avec l'autre conducteur.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    C'est super important car :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    <li>Il protège tes droits et ceux de l'autre conducteur</li>
                    <li>
                      Il permet à ton assurance de te rembourser les réparations
                    </li>
                    <li>C'est obligatoire, même pour un petit choc !</li>
                  </ul>
                  <p className="text-lg text-gray-700">
                    En gros, c'est ton meilleur allié en cas d'accident. Il
                    évite les disputes et les mauvaises surprises plus tard.
                    Notre guide t'explique comment le remplir correctement,
                    étape par étape ! 👇
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="card-sexy p-8 border border-blue-100 relative overflow-hidden animate-fade-in">
            {/* Éléments décoratifs pour la section */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-full opacity-20 translate-y-1/3 -translate-x-1/3"></div>
            <h2 className="text-2xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-600">
              Pourquoi utiliser notre guide ?
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-lg mx-auto">
              Les avantages qui font la différence pour vous aider
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/80 p-6 rounded-xl shadow-lg border border-transparent hover:border-blue-300 transition-all duration-300 hover:shadow-blue-200 hover:-translate-y-2 group animate-fade-in">
                <div className="text-blue-600 mb-4 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-4 rounded-full inline-block group-hover:bg-blue-200 transition-all duration-300 shadow">
                  <ClipboardCheck className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-700 transition-colors duration-300 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-600">
                  Instructions claires
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  Des explications détaillées pour chaque section du constat
                  amiable
                </p>
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-400 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
              <div className="bg-white/80 p-6 rounded-xl shadow-lg border border-transparent hover:border-blue-300 transition-all duration-300 hover:shadow-blue-200 hover:-translate-y-2 group animate-fade-in">
                <div className="text-blue-600 mb-4 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-4 rounded-full inline-block group-hover:bg-blue-200 transition-all duration-300 shadow">
                  <FileText className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-700 transition-colors duration-300 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-600">
                  Exemples pratiques
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  Des cas concrets pour mieux comprendre comment remplir le
                  formulaire
                </p>
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-400 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
              <div className="bg-white/80 p-6 rounded-xl shadow-lg border border-transparent hover:border-blue-300 transition-all duration-300 hover:shadow-blue-200 hover:-translate-y-2 group animate-fade-in">
                <div className="text-blue-600 mb-4 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-4 rounded-full inline-block group-hover:bg-blue-200 transition-all duration-300 shadow">
                  <Users className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-700 transition-colors duration-300 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-600">
                  Conseils d'experts
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  Des recommandations professionnelles pour éviter les erreurs
                  courantes
                </p>
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-400 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
