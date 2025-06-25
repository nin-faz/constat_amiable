import { Users, Award, Clock, Info } from "lucide-react";
import { useEffect, useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaqItems, setOpenFaqItems] = useState<number[]>([]);

  const toggleFaqItem = (index: number) => {
    setOpenFaqItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  useEffect(() => {
    document.title = "A propos de nous";
  }, []);

  return (
    <main className="flex-1 min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 py-16 relative overflow-hidden animate-fade-in font-['Montserrat','Poppins','sans-serif']">
      {/* Effet de lumière et de verre */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-r from-blue-600/40 via-indigo-400/30 to-purple-400/40 blur-2xl opacity-60 -z-10 animate-fade-in"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-80 bg-gradient-to-br from-purple-300/40 via-blue-200/30 to-indigo-200/40 blur-2xl opacity-60 -z-10 animate-fade-in"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Éléments décoratifs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div>

          <div className="text-center mb-12 relative z-10 transform transition-all duration-700 hover:scale-105">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-blue-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <Info className="h-20 w-20 text-blue-600 mx-auto mb-4 relative z-10 transform transition-all duration-500 hover:rotate-12" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              À propos de nous
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Notre mission est de simplifier la procédure de déclaration
              d'accident pour tous les conducteurs.
            </p>
          </div>

          <div className="card-sexy p-10 mb-16 border-0 shadow-2xl bg-white/80 backdrop-blur-xl relative overflow-hidden group animate-fade-in">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <div className="flex flex-col md:flex-row items-start gap-10 relative z-10">
              <div className="bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 p-6 rounded-full text-white flex-shrink-0 shadow-2xl border-4 border-white/40 animate-fade-in">
                <Award className="h-14 w-14" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-600 drop-shadow-lg tracking-wide animate-fade-in">
                  Notre engagement
                </h2>

                <div className="flex space-x-4 mb-6">
                  <button
                    onClick={() => setActiveTab(0)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeTab === 0
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Notre approche
                  </button>
                  <button
                    onClick={() => setActiveTab(1)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeTab === 1
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Notre expertise
                  </button>
                </div>

                <div
                  className="transition-all duration-500 transform"
                  style={{
                    height: "auto",
                    opacity: activeTab === 0 ? 1 : 0,
                    display: activeTab === 0 ? "block" : "none",
                  }}
                >
                  <p className="text-gray-600 mb-6">
                    Nous comprenons que faire face à un accident de la route
                    peut être stressant. C'est pourquoi nous avons créé ce guide
                    complet pour vous accompagner pas à pas dans le processus de
                    remplissage du constat amiable.
                  </p>
                  <div className="flex items-center text-blue-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">
                      Disponible 24/7 pour vous aider
                    </span>
                  </div>
                </div>

                <div
                  className="transition-all duration-500 transform"
                  style={{
                    height: "auto",
                    opacity: activeTab === 1 ? 1 : 0,
                    display: activeTab === 1 ? "block" : "none",
                  }}
                >
                  <p className="text-gray-600 mb-6">
                    Notre équipe d'experts en assurance automobile a rassemblé
                    toutes les informations essentielles pour vous aider à gérer
                    cette situation de la manière la plus sereine possible.
                  </p>
                  <div className="flex items-center text-blue-600">
                    <Users className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">
                      Une équipe de professionnels à votre service
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* Valeurs */}
            <div className="bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 p-1 rounded-2xl shadow-2xl animate-fade-in">
              <div className="bg-white/90 rounded-2xl p-8 h-full flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <svg
                    className="h-10 w-10 text-blue-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-600">
                    Clarté
                  </h3>
                </div>
                <p className="text-gray-700 mb-2">
                  Nous nous efforçons de rendre les informations aussi claires
                  et accessibles que possible.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 p-1 rounded-2xl shadow-2xl animate-fade-in">
              <div className="bg-white/90 rounded-2xl p-8 h-full flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <svg
                    className="h-10 w-10 text-blue-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-600">
                    Précision
                  </h3>
                </div>
                <p className="text-gray-700 mb-2">
                  Toutes nos informations sont vérifiées et mises à jour
                  régulièrement.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 p-1 rounded-2xl shadow-2xl animate-fade-in">
              <div className="bg-white/90 rounded-2xl p-8 h-full flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <svg
                    className="h-10 w-10 text-blue-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-600">
                    Accompagnement
                  </h3>
                </div>
                <p className="text-gray-700 mb-2">
                  Nous sommes là pour vous guider à chaque étape du processus.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 p-1 rounded-2xl shadow-2xl animate-fade-in">
              <div className="bg-white/90 rounded-2xl p-8 h-full flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <svg
                    className="h-10 w-10 text-blue-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-600">
                    Fiabilité
                  </h3>
                </div>
                <p className="text-gray-700 mb-2">
                  Nos conseils sont basés sur l'expertise de professionnels de
                  l'assurance.
                </p>
              </div>
            </div>
          </div>

          {/* Section Témoignages */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 p-1 rounded-2xl shadow-2xl mt-12 relative overflow-hidden animate-fade-in">
            <div className="bg-white/90 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-600 relative z-10 drop-shadow-lg">
                Ce que disent nos utilisateurs
              </h2>
              <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
                <div className="relative z-10 bg-white/80 p-6 rounded-xl shadow-xl border border-blue-100 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4 shadow">
                      T
                    </div>
                    <div>
                      <h3 className="font-semibold">Kadidia</h3>
                      <p className="text-sm text-gray-500">
                        Utilisateur depuis Mai 2025
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Ma meilleure amie m'a conseillé ce guide sur lequel ses
                    camarades et elle ont travaillé. L'utilisation est très
                    simple et intuitive ce qui m'a été bénéfique. J'ai pu
                    remplir mon constat amiable en quelques minutes, même après
                    un accident stressant."
                  </p>
                  <div className="flex mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="relative z-10 bg-white/80 p-6 rounded-xl shadow-xl border border-blue-100 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4 shadow">
                      T
                    </div>
                    <div>
                      <h3 className="font-semibold">Mohamed</h3>
                      <p className="text-sm text-gray-500">
                        Utilisateur depuis Mars 2025
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Le guide est carré, il t'explique tout sur le constat
                    amiable sans te prendre la tête."
                  </p>
                  <div className="flex mt-4">
                    {[1, 2, 3, 4].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="relative z-10 bg-white/80 p-6 rounded-xl shadow-xl border border-blue-100 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4 shadow">
                      S
                    </div>
                    <div>
                      <h3 className="font-semibold">Sophie</h3>
                      <p className="text-sm text-gray-500">
                        Utilisatrice depuis Février 2025
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Suite à mon accident, j'étais complètement perdue. Ce site
                    m'a guidée pas à pas pour remplir mon constat amiable
                    correctement. Un vrai soulagement dans un moment stressant
                    !"
                  </p>
                  <div className="flex mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section FAQ */}
          <div className="card-sexy p-8 mt-12 border border-blue-100 relative overflow-hidden animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-600">
              Questions fréquentes
            </h2>

            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="border border-blue-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
                <button
                  onClick={() => toggleFaqItem(0)}
                  className="flex justify-between items-center w-full p-4 text-left font-medium text-blue-800 hover:bg-blue-50 transition-colors duration-300"
                >
                  <span>Que faire immédiatement après un accident ?</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-blue-600 transform transition-transform duration-300 ${
                      openFaqItems.includes(0) ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`px-4 pb-4 transition-all duration-300 overflow-hidden ${
                    openFaqItems.includes(0)
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="text-gray-600">
                    Après un accident, assurez-vous d'abord que personne n'est
                    blessé. Si nécessaire, appelez les secours (15, 17 ou 18).
                    Mettez-vous en sécurité en signalant l'accident (triangle,
                    feux de détresse). Ensuite, échangez vos informations avec
                    l'autre conducteur et remplissez ensemble le constat amiable
                    sur place. Prenez des photos des dégâts et de la position
                    des véhicules. N'oubliez pas de transmettre le constat à
                    votre assureur dans les 5 jours ouvrés.
                  </p>
                </div>
              </div>

              <div className="border border-blue-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
                <button
                  onClick={() => toggleFaqItem(1)}
                  className="flex justify-between items-center w-full p-4 text-left font-medium text-blue-800 hover:bg-blue-50 transition-colors duration-300"
                >
                  <span>Les informations sont-elles à jour ?</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-blue-600 transform transition-transform duration-300 ${
                      openFaqItems.includes(1) ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`px-4 pb-4 transition-all duration-300 overflow-hidden ${
                    openFaqItems.includes(1)
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="text-gray-600">
                    Oui, nous mettons régulièrement à jour nos informations pour
                    refléter les dernières exigences légales et les meilleures
                    pratiques en matière de constat amiable.
                  </p>
                </div>
              </div>

              <div className="border border-blue-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
                <button
                  onClick={() => toggleFaqItem(2)}
                  className="flex justify-between items-center w-full p-4 text-left font-medium text-blue-800 hover:bg-blue-50 transition-colors duration-300"
                >
                  <span>
                    Quel est le délai pour déclarer un accident à son assurance
                    ?
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-blue-600 transform transition-transform duration-300 ${
                      openFaqItems.includes(2) ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`px-4 pb-4 transition-all duration-300 overflow-hidden ${
                    openFaqItems.includes(2)
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="text-gray-600">
                    En France, vous disposez généralement de 5 jours ouvrés pour
                    déclarer un accident à votre assurance. Ce délai commence à
                    partir du moment où l'accident s'est produit ou, si vous
                    n'étiez pas présent, à partir du moment où vous en avez eu
                    connaissance. Il est recommandé de remplir le constat
                    amiable sur place avec l'autre conducteur et de l'envoyer à
                    votre assureur dès que possible pour éviter tout problème de
                    prise en charge.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() =>
                  openFaqItems.length === 3
                    ? setOpenFaqItems([])
                    : setOpenFaqItems([0, 1, 2])
                }
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 flex items-center mx-auto"
              >
                <span>
                  {openFaqItems.length === 3
                    ? "Masquer les réponses"
                    : "Voir toutes les questions"}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 mt-12 text-white text-center relative overflow-hidden animate-fade-in">
            <div className="absolute inset-0 bg-blue-600 opacity-20">
              <svg
                className="absolute left-0 top-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="rgba(255, 255, 255, 0.1)"
                  fillOpacity="1"
                  d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 relative z-10">
              Prêt à simplifier votre déclaration d'accident ?
            </h2>
            <p className="mb-6 max-w-lg mx-auto relative z-10">
              Consultez notre guide complet et découvrez comment remplir votre
              constat amiable en toute sérénité.
            </p>
            <button
              onClick={() => (window.location.href = "/guide")}
              className="btn-sexy font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg relative z-10 transform transition-transform hover:scale-105"
            >
              Accéder au guide
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
