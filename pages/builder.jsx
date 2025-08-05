import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowLeft, Check, Eye, Save, Play } from 'lucide-react'
import { getCurrentUser, createSite } from '../lib/supabaseClient'
import { generateSite } from '../lib/deepseekApi'
import SiteBuilderForm from '../components/SiteBuilderForm'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Builder() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [generatedSite, setGeneratedSite] = useState(null)
  const [previewMode, setPreviewMode] = useState(false)

  const checkAuth = useCallback(async () => {
    try {
      const { user, error } = await getCurrentUser()
      if (error || !user) {
        router.push('/login')
        return
      }
      setUser(user)
    } catch (error) {
      console.error('Erreur lors de la vérification:', error)
      router.push('/login')
    }
  }, [router])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  const handleSiteGeneration = async (formData) => {
    setIsLoading(true)
    setGeneratedSite(null)

    try {
      // Générer le site avec l'IA
      const result = await generateSite(formData)
      
      if (result.html) {
        setGeneratedSite({
          ...result,
          config: formData
        })
      } else {
        throw new Error('Erreur lors de la génération du site')
      }
    } catch (error) {
      console.error('Erreur lors de la génération:', error)
      alert('Une erreur est survenue lors de la génération. Veuillez réessayer.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveSite = async () => {
    if (!generatedSite) return

    setIsLoading(true)

    try {
      const siteData = {
        user_id: user.id,
        name: generatedSite.config.siteName,
        sector: generatedSite.config.sector,
        style: generatedSite.config.style,
        pages: generatedSite.config.pages,
        tone: generatedSite.config.tone,
        description: generatedSite.config.description,
        html_content: generatedSite.html,
        metadata: generatedSite.metadata,
        status: 'draft',
        created_at: new Date().toISOString()
      }

      const { data, error } = await createSite(siteData)
      
      if (error) {
        throw error
      }

      // Rediriger vers l'éditeur
      router.push(`/editor/${data[0].id}`)
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error)
      alert('Erreur lors de la sauvegarde. Veuillez réessayer.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegenerate = () => {
    setGeneratedSite(null)
    setPreviewMode(false)
  }

  return (
    <>
      <Head>
        <title>Créer un site web - Klyx AI</title>
        <meta name="description" content="Créez votre site web professionnel avec l'IA" />
      </Head>

      <div className="min-h-screen">
        <Navbar />

        <div className="pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête */}
            <div className="mb-8">
              <Link href="/dashboard" className="inline-flex items-center text-gray-400 hover:text-gray-300 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour au tableau de bord
              </Link>
              <h1 className="text-3xl font-bold text-white mb-2">
                Créer votre site web
              </h1>
              <p className="text-gray-300">
                Décrivez votre projet et notre IA générera votre site web professionnel
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Formulaire */}
              <div className="space-y-6">
                <div className="card-hover">
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Informations du projet
                  </h2>
                  <SiteBuilderForm onSubmit={handleSiteGeneration} isLoading={isLoading} />
                </div>

                {generatedSite && (
                  <div className="card-hover">
                    <h2 className="text-xl font-semibold text-white mb-4">
                      Actions
                    </h2>
                    <div className="space-y-3">
                      <button
                        onClick={handleSaveSite}
                        disabled={isLoading}
                        className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sauvegarde...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center space-x-2">
                            <Save className="w-5 h-5" />
                            <span>Sauvegarder et éditer</span>
                          </div>
                        )}
                      </button>
                      
                      <button
                        onClick={handleRegenerate}
                        className="w-full btn-outline py-3"
                      >
                        Régénérer le site
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Aperçu */}
              <div className="space-y-6">
                {isLoading ? (
                  <div className="card-hover text-center py-12">
                    <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Génération en cours...
                    </h3>
                    <p className="text-gray-400">
                      Notre IA crée votre site web professionnel
                    </p>
                  </div>
                ) : generatedSite ? (
                  <div className="card-hover">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold text-white">
                        Aperçu du site
                      </h2>
                      <button
                        onClick={() => setPreviewMode(!previewMode)}
                        className="btn-outline py-2 px-4 text-sm"
                      >
                        {previewMode ? (
                          <div className="flex items-center space-x-2">
                            <Eye className="w-4 h-4" />
                            <span>Mode édition</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Play className="w-4 h-4" />
                            <span>Mode aperçu</span>
                          </div>
                        )}
                      </button>
                    </div>
                    
                    <div className="border border-gray-700 rounded-lg overflow-hidden">
                      <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-400 text-sm ml-2">
                          {generatedSite.config.siteName}
                        </span>
                      </div>
                      <div className="bg-white">
                        <div 
                          className="min-h-[400px] p-4"
                          dangerouslySetInnerHTML={{ __html: generatedSite.html }}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="card-hover text-center py-12">
                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Aperçu du site
                    </h3>
                    <p className="text-gray-400">
                      Remplissez le formulaire pour générer votre site web
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
} 