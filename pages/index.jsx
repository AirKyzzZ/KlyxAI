import { useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight, Zap, Palette, Globe, Users, Shield, Clock, Sparkles, CheckCircle, Star, Rocket, Target, Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SocialProof from '../components/SocialProof'
import { PlanComparison } from '../components/PlanCard'
import SmoothScroll from '../components/SmoothScroll'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const statsRef = useRef(null)
  const processRef = useRef(null)

  useEffect(() => {
    // Hero animations
    const tl = gsap.timeline()
    tl.fromTo('.hero-title', 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.hero-subtitle', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5'
    )
    .fromTo('.hero-buttons', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.3'
    )
    .fromTo('.hero-stats', 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.2'
    )

    // Stats counter animation
    gsap.fromTo('.stat-number', 
      { textContent: 0 },
      { 
        textContent: (i, target) => {
          const finalValue = parseInt(target.getAttribute('data-value'))
          return finalValue
        },
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
        }
      }
    )

    // Features cards animation
    gsap.fromTo('.feature-card', 
      { y: 100, opacity: 0 },
      { 
        y: 0, opacity: 1, 
        duration: 0.8, 
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
        }
      }
    )

    // Process steps animation
    gsap.fromTo('.process-step', 
      { x: -100, opacity: 0 },
      { 
        x: 0, opacity: 1, 
        duration: 0.8, 
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: processRef.current,
          start: 'top 80%',
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <SmoothScroll>
      <Head>
        <title>Klyx AI - Créez votre site web professionnel en 30 secondes grâce à l'IA</title>
        <meta name="description" content="Générez, personnalisez et hébergez votre site web professionnel en quelques clics. Solution française pour TPE/PME, indépendants et agences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-black to-secondary-900/20"></div>
          
          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-primary-600/20 backdrop-blur-sm border border-primary-600/30 rounded-full px-6 py-3 mb-8">
                <Sparkles className="w-5 h-5 text-primary-400" />
                <span className="text-primary-400 font-medium">Powered by AI</span>
              </div>
            </div>

            <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              Créez votre site web{' '}
              <span className="text-gradient">professionnel</span>{' '}
              en 30 secondes
            </h1>
            
            <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              La solution française pour les TPE/PME, indépendants et agences. 
              Générez, personnalisez et hébergez votre site web sans aucune compétence technique.
            </p>
            
            <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/builder" className="btn-primary text-lg px-10 py-5 flex items-center justify-center space-x-3 group">
                <span>Commencer gratuitement</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="/#features" className="btn-outline text-lg px-10 py-5">
                Découvrir les fonctionnalités
              </Link>
            </div>

            {/* Statistiques */}
            <div ref={statsRef} className="hero-stats grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="card-hover text-center p-8">
                <div className="text-4xl font-bold text-gradient mb-2">
                  <span className="stat-number" data-value="500">0</span>+
                </div>
                <div className="text-gray-400 font-medium">Sites créés</div>
              </div>
              <div className="card-hover text-center p-8">
                <div className="text-4xl font-bold text-gradient mb-2">
                  <span className="stat-number" data-value="98">0</span>%
                </div>
                <div className="text-gray-400 font-medium">Clients satisfaits</div>
              </div>
              <div className="card-hover text-center p-8">
                <div className="text-4xl font-bold text-gradient mb-2">
                  <span className="stat-number" data-value="30">0</span>s
                </div>
                <div className="text-gray-400 font-medium">Temps moyen de création</div>
              </div>
            </div>
          </div>
        </section>

        {/* Gradient separator */}
        <div className="h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent opacity-50"></div>

        {/* Fonctionnalités */}
        <section ref={featuresRef} id="features" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                Pourquoi choisir{' '}
                <span className="text-gradient">Klyx AI</span> ?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Une solution complète pour créer votre présence web professionnelle 
                rapidement et efficacement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="feature-card card-hover text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Génération instantanée
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Notre IA DeepSeek génère votre site web complet en quelques secondes, 
                  adapté à votre secteur et vos besoins.
                </p>
              </div>

              <div className="feature-card card-hover text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Personnalisation avancée
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Éditeur WYSIWYG intuitif pour modifier texte, images et mise en page 
                  sans aucune compétence technique.
                </p>
              </div>

              <div className="feature-card card-hover text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hébergement inclus
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Hébergement Netlify haute performance inclus dans tous nos plans. 
                  Domaine personnalisé disponible.
                </p>
              </div>

              <div className="feature-card card-hover text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Solution française
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Développé par Klyx.fr, agence web française reconnue. 
                  Support en français et conformité RGPD.
                </p>
              </div>

              <div className="feature-card card-hover text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Sécurisé et fiable
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Infrastructure sécurisée, sauvegardes automatiques et 
                  protection contre les attaques.
                </p>
              </div>

              <div className="feature-card card-hover text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Support réactif
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Équipe support française disponible pour vous accompagner 
                  dans la création de votre site.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gradient separator */}
        <div className="h-1 bg-gradient-to-r from-transparent via-secondary-600 to-transparent opacity-50"></div>

        {/* Comment ça marche */}
        <section ref={processRef} className="py-24 bg-gray-900/30 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                Comment ça marche ?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                En 3 étapes simples, créez votre site web professionnel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="process-step text-center group">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                    1
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Décrivez votre projet
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Remplissez notre formulaire intelligent avec le nom de votre site, 
                  votre secteur d'activité et vos préférences.
                </p>
              </div>

              <div className="process-step text-center group">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                    2
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  L'IA génère votre site
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Notre IA DeepSeek analyse vos besoins et génère un site web 
                  professionnel adapté à votre activité.
                </p>
              </div>

              <div className="process-step text-center group">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                    3
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Personnalisez et publiez
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Utilisez notre éditeur pour finaliser votre site, puis publiez-le 
                  en un clic sur Netlify.
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <Link href="/builder" className="btn-primary text-lg px-10 py-5 inline-flex items-center space-x-3 group">
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Commencer maintenant</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Gradient separator */}
        <div className="h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent opacity-50"></div>

        {/* Témoignages */}
        <SocialProof />


        {/* Plans */}
        <PlanComparison />

        {/* Gradient separator */}
        <div className="h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent opacity-50"></div>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-secondary-900/20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-primary-600/20 backdrop-blur-sm border border-primary-600/30 rounded-full px-6 py-3 mb-8">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-primary-400 font-medium">Contact</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                Parlons de votre{' '}
                <span className="text-gradient">projet</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Notre équipe est là pour vous accompagner dans la création de votre site web professionnel.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Informations de contact */}
              <div className="space-y-8">
                <div className="card-hover p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Nos coordonnées</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center group-hover:bg-primary-600/30 transition-all duration-300">
                        <Mail className="w-6 h-6 text-primary-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Email</p>
                        <a href="mailto:contact@klyx.fr" className="text-white hover:text-primary-400 transition-colors duration-300 font-medium">
                          contact@klyx.fr
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center group-hover:bg-primary-600/30 transition-all duration-300">
                        <Phone className="w-6 h-6 text-primary-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Téléphone</p>
                        <a href="tel:+33783972360" className="text-white hover:text-primary-400 transition-colors duration-300 font-medium">
                          07 83 97 23 60
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center group-hover:bg-primary-600/30 transition-all duration-300">
                        <MapPin className="w-6 h-6 text-primary-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Adresse</p>
                        <p className="text-white font-medium">
                          30 Cours Henri Brunet<br />
                          33000 Bordeaux
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Réseaux sociaux */}
                  <div className="mt-8 pt-8 border-t border-gray-800/50">
                    <h4 className="text-lg font-semibold text-white mb-4">Suivez-nous</h4>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.linkedin.com/company/klyx-studio" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center hover:bg-primary-600/30 transition-all duration-300 group"
                      >
                        <Linkedin className="w-6 h-6 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                      </a>
                      <a 
                        href="https://www.instagram.com/klyx.studio" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center hover:bg-primary-600/30 transition-all duration-300 group"
                      >
                        <Instagram className="w-6 h-6 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulaire de contact */}
              <div className="card-hover p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Prénom</label>
                      <input 
                        type="text" 
                        className="input-field"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Nom</label>
                      <input 
                        type="text" 
                        className="input-field"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="input-field"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Sujet</label>
                    <select className="input-field">
                      <option value="">Choisissez un sujet</option>
                      <option value="devis">Demande de devis</option>
                      <option value="support">Support technique</option>
                      <option value="partnership">Partenariat</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea 
                      className="input-field h-32 resize-none"
                      placeholder="Décrivez votre projet..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full text-lg py-4">
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>


        {/* CTA Final */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-secondary-900/20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="card-hover p-16 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                Prêt à créer votre site web ?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Rejoignez les centaines d'entreprises qui nous font confiance 
                pour leur présence web professionnelle.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/login?signup=true" className="btn-primary text-lg px-10 py-5 inline-flex items-center space-x-3 group">
                  <Star className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Commencer gratuitement</span>
                </Link>
                <Link href="/#contact" className="btn-outline text-lg px-10 py-5 inline-flex items-center space-x-3">
                  <Target className="w-5 h-5" />
                  <span>Nous contacter</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SmoothScroll>
  )
} 