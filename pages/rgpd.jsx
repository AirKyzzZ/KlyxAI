import Head from 'next/head'
import { Shield, User, Database, Eye, Download, Trash2, Edit, Lock } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function RGPD() {
  const rights = [
    {
      title: "Droit d'accès",
      description: "Consulter vos données personnelles",
      icon: Eye,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10"
    },
    {
      title: "Droit de rectification",
      description: "Corriger des données inexactes",
      icon: Edit,
      color: "text-green-400",
      bgColor: "bg-green-400/10"
    },
    {
      title: "Droit à l'effacement",
      description: "Demander la suppression de vos données",
      icon: Trash2,
      color: "text-red-400",
      bgColor: "bg-red-400/10"
    },
    {
      title: "Droit à la portabilité",
      description: "Récupérer vos données dans un format structuré",
      icon: Download,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10"
    },
    {
      title: "Droit d'opposition",
      description: "Vous opposer au traitement de vos données",
      icon: User,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10"
    },
    {
      title: "Droit de limitation",
      description: "Limiter le traitement de vos données",
      icon: Lock,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10"
    }
  ]

  const dataCategories = [
    {
      category: "Données d'identification",
      examples: ["Nom, prénom", "Adresse email", "Téléphone", "Adresse postale"],
      purpose: "Création de compte et facturation",
      retention: "Durée du compte + 3 ans"
    },
    {
      category: "Données de connexion",
      examples: ["Adresse IP", "Type de navigateur", "Pages visitées"],
      purpose: "Sécurité et amélioration du service",
      retention: "12 mois"
    },
    {
      category: "Données de contenu",
      examples: ["Sites web créés", "Images uploadées", "Préférences"],
      purpose: "Fourniture du service",
      retention: "Durée du compte"
    },
    {
      category: "Données de paiement",
      examples: ["Informations de facturation", "Historique des paiements"],
      purpose: "Traitement des paiements",
      retention: "10 ans (obligation légale)"
    }
  ]

  return (
    <>
      <Head>
        <title>RGPD - Protection des données - Klyx</title>
        <meta name="description" content="Conformité RGPD de Klyx - Vos droits et notre engagement pour la protection de vos données" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Conformité RGPD
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Notre engagement pour la protection de vos données personnelles
              </p>
            </div>

            {/* Company Info */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Informations sur l'entreprise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Klyx Studio</h3>
                  <p className="mb-2">30 Cours Henri Brunet</p>
                  <p className="mb-2">33000 Bordeaux, France</p>
                  <p className="mb-2">SIRET : 94157236400011</p>
                  <p>Email : contact@klyx.fr</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Délégué à la protection des données</h3>
                  <p className="mb-2">Email : contact@klyx.fr</p>
                  <p className="mb-2">Téléphone : 07 83 97 23 60</p>
                  <p>Adresse : 30 Cours Henri Brunet, 33000 Bordeaux</p>
                </div>
              </div>
            </div>

            {/* RGPD Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Qu'est-ce que le RGPD ?</h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Le Règlement Général sur la Protection des Données (RGPD) est un règlement européen 
                  qui renforce et unifie la protection des données personnelles des citoyens de l'Union européenne. 
                  Il s'applique à toutes les entreprises qui traitent des données personnelles de résidents européens.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Chez Klyx, nous nous engageons à respecter pleinement le RGPD et à protéger vos données personnelles 
                  avec les plus hauts standards de sécurité et de confidentialité.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Vos droits RGPD</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rights.map((right, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl ${right.bgColor} ${right.color}`}>
                        <right.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">{right.title}</h3>
                        <p className="text-gray-300 text-sm">{right.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Exercise Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Comment exercer vos droits</h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Par email</h3>
                    <p className="text-gray-300 mb-4">
                      Envoyez votre demande à notre délégué à la protection des données :
                    </p>
                    <a 
                      href="mailto:contact@klyx.fr" 
                      className="text-primary-400 hover:text-primary-300 font-medium"
                    >
                      contact@klyx.fr
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Par téléphone</h3>
                    <p className="text-gray-300 mb-4">
                      Appelez-nous pour toute question concernant vos droits :
                    </p>
                    <a 
                      href="tel:+33783972360" 
                      className="text-primary-400 hover:text-primary-300 font-medium"
                    >
                      07 83 97 23 60
                    </a>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Informations à inclure dans votre demande :</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Votre nom et prénom</li>
                    <li>• Votre adresse email</li>
                    <li>• Le droit que vous souhaitez exercer</li>
                    <li>• Les raisons de votre demande (si applicable)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Categories */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Catégories de données traitées</h2>
              <div className="space-y-6">
                {dataCategories.map((category, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-white font-medium mb-2">Exemples</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          {category.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex}>• {example}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Finalité</h4>
                        <p className="text-gray-300 text-sm">{category.purpose}</p>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Conservation</h4>
                        <p className="text-gray-300 text-sm">{category.retention}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Measures */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Mesures de sécurité</h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Protection technique</h3>
                    <ul className="text-gray-300 space-y-3">
                      <li>• Chiffrement SSL/TLS pour toutes les communications</li>
                      <li>• Chiffrement des données au repos</li>
                      <li>• Accès restreint aux données personnelles</li>
                      <li>• Sauvegardes sécurisées et chiffrées</li>
                      <li>• Monitoring 24/7 de nos systèmes</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Protection organisationnelle</h3>
                    <ul className="text-gray-300 space-y-3">
                      <li>• Formation RGPD de notre équipe</li>
                      <li>• Procédures de gestion des incidents</li>
                      <li>• Audit régulier de nos pratiques</li>
                      <li>• Délégué à la protection des données</li>
                      <li>• Évaluation d'impact sur la protection des données</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Transfers */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Transferts de données</h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Vos données sont principalement stockées et traitées en France. En cas de transfert 
                  vers des pays tiers, nous nous assurons que des garanties appropriées sont en place :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Pays de l'UE</h3>
                    <p className="text-gray-300 text-sm">
                      Transferts autorisés sans garanties supplémentaires
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Pays tiers</h3>
                    <p className="text-gray-300 text-sm">
                      Garanties contractuelles et clauses types de protection des données
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Breach */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Gestion des incidents</h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  En cas de violation de données personnelles, nous nous engageons à :
                </p>
                <ul className="text-gray-300 space-y-3">
                  <li>• Détecter et documenter l'incident dans les 72 heures</li>
                  <li>• Notifier la CNIL si nécessaire</li>
                  <li>• Informer les personnes concernées si le risque est élevé</li>
                  <li>• Prendre des mesures correctives immédiates</li>
                  <li>• Analyser les causes et prévenir les récurrences</li>
                </ul>
              </div>
            </div>

            {/* Contact CNIL */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Recours et plaintes</h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Nous contacter</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      Essayez d'abord de résoudre le problème avec nous :
                    </p>
                    <a 
                      href="mailto:contact@klyx.fr" 
                      className="text-primary-400 hover:text-primary-300 text-sm"
                    >
                      contact@klyx.fr
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Porter plainte</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      Vous pouvez porter plainte auprès de la CNIL :
                    </p>
                    <a 
                      href="https://www.cnil.fr/fr/plaintes" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 text-sm"
                    >
                      www.cnil.fr/fr/plaintes
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Mises à jour</h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  Cette page est régulièrement mise à jour pour refléter nos pratiques actuelles 
                  en matière de protection des données. La dernière mise à jour date du 15 janvier 2024.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Questions sur le RGPD ?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Notre délégué à la protection des données est là pour répondre à toutes vos questions 
                concernant la protection de vos données personnelles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contact@klyx.fr"
                  className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  <span>Contacter le DPO</span>
                </a>
                <a
                  href="/privacy"
                  className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  <span>Politique de confidentialité</span>
                </a>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
} 