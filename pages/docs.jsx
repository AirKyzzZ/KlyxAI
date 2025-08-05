import Head from 'next/head'
import { BookOpen, Code, Zap, Users, Settings, FileText, ArrowRight, ExternalLink } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Docs() {
  const sections = [
    {
      title: 'Démarrage rapide',
      description: 'Créez votre premier site en 5 minutes',
      icon: Zap,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      link: '#getting-started'
    },
    {
      title: 'API Reference',
      description: 'Documentation complète de l\'API REST',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      link: '#api'
    },
    {
      title: 'Guides',
      description: 'Tutoriels et bonnes pratiques',
      icon: BookOpen,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      link: '#guides'
    },
    {
      title: 'Intégrations',
      description: 'Connectez vos outils préférés',
      icon: Settings,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      link: '#integrations'
    }
  ]

  const quickLinks = [
    { name: 'Créer un site', href: '/builder' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Statut des services', href: '/status' },
    { name: 'Support', href: '/help' }
  ]

  return (
    <>
      <Head>
        <title>Documentation - Klyx</title>
        <meta name="description" content="Documentation complète de Klyx - Guides, API, intégrations" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Documentation Klyx
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Tout ce que vous devez savoir pour utiliser Klyx efficacement. 
                Des guides détaillés aux références API complètes.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Rechercher dans la documentation..."
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <FileText className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-white mb-6">Liens rapides</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white group-hover:text-primary-400 transition-colors duration-300">
                        {link.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-400 transition-colors duration-300" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Main Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {sections.map((section, index) => (
                <a
                  key={index}
                  href={section.link}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl ${section.bgColor} ${section.color}`}>
                        <section.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                          {section.title}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          {section.description}
                        </p>
                        <div className="flex items-center text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
                          <span className="text-sm font-medium">En savoir plus</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Getting Started Section */}
            <div id="getting-started" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Démarrage rapide</h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary-400">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Créez votre compte</h3>
                    <p className="text-gray-300 text-sm">
                      Inscrivez-vous gratuitement en quelques secondes avec votre email
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary-400">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Décrivez votre projet</h3>
                    <p className="text-gray-300 text-sm">
                      Dites-nous ce que vous voulez créer et notre IA s'occupe du reste
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary-400">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Personnalisez et publiez</h3>
                    <p className="text-gray-300 text-sm">
                      Modifiez votre site et mettez-le en ligne en un clic
                    </p>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <a
                    href="/builder"
                    className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300"
                  >
                    <span>Commencer maintenant</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* API Section */}
            <div id="api" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">API Reference</h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Endpoints principaux</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center space-x-4">
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded">GET</span>
                        <code className="text-white font-mono">/api/sites</code>
                        <span className="text-gray-400 text-sm">Récupérer tous les sites</span>
                      </div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center space-x-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded">POST</span>
                        <code className="text-white font-mono">/api/sites</code>
                        <span className="text-gray-400 text-sm">Créer un nouveau site</span>
                      </div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center space-x-4">
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm font-medium rounded">PUT</span>
                        <code className="text-white font-mono">/api/sites/{'{id}'}</code>
                        <span className="text-gray-400 text-sm">Mettre à jour un site</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href="/api"
                    className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300"
                  >
                    <span>Voir la documentation complète de l'API</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Guides Section */}
            <div id="guides" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Guides et tutoriels</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Créer votre premier site</h3>
                  <p className="text-gray-300 mb-4">
                    Guide étape par étape pour créer votre premier site web avec Klyx
                  </p>
                  <div className="flex items-center text-primary-400">
                    <span className="text-sm">5 min de lecture</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Optimiser votre SEO</h3>
                  <p className="text-gray-300 mb-4">
                    Conseils pour améliorer le référencement de votre site
                  </p>
                  <div className="flex items-center text-primary-400">
                    <span className="text-sm">8 min de lecture</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Intégrer des paiements</h3>
                  <p className="text-gray-300 mb-4">
                    Comment configurer Stripe pour accepter les paiements
                  </p>
                  <div className="flex items-center text-primary-400">
                    <span className="text-sm">10 min de lecture</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Personnaliser votre design</h3>
                  <p className="text-gray-300 mb-4">
                    Modifier les couleurs, polices et mise en page de votre site
                  </p>
                  <div className="flex items-center text-primary-400">
                    <span className="text-sm">12 min de lecture</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Besoin d'aide ?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Notre équipe est là pour vous aider. Contactez-nous ou consultez notre centre d'aide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/help"
                  className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  <span>Centre d'aide</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="mailto:contact@klyx.fr"
                  className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  <span>Contact support</span>
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