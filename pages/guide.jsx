import Head from 'next/head'
import Link from 'next/link'
import { 
  ArrowRight, 
  Play, 
  CheckCircle, 
  AlertCircle, 
  BookOpen, 
  Code, 
  Palette, 
  Globe, 
  Settings, 
  Zap,
  Star,
  Users,
  Shield,
  Download,
  Upload,
  Eye,
  Edit3,
  Share2,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Guide() {
  const steps = [
    {
      number: 1,
      title: "Créer votre compte",
      description: "Inscrivez-vous gratuitement en quelques secondes",
      icon: Users,
      details: [
        "Cliquez sur 'Commencer gratuitement'",
        "Entrez votre email et mot de passe",
        "Confirmez votre email",
        "Accédez à votre tableau de bord"
      ]
    },
    {
      number: 2,
      title: "Décrire votre projet",
      description: "Dites-nous ce que vous voulez créer",
      icon: BookOpen,
      details: [
        "Allez dans la section 'Créer un site'",
        "Décrivez votre projet en détail",
        "Choisissez votre type de site",
        "Sélectionnez vos préférences de design"
      ]
    },
    {
      number: 3,
      title: "Génération automatique",
      description: "Notre IA crée votre site en quelques minutes",
      icon: Zap,
      details: [
        "L'IA analyse votre description",
        "Génère le contenu et la structure",
        "Applique un design professionnel",
        "Optimise pour le SEO"
      ]
    },
    {
      number: 4,
      title: "Personnaliser votre site",
      description: "Modifiez le contenu et le design selon vos besoins",
      icon: Edit3,
      details: [
        "Utilisez l'éditeur visuel",
        "Modifiez le texte et les images",
        "Changez les couleurs et polices",
        "Ajoutez de nouvelles sections"
      ]
    },
    {
      number: 5,
      title: "Publier en ligne",
      description: "Mettez votre site en ligne en un clic",
      icon: Globe,
      details: [
        "Vérifiez votre site en prévisualisation",
        "Cliquez sur 'Publier'",
        "Choisissez votre nom de domaine",
        "Votre site est maintenant en ligne !"
      ]
    }
  ]

  const features = [
    {
      title: "Éditeur visuel intuitif",
      description: "Modifiez votre site sans code avec notre éditeur drag & drop",
      icon: Edit3,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10"
    },
    {
      title: "Design responsive",
      description: "Votre site s'adapte automatiquement à tous les appareils",
      icon: Monitor,
      color: "text-green-400",
      bgColor: "bg-green-400/10"
    },
    {
      title: "SEO optimisé",
      description: "Votre site est optimisé pour les moteurs de recherche",
      icon: Star,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10"
    },
    {
      title: "Hébergement inclus",
      description: "Hébergement rapide et sécurisé inclus dans tous les plans",
      icon: Shield,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10"
    }
  ]

  const tips = [
    {
      title: "Décrivez votre projet en détail",
      content: "Plus vous donnez de détails sur votre projet, meilleur sera le résultat. Incluez votre secteur d'activité, votre public cible et vos objectifs.",
      icon: AlertCircle,
      type: "info"
    },
    {
      title: "Utilisez des images de qualité",
      content: "Ajoutez des images professionnelles pour rendre votre site plus attractif. Utilisez des formats optimisés (JPG, PNG) et des tailles appropriées.",
      icon: Upload,
      type: "tip"
    },
    {
      title: "Testez sur différents appareils",
      content: "Vérifiez que votre site s'affiche correctement sur ordinateur, tablette et mobile avant de le publier.",
      icon: Smartphone,
      type: "warning"
    }
  ]

  const faq = [
    {
      question: "Combien de temps faut-il pour créer un site ?",
      answer: "Avec Klyx, vous pouvez créer un site professionnel en moins de 10 minutes. L'IA génère automatiquement le contenu et le design, vous n'avez plus qu'à personnaliser selon vos besoins."
    },
    {
      question: "Puis-je modifier mon site après publication ?",
      answer: "Oui, absolument ! Vous pouvez modifier votre site à tout moment depuis votre tableau de bord. Les changements sont appliqués instantanément."
    },
    {
      question: "Mes sites sont-ils optimisés pour le mobile ?",
      answer: "Tous les sites créés avec Klyx sont automatiquement optimisés pour tous les appareils : ordinateurs, tablettes et smartphones."
    },
    {
      question: "Puis-je utiliser mon propre nom de domaine ?",
      answer: "Oui, vous pouvez connecter votre propre nom de domaine ou utiliser un sous-domaine gratuit fourni par Klyx."
    },
    {
      question: "Y a-t-il des limites sur le contenu ?",
      answer: "Les limites dépendent de votre plan. Le plan gratuit inclut 1 site avec des fonctionnalités de base, tandis que les plans payants offrent plus de sites et de fonctionnalités."
    }
  ]

  return (
    <>
      <Head>
        <title>Guide d'utilisation - Klyx</title>
        <meta name="description" content="Guide complet pour utiliser Klyx - Créez votre site web en quelques minutes avec notre tutoriel étape par étape" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary-600/20 text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Guide d'utilisation</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Guide complet Klyx
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Apprenez à créer des sites web professionnels en quelques minutes avec notre guide étape par étape. 
                Parfait pour les débutants et les experts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/builder"
                  className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  <Play className="w-5 h-5" />
                  <span>Commencer maintenant</span>
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  <span>Voir la documentation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Quick Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Comment ça marche ?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                    <div className={`w-12 h-12 ${feature.bgColor} ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step by Step Guide */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Guide étape par étape</h2>
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary-600/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary-400">{step.number}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-4">
                          <step.icon className="w-6 h-6 text-primary-400" />
                          <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                        </div>
                        <p className="text-gray-300 mb-6 text-lg">{step.description}</p>
                        <div className="space-y-3">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips and Best Practices */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Conseils et bonnes pratiques</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tips.map((tip, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <tip.icon className={`w-6 h-6 flex-shrink-0 ${
                        tip.type === 'info' ? 'text-blue-400' : 
                        tip.type === 'tip' ? 'text-green-400' : 'text-yellow-400'
                      }`} />
                      <h3 className="text-lg font-semibold text-white">{tip.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{tip.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Questions fréquentes</h2>
              <div className="space-y-6">
                {faq.map((item, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
                    <p className="text-gray-300">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Tutorial Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Tutoriel vidéo</h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="aspect-video bg-gray-800/50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                    <p className="text-gray-300">Tutoriel vidéo en cours de préparation</p>
                    <p className="text-gray-400 text-sm mt-2">Bientôt disponible</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Prêt à commencer ?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Maintenant que vous connaissez les bases, créez votre premier site web en quelques minutes !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/builder"
                  className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  <span>Créer mon premier site</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  <span>Documentation complète</span>
                  <ArrowRight className="w-5 h-5" />
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