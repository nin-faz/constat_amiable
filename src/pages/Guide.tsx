import {
  Camera,
  FileCheck,
  ShieldAlert,
  FileText,
  Phone,
  Shield,
  CheckCircle2,
  X,
} from "lucide-react";
import { useEffect } from "react";

export default function Guide() {
  useEffect(() => {
    document.title = "Guide du Constat Amiable";
  }, []);

  return (
    <main className="flex-1 min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 py-16 relative overflow-hidden animate-fade-in font-['Montserrat','Poppins','sans-serif']">
      {/* Effet de lumière et de verre */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-r from-blue-600/40 via-indigo-400/30 to-purple-400/40 blur-2xl opacity-60 -z-10 animate-fade-in"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-80 bg-gradient-to-br from-purple-300/40 via-blue-200/30 to-indigo-200/40 blur-2xl opacity-60 -z-10 animate-fade-in"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 relative z-10 transform transition-all duration-700 hover:scale-105">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 rounded-full blur-xl opacity-40 animate-pulse"></div>
              <Shield className="h-20 w-20 text-blue-600 mx-auto mb-4 relative z-10 transform transition-all duration-500 hover:rotate-12" />
            </div>
            <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-600 drop-shadow-lg tracking-wide animate-fade-in">
              Guide du Constat Amiable
            </h1>
            <p className="text-gray-700 text-lg max-w-xl mx-auto animate-fade-in">
              Suivez ces étapes essentielles pour bien remplir votre constat
            </p>
          </div>
        </div>

        {/* Visual Flow Diagram */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 via-white to-purple-100 rounded-3xl shadow-2xl p-10 mb-12 border-0 transform transition-all duration-500 hover:shadow-2xl relative overflow-hidden group animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 opacity-30"></div>

          <div className="flex items-center justify-center mb-8">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold text-blue-800">
              Rappel des étapes essentielles{" "}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            {/* Connecting Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 800 600">
                {/* Arrows between steps */}
                <path
                  d="M 200,150 L 600,150 L 600,450 L 200,450 Z"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                {/* Arrow heads */}
                <path d="M 590,150 L 600,150 L 595,145 Z" fill="#2563EB" />
                <path d="M 600,440 L 600,450 L 605,445 Z" fill="#2563EB" />
                <path d="M 210,450 L 200,450 L 205,455 Z" fill="#2563EB" />
              </svg>
            </div>

            {/* Step 1 */}
            <div className="relative bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-6 rounded-2xl shadow-md border-2 border-blue-200 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-blue-400 group animate-fade-in">
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold transform transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-700">
                1
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-full text-white transform transition-all duration-500 group-hover:bg-blue-700 group-hover:rotate-12">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-800 group-hover:text-blue-900 transition-colors duration-300">
                    Sécuriser les lieux 🚨
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li className="transition-transform duration-300 hover:translate-x-1">
                      Allume tes feux de détresse
                    </li>
                    <li className="transition-transform duration-300 hover:translate-x-1">
                      Mets ton gilet jaune
                    </li>
                    <li className="transition-transform duration-300 hover:translate-x-1">
                      Place le triangle à 30m
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-6 rounded-2xl shadow-md border-2 border-blue-200 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-blue-400 group animate-fade-in">
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold transform transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-700">
                2
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-full text-white transform transition-all duration-500 group-hover:bg-blue-700 group-hover:rotate-12">
                  <Camera className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-800 group-hover:text-blue-900 transition-colors duration-300">
                    Prendre des photos 📸
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li className="transition-transform duration-300 hover:translate-x-1">
                      Position des véhicules
                    </li>
                    <li className="transition-transform duration-300 hover:translate-x-1">
                      Dégâts sur les deux véhicules
                    </li>
                    <li className="transition-transform duration-300 hover:translate-x-1">
                      Plaque d'immatriculation
                    </li>
                    <li className="transition-transform duration-300 hover:translate-x-1">
                      Environnement (panneaux, marquage au sol)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-6 rounded-2xl shadow-md border-2 border-blue-200 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-blue-400 group animate-fade-in">
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold transform transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-700">
                3
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-full text-white transform transition-all duration-500 group-hover:bg-blue-700 group-hover:rotate-12">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-800 group-hover:text-blue-900 transition-colors duration-300">
                    Remplir le constat 📝
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li className="transition-transform duration-300 hover:translate-x-1">
                      Informations personnelles
                    </li>
                    <li className="transition-transform duration-300 hover:translate-x-1">
                      Informations du véhicule
                    </li>
                    <li className="transition-transform duration-300 hover:translate-x-1">
                      Circonstances de l'accident
                    </li>
                    <li className="transition-transform duration-300 hover:translate-x-1">
                      Croquis de l'accident
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-6 rounded-2xl shadow-md border-2 border-blue-200 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-blue-400 group animate-fade-in">
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold transform transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-700">
                4
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-full text-white transform transition-all duration-500 group-hover:bg-blue-700 group-hover:rotate-12">
                  <FileCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-800 group-hover:text-blue-900 transition-colors duration-300">
                    Vérifier et signer 🖋️
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li className="transition-transform duration-300 hover:translate-x-1">
                      Relire toutes les informations
                    </li>
                    <li className="transition-transform duration-300 hover:translate-x-1">
                      Vérifier les cases cochées
                    </li>
                    <li className="transition-transform duration-300 hover:translate-x-1">
                      Signer le document (les deux conducteurs)
                    </li>
                    <li className="transition-transform duration-300 hover:translate-x-1">
                      Échanger les exemplaires
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Example Constat Form */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 via-white to-purple-100 rounded-3xl shadow-2xl p-10 mb-12 border-0 transform transition-all duration-500 hover:shadow-2xl relative overflow-hidden animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 opacity-30"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>

          <div className="flex items-center justify-center mb-8 relative z-10">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
              <FileText className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold text-blue-800">
              Exemple de Constat Rempli
            </h2>
          </div>

          {/* Complete Constat Form */}
          <div className="border-2 border-gray-300 mb-8">
            {/* Header Section - Date and Location combined in one row with two columns */}
            <div className="grid grid-cols-2 border-b-2 border-gray-300">
              {/* Date Section */}
              <div className="bg-gray-100 p-4 border-r-2 border-gray-300">
                <div className="font-bold text-lg mb-3">
                  1. DATE DE L'ACCIDENT
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-medium">15/06/2023</p>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-600">Heure</p>
                    <p className="font-medium">14:30</p>
                  </div>
                </div>
              </div>

              {/* Location Section */}
              <div className="bg-gray-100 p-4">
                <div className="font-bold text-lg mb-3">2. LIEU</div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-600">Adresse</p>
                  <p className="font-medium">
                    Avenue des Champs-Élysées, 75008 Paris
                  </p>
                  <p className="font-medium mt-1">France</p>
                </div>
              </div>
            </div>

            {/* Injuries Section */}
            <div className="p-3 border-b-2 border-gray-300">
              <div className="font-bold mb-1">3. BLESSÉ(S) MÊME LÉGER(S)</div>
              <div className="flex items-center">
                <div className="w-6 h-6 border border-gray-400 mr-2"></div>
                <span className="text-sm">oui</span>
                <div className="w-6 h-6 border border-gray-400 flex items-center justify-center ml-4 mr-2">
                  <div className="w-3 h-3 bg-black"></div>
                </div>
                <span className="text-sm">non</span>
              </div>
            </div>

            {/* Material Damage Section */}
            <div className="p-3 border-b-2 border-gray-300">
              <div className="font-bold mb-1">
                4. DÉGÂTS MATÉRIELS À DES VÉHICULES AUTRES QUE A ET B
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 border border-gray-400 mr-2"></div>
                <span className="text-sm">oui</span>
                <div className="w-6 h-6 border border-gray-400 flex items-center justify-center ml-4 mr-2">
                  <div className="w-3 h-3 bg-black"></div>
                </div>
                <span className="text-sm">non</span>
              </div>
            </div>

            {/* Witnesses Section */}
            <div className="p-3 border-b-2 border-gray-300">
              <div className="font-bold mb-1">
                5. TÉMOINS (Noms, adresses, tél.)
              </div>
              <div className="text-sm italic text-gray-500">
                <p>Jean Dupont, 12 rue de la Paix, 75001 Paris</p>
                <p>Tél: 06 12 34 56 78</p>
              </div>
            </div>

            {/* Vehicle Information Section - Split into A and B */}
            <div className="grid grid-cols-2 border-b-2 border-gray-300">
              {/* Vehicle A */}
              <div className="border-r-2 border-gray-300 p-3">
                <div className="bg-blue-100 p-1 text-center font-bold mb-2">
                  <span>VÉHICULE A</span>
                </div>

                {/* Policyholder Section */}
                <div className="mb-3">
                  <div className="font-bold mb-1">
                    6. PRENEUR D'ASSURANCE/ASSURÉ
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Nom: MARTIN Sophie</p>
                    <p>Adresse: 45 rue du Commerce, 75015 Paris</p>
                    <p>Tél: 06 98 76 54 32</p>
                  </div>
                </div>

                {/* Vehicle Details */}
                <div className="mb-3">
                  <div className="font-bold mb-1">7. VÉHICULE</div>
                  <div className="text-sm">
                    <p>
                      <span className="font-medium">Marque, modèle:</span>{" "}
                      Renault Clio
                    </p>
                    <p>
                      <span className="font-medium">N° d'immatriculation:</span>{" "}
                      AB-123-CD
                    </p>
                    <p>
                      <span className="font-medium">
                        Pays d'immatriculation:
                      </span>{" "}
                      FR
                    </p>
                  </div>
                </div>

                {/* Insurance Details */}
                <div className="mb-3">
                  <div className="font-bold mb-1">8. SOCIÉTÉ D'ASSURANCE</div>
                  <div className="text-sm">
                    <p>
                      <span className="font-medium">Nom:</span> Assurance Auto
                      Plus
                    </p>
                    <p>
                      <span className="font-medium">N° de contrat:</span>{" "}
                      123456789
                    </p>
                    <p>
                      <span className="font-medium">N° de carte verte:</span>{" "}
                      FR123456
                    </p>
                    <p>
                      <span className="font-medium">Validité:</span> 31/12/2023
                    </p>
                  </div>
                </div>

                {/* Driver Details */}
                <div className="mb-3">
                  <div className="font-bold mb-1">9. CONDUCTEUR</div>
                  <div className="text-sm">
                    <p>
                      <span className="font-medium">Nom:</span> MARTIN Sophie
                    </p>
                    <p>
                      <span className="font-medium">Prénom:</span> Sophie
                    </p>
                    <p>
                      <span className="font-medium">Date de naissance:</span>{" "}
                      15/05/1985
                    </p>
                    <p>
                      <span className="font-medium">
                        Permis de conduire n°:
                      </span>{" "}
                      12AB34567
                    </p>
                    <p>
                      <span className="font-medium">Délivré le:</span>{" "}
                      10/06/2003
                    </p>
                    <p>
                      <span className="font-medium">à:</span> Paris
                    </p>
                  </div>
                </div>

                {/* Initial Point of Impact */}
                <div className="mb-3">
                  <div className="font-bold mb-1">
                    10. POINT DE CHOC INITIAL
                  </div>
                  <div className="relative h-24 w-full border border-gray-300">
                    <svg viewBox="0 0 100 60" className="w-full h-full">
                      {/* Simple car outline */}
                      <rect
                        x="25"
                        y="10"
                        width="50"
                        height="30"
                        fill="none"
                        stroke="#000"
                        strokeWidth="1"
                      />
                      <rect
                        x="35"
                        y="40"
                        width="30"
                        height="10"
                        fill="none"
                        stroke="#000"
                        strokeWidth="1"
                      />
                      {/* Impact point */}
                      <circle cx="75" cy="25" r="5" fill="red" />
                    </svg>
                  </div>
                </div>

                {/* Visible Damage */}
                <div>
                  <div className="font-bold mb-1">11. DÉGÂTS APPARENTS</div>
                  <div className="text-sm">
                    <p>Aile avant droite enfoncée</p>
                    <p>Phare avant droit cassé</p>
                  </div>
                </div>
              </div>

              {/* Vehicle B */}
              <div className="p-3">
                <div className="bg-gray-200 p-1 text-center font-bold mb-2">
                  <span>VÉHICULE B</span>
                </div>

                {/* Policyholder Section */}
                <div className="mb-3">
                  <div className="font-bold mb-1">
                    6. PRENEUR D'ASSURANCE/ASSURÉ
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Nom: DUBOIS Pierre</p>
                    <p>Adresse: 28 avenue Victor Hugo, 75016 Paris</p>
                    <p>Tél: 06 12 34 56 78</p>
                  </div>
                </div>

                {/* Vehicle Details */}
                <div className="mb-3">
                  <div className="font-bold mb-1">7. VÉHICULE</div>
                  <div className="text-sm">
                    <p>
                      <span className="font-medium">Marque, modèle:</span>{" "}
                      Peugeot 308
                    </p>
                    <p>
                      <span className="font-medium">N° d'immatriculation:</span>{" "}
                      EF-456-GH
                    </p>
                    <p>
                      <span className="font-medium">
                        Pays d'immatriculation:
                      </span>{" "}
                      FR
                    </p>
                  </div>
                </div>

                {/* Insurance Details */}
                <div className="mb-3">
                  <div className="font-bold mb-1">8. SOCIÉTÉ D'ASSURANCE</div>
                  <div className="text-sm">
                    <p>
                      <span className="font-medium">Nom:</span> Assurance
                      Sécurité
                    </p>
                    <p>
                      <span className="font-medium">N° de contrat:</span>{" "}
                      987654321
                    </p>
                    <p>
                      <span className="font-medium">N° de carte verte:</span>{" "}
                      FR654321
                    </p>
                    <p>
                      <span className="font-medium">Validité:</span> 30/06/2024
                    </p>
                  </div>
                </div>

                {/* Driver Details */}
                <div className="mb-3">
                  <div className="font-bold mb-1">9. CONDUCTEUR</div>
                  <div className="text-sm">
                    <p>
                      <span className="font-medium">Nom:</span> DUBOIS
                    </p>
                    <p>
                      <span className="font-medium">Prénom:</span> Pierre
                    </p>
                    <p>
                      <span className="font-medium">Date de naissance:</span>{" "}
                      22/11/1978
                    </p>
                    <p>
                      <span className="font-medium">
                        Permis de conduire n°:
                      </span>{" "}
                      98ZY76543
                    </p>
                    <p>
                      <span className="font-medium">Délivré le:</span>{" "}
                      05/03/1997
                    </p>
                    <p>
                      <span className="font-medium">à:</span> Lyon
                    </p>
                  </div>
                </div>

                {/* Initial Point of Impact */}
                <div className="mb-3">
                  <div className="font-bold mb-1">
                    10. POINT DE CHOC INITIAL
                  </div>
                  <div className="relative h-24 w-full border border-gray-300">
                    <svg viewBox="0 0 100 60" className="w-full h-full">
                      {/* Simple car outline */}
                      <rect
                        x="25"
                        y="10"
                        width="50"
                        height="30"
                        fill="none"
                        stroke="#000"
                        strokeWidth="1"
                      />
                      <rect
                        x="35"
                        y="40"
                        width="30"
                        height="10"
                        fill="none"
                        stroke="#000"
                        strokeWidth="1"
                      />
                      {/* Impact point */}
                      <circle cx="25" cy="25" r="5" fill="red" />
                    </svg>
                  </div>
                </div>

                {/* Visible Damage */}
                <div>
                  <div className="font-bold mb-1">11. DÉGÂTS APPARENTS</div>
                  <div className="text-sm">
                    <p>Aile avant gauche enfoncée</p>
                    <p>Pare-choc avant gauche déformé</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3">
              {/* Left Column - Circumstances */}
              <div className="col-span-2 border-r-2 border-gray-300">
                <div className="bg-gray-100 p-2 text-center font-bold border-b-2 border-gray-300 relative">
                  <span className="text-lg">12. CIRCONSTANCES</span>
                  <p className="text-xs font-normal mt-1">
                    Mettre une croix dans chacune des cases utiles pour préciser
                    le croquis
                  </p>
                </div>

                <div className="grid grid-cols-3 border-b-2 border-gray-300">
                  {/* Vehicle A Checkboxes */}
                  <div className="border-r border-gray-300">
                    <div className="flex justify-center py-2">
                      <div className="w-6 h-6 border border-gray-400 flex items-center justify-center">
                        <div className="w-3 h-3 bg-black"></div>
                      </div>
                    </div>
                  </div>

                  {/* Circumstances Text */}
                  <div className="p-2 border-r border-gray-300">
                    <p className="text-sm">en stationnement / à l'arrêt</p>
                  </div>

                  {/* Vehicle B Checkboxes */}
                  <div>
                    <div className="flex justify-center py-2">
                      <div className="w-6 h-6 border border-gray-400"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 border-b-2 border-gray-300">
                  <div className="border-r border-gray-300">
                    <div className="flex justify-center py-2">
                      <div className="w-6 h-6 border border-gray-400"></div>
                    </div>
                  </div>
                  <div className="p-2 border-r border-gray-300">
                    <p className="text-sm">quittait un stationnement</p>
                  </div>
                  <div>
                    <div className="flex justify-center py-2">
                      <div className="w-6 h-6 border border-gray-400"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 border-b-2 border-gray-300">
                  <div className="border-r border-gray-300">
                    <div className="flex justify-center py-2">
                      <div className="w-6 h-6 border border-gray-400"></div>
                    </div>
                  </div>
                  <div className="p-2 border-r border-gray-300">
                    <p className="text-sm">
                      sortait d'un parking, d'un lieu privé, d'un chemin de
                      terre
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-center py-2">
                      <div className="w-6 h-6 border border-gray-400 flex items-center justify-center">
                        <div className="w-3 h-3 bg-black"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 border-b-2 border-gray-300">
                  <div className="border-r border-gray-300">
                    <div className="flex justify-center py-2">
                      <div className="w-6 h-6 border border-gray-400"></div>
                    </div>
                  </div>
                  <div className="p-2 border-r border-gray-300">
                    <p className="text-sm">
                      s'engageait dans un parking, un lieu privé, un chemin de
                      terre
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-center py-2">
                      <div className="w-6 h-6 border border-gray-400"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Accident Sketch */}
              <div>
                <div className="bg-gray-100 p-2 text-center font-bold border-b-2 border-gray-300">
                  <span className="text-lg">13. CROQUIS DE L'ACCIDENT</span>
                </div>

                <div className="p-4 aspect-square relative">
                  <div className="absolute inset-4 border-2 border-dashed border-gray-300">
                    {/* Simple SVG representation of the accident */}
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      {/* Roads */}
                      <path
                        d="M 0,100 L 200,100"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <path
                        d="M 100,0 L 100,200"
                        stroke="black"
                        strokeWidth="2"
                      />
                      {/* Stop line */}
                      <line
                        x1="90"
                        y1="110"
                        x2="90"
                        y2="90"
                        stroke="red"
                        strokeWidth="2"
                      />
                      {/* Cars */}
                      <rect
                        x="85"
                        y="95"
                        width="20"
                        height="10"
                        fill="#60A5FA"
                      />{" "}
                      {/* Vehicle A */}
                      <rect
                        x="120"
                        y="85"
                        width="10"
                        height="20"
                        fill="#9CA3AF"
                      />{" "}
                      {/* Vehicle B */}
                      {/* Labels */}
                      <text x="90" y="98" fontSize="8" fill="white">
                        A
                      </text>
                      <text x="123" y="98" fontSize="8" fill="white">
                        B
                      </text>
                      {/* Arrow for direction */}
                      <path
                        d="M 125,70 L 125,85"
                        stroke="black"
                        strokeWidth="1"
                      />
                      <polygon points="125,85 122,80 128,80" fill="black" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Signatures Section */}
            <div className="grid grid-cols-2 border-t-2 border-gray-300">
              <div className="border-r-2 border-gray-300 p-4">
                <h4 className="font-bold text-sm mb-2">
                  Signature Conducteur A
                </h4>
                <div className="h-16 border-b border-gray-400 italic text-gray-400 flex items-end justify-end pb-1">
                  <span>Sophie Martin</span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-sm mb-2">
                  Signature Conducteur B
                </h4>
                <div className="h-16 border-b border-gray-400 italic text-gray-400 flex items-end justify-end pb-1">
                  <span>Pierre Dubois</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-100 p-8 rounded-2xl shadow-lg border border-blue-200 relative overflow-hidden animate-fade-in">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>

            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-800">
                Conseils importants
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="bg-white/90 p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-blue-600 animate-fade-in">
                <h4 className="font-semibold text-blue-700 mb-4 flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-blue-500" />À faire
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="transition-transform duration-300 hover:translate-x-1">
                      Remplir le constat même pour un petit accrochage
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="transition-transform duration-300 hover:translate-x-1">
                      Prendre des photos avant de déplacer les véhicules
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="transition-transform duration-300 hover:translate-x-1">
                      Vérifier que toutes les informations sont correctes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="transition-transform duration-300 hover:translate-x-1">
                      Garder une copie du constat
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/90 p-6 rounded-2xl shadow-lg border-l-4 border-red-500 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-red-600 animate-fade-in">
                <h4 className="font-semibold text-red-700 mb-4 flex items-center">
                  <X className="h-5 w-5 mr-2 text-red-500" />À éviter
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full mr-2 mt-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="transition-transform duration-300 hover:translate-x-1">
                      Reconnaître verbalement sa responsabilité
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full mr-2 mt-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="transition-transform duration-300 hover:translate-x-1">
                      Signer un constat non rempli ou incomplet
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full mr-2 mt-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="transition-transform duration-300 hover:translate-x-1">
                      Oublier de cocher les cases des circonstances
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full mr-2 mt-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="transition-transform duration-300 hover:translate-x-1">
                      Partir sans avoir échangé les constats
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 via-white to-purple-100 rounded-3xl shadow-2xl p-10 text-center border-0 transform transition-all duration-500 hover:shadow-2xl relative overflow-hidden animate-fade-in">
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100 rounded-full opacity-20 translate-y-1/3 -translate-x-1/3"></div>

          <div className="relative z-10">
            <div className="inline-block bg-blue-100 p-4 rounded-full text-blue-600 mb-4">
              <Phone className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">
              Besoin d'aide supplémentaire ?
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Si vous avez des questions ou besoin d'assistance pour remplir
              votre constat amiable, n'hésitez pas à nous contacter.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:+33123456789"
                className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Phone className="h-5 w-5" />
                <span>Nous appeler</span>
              </a>
              <a
                href="mailto:contact@constat-amiable.fr"
                className="flex items-center justify-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <FileText className="h-5 w-5" />
                <span>Nous écrire</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
