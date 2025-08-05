import Head from 'next/head'
import { Search, MessageCircle, Mail, Phone, FileText, HelpCircle, ArrowRight, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('general')

  const categories = [
    { id: 'general', name: 'Général', icon: HelpCircle },
    { id: 'billing', name: 'Facturation', icon: FileText },
    { id: 'technical', name: 'Technique', icon: ExternalLink },
    { id: 'account', name: 'Compte', icon: HelpCircle }
  ]

  const faqs = {
    general: [
      {
        question: "Comment créer mon premier site avec Klyx ?",
        answer: "C'est très simple ! Connectez-vous à votre compte, cliquez sur 'Créer un site', décrivez votre projet en quelques mots, et notre IA générera automatiquement votre site web. Vous pourrez ensuite le personnaliser selon vos besoins."
      },
      {
        question: "Combien de sites puis-je créer ?",
        answer: "Avec le plan gratuit, vous pouvez créer jusqu'à 3 sites. Les plans payants vous permettent de créer jusqu'à 10 sites (Pro) ou un nombre illimité (Business)."
      },
      {
        question: "Mes sites sont-ils responsives ?",
        answer: "Oui, tous les sites créés avec Klyx sont automatiquement optimisés pour tous les appareils : ordinateurs, tablettes et smartphones."
      },
      {
        question: "Puis-je utiliser mon propre nom de domaine ?",
        answer: "Oui ! Vous pouvez connecter votre nom de domaine personnalisé à votre site Klyx. Nous fournissons des instructions détaillées dans votre dashboard."
      }
    ],
    billing: [
      {
        question: "Quels sont les moyens de paiement acceptés ?",
        answer: "Nous acceptons tous les moyens de paiement via Stripe : cartes bancaires (Visa, Mastercard, American Express), Apple Pay, Google Pay, et les virements SEPA pour les entreprises françaises."
      },
      {
        question: "Puis-je annuler mon abonnement à tout moment ?",
        answer: "Oui, vous pouvez annuler votre abonnement à tout moment depuis votre dashboard. Vous conserverez l'accès à vos services jusqu'à la fin de la période facturée."
      },
      {
        question: "Les prix incluent-ils la TVA ?",
        answer: "Oui, tous nos prix affichés incluent la TVA française (20%). Vous recevrez une facture détaillée pour chaque transaction."
      },
      {
        question: "Proposez-vous des remboursements ?",
        answer: "Nous offrons une garantie de remboursement de 30 jours. Si vous n'êtes pas satisfait, contactez notre équipe support."
      }
    ],
    technical: [
      {
        question: "Comment optimiser le SEO de mon site ?",
        answer: "Klyx génère automatiquement des métadonnées SEO optimisées. Vous pouvez également personnaliser le titre, la description et les mots-clés de chaque page depuis l'éditeur."
      },
      {
        question: "Puis-je intégrer Google Analytics ?",
        answer: "Oui, vous pouvez facilement intégrer Google Analytics, Google Tag Manager et d'autres outils d'analyse dans votre site via l'éditeur."
      },
      {
        question: "Comment sauvegarder mon site ?",
        answer: "Toutes les modifications sont automatiquement sauvegardées. Vous pouvez également créer des versions de sauvegarde manuellement depuis l'éditeur."
      },
      {
        question: "Quelle est la vitesse de chargement de mes sites ?",
        answer: "Nos sites sont optimisés pour des temps de chargement rapides grâce à notre CDN et à l'optimisation automatique des images et du code."
      }
    ],
    account: [
      {
        question: "Comment changer mon mot de passe ?",
        answer: "Allez dans les paramètres de votre compte et cliquez sur 'Changer le mot de passe'. Vous recevrez un email de confirmation."
      },
      {
        question: "Puis-je transférer mon site vers un autre compte ?",
        answer: "Oui, vous pouvez transférer vos sites vers un autre compte Klyx. Contactez notre support pour effectuer cette opération."
      },
      {
        question: "Comment supprimer mon compte ?",
        answer: "Vous pouvez supprimer votre compte depuis les paramètres. Attention : cette action est irréversible et supprimera tous vos sites."
      },
      {
        question: "Mes données sont-elles sécurisées ?",
        answer: "Oui, nous utilisons un chiffrement de bout en bout et respectons le RGPD. Vos données sont stockées sur des serveurs sécurisés en France."
      }
    ]
  }

  const filteredFaqs = faqs[activeCategory].filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const contactMethods = [
    {
      title: "Email Support",
      description: "Réponse sous 24h",
      icon: Mail,
      contact: "contact@klyx.fr",
      link: "mailto:contact@klyx.fr"
    },
    {
      title: "Téléphone",
      description: "Lun-Ven, 9h-18h",
      icon: Phone,
      contact: "07 83 97 23 60",
      link: "tel:+33783972360"
    },
    {
      title: "Chat en ligne",
      description: "Réponse immédiate",
      icon: MessageCircle,
      contact: "Ouvrir le chat",
      link: "#"
    }
  ]

  return (
    <>
      <Head>
        <title>Centre d'aide - Klyx</title>
        <meta name="description" content="Centre d'aide Klyx - FAQ, support et contact" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Centre d'aide
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Trouvez rapidement les réponses à vos questions ou contactez notre équipe support
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher dans l'aide..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <category.icon className="w-5 h-5" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Questions fréquentes</h2>
              <div className="space-y-6">
                {filteredFaqs.map((faq, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
                {filteredFaqs.length === 0 && (
                  <div className="text-center py-12">
                    <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400">
                      Aucune question trouvée pour "{searchQuery}". Essayez d'autres mots-clés.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Actions rapides</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="/builder"
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Créer un site</h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors duration-300" />
                  </div>
                  <p className="text-gray-300 text-sm">
                    Commencez à créer votre site web en quelques minutes
                  </p>
                </a>
                <a
                  href="/dashboard"
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Gérer mes sites</h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors duration-300" />
                  </div>
                  <p className="text-gray-300 text-sm">
                    Accédez à votre dashboard pour gérer tous vos sites
                  </p>
                </a>
                <a
                  href="/status"
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Statut des services</h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors duration-300" />
                  </div>
                  <p className="text-gray-300 text-sm">
                    Vérifiez l'état de nos services en temps réel
                  </p>
                </a>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Contactez-nous</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-primary-600/20 rounded-xl">
                        <method.icon className="w-6 h-6 text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{method.title}</h3>
                        <p className="text-gray-400 text-sm">{method.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-primary-400 font-medium">{method.contact}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-400 transition-colors duration-300" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Resources */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Ressources supplémentaires</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Documentation</h3>
                  <p className="text-gray-300 mb-6">
                    Guides détaillés, tutoriels vidéo et références techniques pour maîtriser Klyx.
                  </p>
                  <a
                    href="/docs"
                    className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300"
                  >
                    <span>Accéder à la documentation</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">API Reference</h3>
                  <p className="text-gray-300 mb-6">
                    Intégrez Klyx dans vos applications avec notre API REST complète.
                  </p>
                  <a
                    href="/api"
                    className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300"
                  >
                    <span>Voir l'API</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Still Need Help */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Vous ne trouvez pas votre réponse ?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Notre équipe support est disponible pour vous aider. N'hésitez pas à nous contacter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contact@klyx.fr"
                  className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contacter le support</span>
                </a>
                <a
                  href="tel:+33783972360"
                  className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Appeler</span>
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