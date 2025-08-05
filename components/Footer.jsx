import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                             <Image 
                 src="/images/black_transparent.png" 
                 alt="Klyx AI" 
                 width={56} 
                 height={56} 
                 className="w-14 h-14"
               />
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Créez votre site web professionnel en 30 secondes grâce à l'IA. 
              La solution française pour les TPE/PME, indépendants et agences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/klyx-studio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-all duration-300 p-2 rounded-lg hover:bg-white/5"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/klyx.studio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-all duration-300 p-2 rounded-lg hover:bg-white/5"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Produit</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/builder" className="text-gray-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  Créer un site
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-gray-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-gray-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-gray-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  Centre d'aide
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-gray-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  Statut du service
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  API
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Informations de contact */}
        <div className="border-t border-gray-800/50 mt-12 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center group-hover:bg-primary-600/30 transition-all duration-300">
                <Mail className="w-5 h-5 text-primary-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <a href="mailto:contact@klyx.fr" className="text-white hover:text-primary-400 transition-colors duration-300">
                  contact@klyx.fr
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center group-hover:bg-primary-600/30 transition-all duration-300">
                <Phone className="w-5 h-5 text-primary-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Téléphone</p>
                <a href="tel:+33783972360" className="text-white hover:text-primary-400 transition-colors duration-300">
                  07 83 97 23 60
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center group-hover:bg-primary-600/30 transition-all duration-300">
                <MapPin className="w-5 h-5 text-primary-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Adresse</p>
                <p className="text-white">
                  30 Cours Henri Brunet<br />
                  33000 Bordeaux
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright et liens légaux */}
        <div className="border-t border-gray-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Klyx.fr. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300">
                Politique de confidentialité
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300">
                Conditions d'utilisation
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300">
                Cookies
              </Link>
              <Link href="/rgpd" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300">
                RGPD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 