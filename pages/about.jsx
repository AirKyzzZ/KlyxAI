import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { 
  Globe, 
  Zap, 
  Users, 
  Target, 
  Shield, 
  TrendingUp, 
  Code, 
  Smartphone,
  Building,
  Lightbulb,
  Rocket,
  Heart
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <Head>
        <title>Klyx IA - À propos | Création Site IA et Générateur de Sites Web Professionnels</title>
        <meta name="description" content="Découvrez Klyx IA, la plateforme française révolutionnaire de création de sites web IA. Générateur de sites web professionnels alimenté par l'intelligence artificielle pour TPE/PME, indépendants et agences." />
        <meta name="keywords" content="Klyx IA, Klyx AI, création site IA, générateur site web IA, intelligence artificielle, développement web, site web professionnel, TPE PME, indépendants, agences, hébergement web, design web, SEO, optimisation web, générateur site web français" />
        <meta name="author" content="Klyx.fr" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://ai.klyx.fr/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Klyx IA - À propos | Création Site IA et Générateur de Sites Web Professionnels" />
        <meta property="og:description" content="Découvrez Klyx IA, la plateforme française révolutionnaire de création de sites web IA. Générateur de sites web professionnels alimenté par l'intelligence artificielle." />
        <meta property="og:url" content="https://ai.klyx.fr/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Klyx AI" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content="https://ai.klyx.fr/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Klyx IA - À propos de la création de sites web avec l'IA" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@klyx_fr" />
        <meta name="twitter:creator" content="@klyx_fr" />
        <meta name="twitter:title" content="Klyx IA - À propos | Création Site IA et Générateur de Sites Web Professionnels" />
        <meta name="twitter:description" content="Découvrez Klyx IA, la plateforme française révolutionnaire de création de sites web IA." />
        <meta name="twitter:image" content="https://ai.klyx.fr/images/twitter-card.png" />
        
        {/* Additional SEO */}
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="France" />
        <meta name="language" content="fr" />
      </Head>

      <div className="min-h-screen bg-black">
        <Navbar />
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-black to-secondary-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="gradient-text">Klyx IA</span>
                <br />
                <span className="text-white">Création Site IA</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Nous révolutionnons la création de sites web pour les entreprises physiques 
                en démocratisant l'accès à l'intelligence artificielle.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Notre <span className="gradient-text">Mission</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Chez Klyx AI, nous croyons que chaque entreprise physique mérite d'avoir une présence 
                  web professionnelle et efficace. Notre mission est de démocratiser l'accès à la 
                  technologie web de pointe grâce à l'intelligence artificielle.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Nous combinons la puissance de l'IA avec une interface intuitive pour permettre 
                  aux entrepreneurs, artisans, commerçants et professionnels de créer des sites web 
                  modernes sans connaissances techniques préalables.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-primary-400">
                    <Heart className="w-5 h-5" />
                    <span className="font-semibold">Innovation accessible</span>
                  </div>
                  <div className="flex items-center space-x-2 text-secondary-400">
                    <Target className="w-5 h-5" />
                    <span className="font-semibold">Résultats garantis</span>
                  </div>
                </div>
              </div>
              <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="card-hover p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8 text-primary-400" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Sites Web Modernes</h3>
                      <p className="text-gray-400 text-sm">Design responsive et optimisé</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-secondary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-secondary-400" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">IA Intelligente</h3>
                      <p className="text-gray-400 text-sm">Génération automatique de contenu</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-primary-400" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Expérience Client</h3>
                      <p className="text-gray-400 text-sm">Interface intuitive et accessible</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-secondary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-secondary-400" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Sécurité Avancée</h3>
                      <p className="text-gray-400 text-sm">Protection des données</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Bring Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ce que nous <span className="gradient-text">apportons</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Une révolution dans la création de sites web pour les entreprises physiques
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pour les entreprises physiques */}
              <div className={`card transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center mb-6">
                  <Building className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Pour les entreprises physiques</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Présence web professionnelle en quelques heures</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Optimisation pour la recherche locale</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Intégration des réseaux sociaux</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Gestion des réservations et contacts</span>
                  </li>
                </ul>
              </div>

              {/* Pour l'IA en général */}
              <div className={`card transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="w-12 h-12 bg-secondary-600/20 rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-secondary-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Pour l'IA en général</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Démocratisation de l'accès à l'IA</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Automatisation intelligente du développement</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Génération de contenu optimisé SEO</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Apprentissage continu et amélioration</span>
                  </li>
                </ul>
              </div>

              {/* Pour le développement web */}
              <div className={`card transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center mb-6">
                  <Code className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Pour le développement web</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Réduction drastique du temps de développement</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Code propre et maintenable</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Standards web modernes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Performance et accessibilité optimisées</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Tools Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Nos <span className="gradient-text">outils</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Une suite complète d'outils alimentés par l'IA pour créer des sites web exceptionnels
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Site Builder */}
              <div className={`card-hover transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Site Builder IA</h3>
                    <p className="text-gray-400">Création automatique de sites web</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Notre constructeur de sites alimenté par l'IA analyse votre entreprise et génère 
                  automatiquement un site web professionnel avec un design moderne, un contenu optimisé 
                  et une structure parfaitement adaptée à votre secteur d'activité.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span>Génération automatique de contenu</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span>Design responsive et moderne</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span>Optimisation SEO intégrée</span>
                  </li>
                </ul>
              </div>

              {/* Site Editor */}
              <div className={`card-hover transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary-600/20 rounded-xl flex items-center justify-center mr-4">
                    <Code className="w-6 h-6 text-secondary-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Site Editor</h3>
                    <p className="text-gray-400">Édition intuitive et puissante</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  L'éditeur de sites le plus avancé du marché, combinant la simplicité d'utilisation 
                  avec la puissance de l'IA. Modifiez votre site en temps réel avec des suggestions 
                  intelligentes et des outils d'optimisation automatiques.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                    <span>Édition en temps réel</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                    <span>Suggestions IA intelligentes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                    <span>Optimisation automatique</span>
                  </li>
                </ul>
              </div>

              {/* Mobile Optimization */}
              <div className={`card-hover transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center mr-4">
                    <Smartphone className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Optimisation Mobile</h3>
                    <p className="text-gray-400">Performance sur tous les appareils</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Chaque site créé avec Klyx AI est automatiquement optimisé pour tous les appareils. 
                  Notre IA analyse et adapte le design, la navigation et les performances pour offrir 
                  une expérience parfaite sur mobile, tablette et desktop.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span>Design responsive automatique</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span>Performance optimisée</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span>Navigation adaptative</span>
                  </li>
                </ul>
              </div>

              {/* Analytics & Insights */}
              <div className={`card-hover transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary-600/20 rounded-xl flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-secondary-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Analytics & Insights</h3>
                    <p className="text-gray-400">Données intelligentes</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Suivez les performances de votre site avec des analytics avancés alimentés par l'IA. 
                  Obtenez des insights précieux sur le comportement de vos visiteurs et des recommandations 
                  d'amélioration personnalisées.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                    <span>Analytics en temps réel</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                    <span>Recommandations IA</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                    <span>Optimisation continue</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Notre <span className="gradient-text">impact</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comment nous transformons le paysage numérique des entreprises physiques
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className={`text-center transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="w-20 h-20 bg-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-10 h-10 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Accélération</h3>
                <p className="text-gray-300 leading-relaxed">
                  Réduction du temps de création de sites web de plusieurs semaines à quelques heures, 
                  permettant aux entreprises de se concentrer sur leur cœur de métier.
                </p>
              </div>

              <div className={`text-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="w-20 h-20 bg-secondary-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-secondary-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Accessibilité</h3>
                <p className="text-gray-300 leading-relaxed">
                  Démocratisation de l'accès à la technologie web de pointe pour toutes les entreprises, 
                  quels que soient leur taille et leurs ressources techniques.
                </p>
              </div>

              <div className={`text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="w-20 h-20 bg-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Croissance</h3>
                <p className="text-gray-300 leading-relaxed">
                  Amélioration significative de la visibilité en ligne et de la conversion des clients 
                  pour les entreprises physiques grâce à des sites web optimisés.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`card-hover p-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Prêt à <span className="gradient-text">révolutionner</span> votre présence web ?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Rejoignez les milliers d'entreprises qui font confiance à Klyx AI pour créer 
                leur site web professionnel en quelques heures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/login?signup=true" className="btn-primary">
                  Commencer gratuitement
                </Link>
                <Link href="/#features" className="btn-secondary">
                  Découvrir nos fonctionnalités
                </Link>
              </div>
            </div>
                     </div>
         </section>
        <Footer />
       </div>
     </>
   )
 } 