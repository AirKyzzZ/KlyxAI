import Head from 'next/head'
import { CheckCircle, AlertCircle, XCircle, Clock, Server, Database, Zap, Globe } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Status() {
  // Simulated status data - in real app, this would come from an API
  const services = [
    {
      name: 'Site Builder',
      status: 'operational',
      description: 'Service de création de sites web',
      uptime: '99.9%',
      responseTime: '120ms'
    },
    {
      name: 'API REST',
      status: 'operational',
      description: 'API principale de Klyx',
      uptime: '99.8%',
      responseTime: '85ms'
    },
    {
      name: 'Base de données',
      status: 'operational',
      description: 'Supabase PostgreSQL',
      uptime: '99.9%',
      responseTime: '45ms'
    },
    {
      name: 'Paiements Stripe',
      status: 'operational',
      description: 'Système de paiement',
      uptime: '99.7%',
      responseTime: '200ms'
    },
    {
      name: 'IA DeepSeek',
      status: 'operational',
      description: 'Génération de contenu IA',
      uptime: '99.5%',
      responseTime: '2.5s'
    },
    {
      name: 'CDN',
      status: 'operational',
      description: 'Réseau de distribution de contenu',
      uptime: '99.9%',
      responseTime: '15ms'
    }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-500" />
      default:
        return <CheckCircle className="w-5 h-5 text-green-500" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational':
        return 'bg-green-500/10 text-green-500 border-green-500/20'
      case 'degraded':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
      case 'outage':
        return 'bg-red-500/10 text-red-500 border-red-500/20'
      case 'maintenance':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20'
      default:
        return 'bg-green-500/10 text-green-500 border-green-500/20'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'operational':
        return 'Opérationnel'
      case 'degraded':
        return 'Dégradé'
      case 'outage':
        return 'Panne'
      case 'maintenance':
        return 'Maintenance'
      default:
        return 'Opérationnel'
    }
  }

  const overallStatus = services.every(service => service.status === 'operational') ? 'operational' : 'degraded'

  return (
    <>
      <Head>
        <title>Statut des services - Klyx</title>
        <meta name="description" content="Statut en temps réel de tous les services Klyx" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Statut des services
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Surveillez en temps réel l'état de tous nos services et infrastructures
              </p>
            </div>

            {/* Overall Status */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Globe className="w-8 h-8 text-primary-400" />
                  <h2 className="text-2xl font-semibold text-white">État général</h2>
                </div>
                <div className={`px-4 py-2 rounded-full border ${getStatusColor(overallStatus)}`}>
                  <span className="text-sm font-medium">{getStatusText(overallStatus)}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">99.8%</div>
                  <div className="text-gray-400 text-sm">Disponibilité moyenne</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">45ms</div>
                  <div className="text-gray-400 text-sm">Temps de réponse moyen</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">6</div>
                  <div className="text-gray-400 text-sm">Services surveillés</div>
                </div>
              </div>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(service.status)}
                        <div>
                          <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                          <p className="text-gray-400 text-sm">{service.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Disponibilité</div>
                        <div className="text-white font-medium">{service.uptime}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Temps de réponse</div>
                        <div className="text-white font-medium">{service.responseTime}</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full border text-sm font-medium ${getStatusColor(service.status)}`}>
                        {getStatusText(service.status)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Informations supplémentaires</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
                <div>
                  <h4 className="font-medium text-white mb-2">Infrastructure</h4>
                  <ul className="space-y-1">
                    <li>• Serveurs hébergés en France (OVH)</li>
                    <li>• Base de données Supabase</li>
                    <li>• CDN Cloudflare</li>
                    <li>• Monitoring 24/7</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Sécurité</h4>
                  <ul className="space-y-1">
                    <li>• Certificats SSL/TLS</li>
                    <li>• Chiffrement des données</li>
                    <li>• Sauvegardes automatiques</li>
                    <li>• Conformité RGPD</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">
                En cas de problème, contactez notre équipe technique
              </p>
              <a 
                href="mailto:contact@klyx.fr" 
                className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300"
              >
                <span>contact@klyx.fr</span>
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
} 