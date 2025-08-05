import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { Check, X, Settings, Shield, Eye, EyeOff } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Cookies() {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always true, cannot be disabled
    performance: false,
    functional: false,
    marketing: false
  })

  const cookieTypes = [
    {
      name: 'Cookies essentiels',
      description: 'Nécessaires au fonctionnement du site',
      examples: ['Session de connexion', 'Préférences de langue', 'Sécurité'],
      required: true,
      key: 'essential'
    },
    {
      name: 'Cookies de performance',
      description: 'Nous aident à améliorer le site en analysant son utilisation',
      examples: ['Google Analytics', 'Statistiques de visite', 'Temps de chargement'],
      required: false,
      key: 'performance'
    },
    {
      name: 'Cookies de fonctionnalité',
      description: 'Améliorent votre expérience en mémorisant vos préférences',
      examples: ['Thème préféré', 'Paramètres de l\'éditeur', 'Historique des actions'],
      required: false,
      key: 'functional'
    },
    {
      name: 'Cookies de marketing',
      description: 'Utilisés pour personnaliser les publicités et le contenu',
      examples: ['Publicités ciblées', 'Réseaux sociaux', 'Partage de contenu'],
      required: false,
      key: 'marketing'
    }
  ]

  const handleCookieToggle = (key) => {
    if (key === 'essential') return // Cannot disable essential cookies
    
    setCookiePreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const savePreferences = () => {
    // In a real app, this would save to localStorage and update the actual cookie settings
    alert('Préférences de cookies sauvegardées !')
  }

  return (
    <>
      <Head>
        <title>Politique des cookies - Klyx</title>
        <meta name="description" content="Politique des cookies de Klyx - Gestion de vos préférences" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Politique des cookies
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Dernière mise à jour : 15 janvier 2024
              </p>
            </div>

            {/* Introduction */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Qu'est-ce qu'un cookie ?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site web. 
                Les cookies nous aident à améliorer votre expérience en mémorisant vos préférences et en analysant 
                l'utilisation du site.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Cette page vous explique quels cookies nous utilisons et comment vous pouvez les gérer.
              </p>
            </div>

            {/* Cookie Types */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Types de cookies que nous utilisons</h2>
              <div className="space-y-6">
                {cookieTypes.map((cookieType, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-white">{cookieType.name}</h3>
                          {cookieType.required && (
                            <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs font-medium rounded">
                              Requis
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300 mb-4">{cookieType.description}</p>
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-white mb-2">Exemples :</h4>
                          <ul className="text-gray-400 text-sm space-y-1">
                            {cookieType.examples.map((example, exampleIndex) => (
                              <li key={exampleIndex}>• {example}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="ml-6">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={cookiePreferences[cookieType.key]}
                            onChange={() => handleCookieToggle(cookieType.key)}
                            disabled={cookieType.required}
                            className="sr-only"
                          />
                          <div className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                            cookiePreferences[cookieType.key]
                              ? 'bg-primary-600'
                              : 'bg-gray-600'
                          } ${cookieType.required ? 'opacity-50' : ''}`}>
                            <div className={`w-5 h-5 bg-white rounded-full transform transition-transform duration-300 ${
                              cookiePreferences[cookieType.key] ? 'translate-x-6' : 'translate-x-1'
                            }`} />
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cookie Management */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Gérer vos préférences</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Paramètres actuels</h3>
                  <div className="space-y-3">
                    {Object.entries(cookiePreferences).map(([key, value]) => {
                      const cookieType = cookieTypes.find(ct => ct.key === key)
                      return (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-gray-300">{cookieType?.name}</span>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            value ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                          }`}>
                            {value ? 'Activé' : 'Désactivé'}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                  <button
                    onClick={savePreferences}
                    className="mt-6 w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300"
                  >
                    Sauvegarder les préférences
                  </button>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Autres options</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-medium mb-2">Navigateur</h4>
                      <p className="text-gray-300 text-sm">
                        Vous pouvez désactiver les cookies dans les paramètres de votre navigateur. 
                        Consultez l'aide de votre navigateur pour plus d'informations.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Suppression</h4>
                      <p className="text-gray-300 text-sm">
                        Vous pouvez supprimer les cookies existants via les paramètres de votre navigateur.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Mode navigation privée</h4>
                      <p className="text-gray-300 text-sm">
                        Utilisez le mode navigation privée pour éviter le stockage de cookies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Party Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Cookies tiers</h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Nous utilisons également des services tiers qui peuvent placer leurs propres cookies :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Google Analytics</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      Nous aide à comprendre comment vous utilisez notre site.
                    </p>
                    <Link
                      href="/privacy"
                      className="text-primary-400 hover:text-primary-300 text-sm"
                    >
                      Politique de confidentialité Google
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Stripe</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      Traite les paiements de manière sécurisée.
                    </p>
                    <Link
                      href="/privacy"
                      className="text-primary-400 hover:text-primary-300 text-sm"
                    >
                      Politique de confidentialité Stripe
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookie Duration */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Durée de vie des cookies</h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">Session</h3>
                    <p className="text-gray-300 text-sm">
                      Supprimés à la fermeture du navigateur
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">Persistants</h3>
                    <p className="text-gray-300 text-sm">
                      Conservés jusqu'à 2 ans maximum
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">Tiers</h3>
                    <p className="text-gray-300 text-sm">
                      Selon la politique du fournisseur
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Impact de la désactivation</h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Si vous désactivez les cookies :</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Certaines fonctionnalités peuvent ne pas fonctionner</li>
                      <li>• Vous devrez vous reconnecter à chaque visite</li>
                      <li>• Vos préférences ne seront pas mémorisées</li>
                      <li>• Nous ne pourrons pas analyser l'utilisation du site</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Si vous les gardez activés :</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Expérience utilisateur optimisée</li>
                      <li>• Connexion automatique</li>
                      <li>• Préférences mémorisées</li>
                      <li>• Amélioration continue du service</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Mises à jour de cette politique</h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  Nous pouvons mettre à jour cette politique des cookies de temps à autre. 
                  Les modifications importantes seront notifiées par email ou via une notification 
                  sur notre site. Nous vous encourageons à consulter régulièrement cette page.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Questions ?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Si vous avez des questions concernant notre utilisation des cookies, 
                n'hésitez pas à nous contacter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contact@klyx.fr"
                  className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  <span>Nous contacter</span>
                </a>
                <Link
                  href="/privacy"
                  className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  <span>Politique de confidentialité</span>
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
} 