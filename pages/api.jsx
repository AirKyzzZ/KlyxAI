import Head from 'next/head'
import { Code, Key, Database, Zap, Copy, Check, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Api() {
  const [copiedEndpoint, setCopiedEndpoint] = useState(null)

  const copyToClipboard = (text, endpoint) => {
    navigator.clipboard.writeText(text)
    setCopiedEndpoint(endpoint)
    setTimeout(() => setCopiedEndpoint(null), 2000)
  }

  const endpoints = [
    {
      method: 'GET',
      path: '/api/sites',
      description: 'Récupérer tous les sites de l\'utilisateur',
      auth: true,
      params: [],
      response: `{
  "sites": [
    {
      "id": "site_123",
      "name": "Mon site",
      "url": "https://mon-site.klyx.fr",
      "status": "published",
      "created_at": "2024-01-15T10:30:00Z"
    }
  ]
}`
    },
    {
      method: 'POST',
      path: '/api/sites',
      description: 'Créer un nouveau site',
      auth: true,
      params: [
        { name: 'name', type: 'string', required: true, description: 'Nom du site' },
        { name: 'description', type: 'string', required: false, description: 'Description du projet' },
        { name: 'template', type: 'string', required: false, description: 'Template à utiliser' }
      ],
      response: `{
  "site": {
    "id": "site_456",
    "name": "Nouveau site",
    "url": "https://nouveau-site.klyx.fr",
    "status": "draft",
    "created_at": "2024-01-15T11:00:00Z"
  }
}`
    },
    {
      method: 'GET',
      path: '/api/sites/{id}',
      description: 'Récupérer un site spécifique',
      auth: true,
      params: [
        { name: 'id', type: 'string', required: true, description: 'ID du site' }
      ],
      response: `{
  "site": {
    "id": "site_123",
    "name": "Mon site",
    "url": "https://mon-site.klyx.fr",
    "status": "published",
    "content": { ... },
    "settings": { ... },
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T15:45:00Z"
  }
}`
    },
    {
      method: 'PUT',
      path: '/api/sites/{id}',
      description: 'Mettre à jour un site',
      auth: true,
      params: [
        { name: 'id', type: 'string', required: true, description: 'ID du site' },
        { name: 'name', type: 'string', required: false, description: 'Nouveau nom' },
        { name: 'content', type: 'object', required: false, description: 'Nouveau contenu' },
        { name: 'settings', type: 'object', required: false, description: 'Nouveaux paramètres' }
      ],
      response: `{
  "site": {
    "id": "site_123",
    "name": "Site mis à jour",
    "url": "https://mon-site.klyx.fr",
    "status": "published",
    "updated_at": "2024-01-15T16:00:00Z"
  }
}`
    },
    {
      method: 'DELETE',
      path: '/api/sites/{id}',
      description: 'Supprimer un site',
      auth: true,
      params: [
        { name: 'id', type: 'string', required: true, description: 'ID du site' }
      ],
      response: `{
  "success": true,
  "message": "Site supprimé avec succès"
}`
    },
    {
      method: 'POST',
      path: '/api/sites/{id}/publish',
      description: 'Publier un site',
      auth: true,
      params: [
        { name: 'id', type: 'string', required: true, description: 'ID du site' }
      ],
      response: `{
  "site": {
    "id": "site_123",
    "status": "published",
    "published_at": "2024-01-15T16:30:00Z"
  }
}`
    }
  ]

  const getMethodColor = (method) => {
    switch (method) {
      case 'GET':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'POST':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'PUT':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'DELETE':
        return 'bg-red-500/20 text-red-400 border-red-500/30'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <>
      <Head>
        <title>API Documentation - Klyx</title>
        <meta name="description" content="Documentation complète de l'API REST Klyx" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                API Documentation
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Intégrez Klyx dans vos applications avec notre API REST complète. 
                Créez, gérez et déployez des sites web programmatiquement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#authentication"
                  className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  <Key className="w-5 h-5" />
                  <span>Authentification</span>
                </a>
                <a
                  href="https://github.com/klyx/api-examples"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Exemples GitHub</span>
                </a>
              </div>
            </div>

            {/* Base URL */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">URL de base</h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <code className="text-white font-mono text-lg">https://api.klyx.fr/v1</code>
                  <button
                    onClick={() => copyToClipboard('https://api.klyx.fr/v1', 'base-url')}
                    className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300"
                  >
                    {copiedEndpoint === 'base-url' ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    <span className="text-sm">Copier</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Authentication */}
            <div id="authentication" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Authentification</h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Clé API</h3>
                    <p className="text-gray-300 mb-6">
                      Toutes les requêtes API nécessitent une clé API valide. 
                      Vous pouvez générer votre clé dans votre dashboard.
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <code className="text-white font-mono">Authorization: Bearer YOUR_API_KEY</code>
                        <button
                          onClick={() => copyToClipboard('Authorization: Bearer YOUR_API_KEY', 'auth-header')}
                          className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                        >
                          {copiedEndpoint === 'auth-header' ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                    <a
                      href="/dashboard"
                      className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300"
                    >
                      <span>Générer une clé API</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Exemple cURL</h3>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <pre className="text-sm text-gray-300 overflow-x-auto">
{`curl -X GET "https://api.klyx.fr/v1/sites" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Endpoints */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Endpoints</h2>
              <div className="space-y-6">
                {endpoints.map((endpoint, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full border text-sm font-medium ${getMethodColor(endpoint.method)}`}>
                          {endpoint.method}
                        </span>
                        <code className="text-white font-mono text-lg">{endpoint.path}</code>
                      </div>
                      <button
                        onClick={() => copyToClipboard(`${endpoint.method} ${endpoint.path}`, `endpoint-${index}`)}
                        className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                      >
                        {copiedEndpoint === `endpoint-${index}` ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{endpoint.description}</p>
                    
                    {endpoint.params.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Paramètres</h4>
                        <div className="bg-gray-800/50 rounded-lg overflow-hidden">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-gray-700">
                                <th className="text-left p-4 text-white font-medium">Nom</th>
                                <th className="text-left p-4 text-white font-medium">Type</th>
                                <th className="text-left p-4 text-white font-medium">Requis</th>
                                <th className="text-left p-4 text-white font-medium">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              {endpoint.params.map((param, paramIndex) => (
                                <tr key={paramIndex} className="border-b border-gray-700/50">
                                  <td className="p-4">
                                    <code className="text-primary-400 font-mono">{param.name}</code>
                                  </td>
                                  <td className="p-4 text-gray-300">{param.type}</td>
                                  <td className="p-4">
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                                      param.required 
                                        ? 'bg-red-500/20 text-red-400' 
                                        : 'bg-gray-500/20 text-gray-400'
                                    }`}>
                                      {param.required ? 'Oui' : 'Non'}
                                    </span>
                                  </td>
                                  <td className="p-4 text-gray-300">{param.description}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Réponse</h4>
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <pre className="text-sm text-gray-300 overflow-x-auto">
                          {endpoint.response}
                        </pre>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rate Limits */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Limites d'utilisation</h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">1000</div>
                    <div className="text-gray-400 text-sm">Requêtes par heure</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">10</div>
                    <div className="text-gray-400 text-sm">Sites maximum</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">50MB</div>
                    <div className="text-gray-400 text-sm">Taille max par requête</div>
                  </div>
                </div>
              </div>
            </div>

            {/* SDKs */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">SDKs et bibliothèques</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">JavaScript</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    SDK officiel pour Node.js et navigateur
                  </p>
                  <code className="text-primary-400 text-sm">npm install @klyx/api</code>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Python</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Client Python officiel
                  </p>
                  <code className="text-primary-400 text-sm">pip install klyx-api</code>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">PHP</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Client PHP officiel
                  </p>
                  <code className="text-primary-400 text-sm">composer require klyx/api</code>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Besoin d'aide ?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Notre équipe technique est là pour vous aider avec l'intégration de l'API.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/docs"
                  className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  <span>Documentation complète</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href="mailto:contact@klyx.fr"
                  className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  <span>Support API</span>
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