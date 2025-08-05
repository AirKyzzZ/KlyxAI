import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowLeft, Save, Eye, Globe, Download, Settings } from 'lucide-react'
import { getCurrentUser, getSiteById, updateSite } from '../../lib/supabaseClient'
import SiteEditor from '../../components/SiteEditor'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function SiteEditorPage() {
  const router = useRouter()
  const { siteId } = router.query
  
  const [user, setUser] = useState(null)
  const [site, setSite] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [editedContent, setEditedContent] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const loadSite = useCallback(async () => {
    try {
      const { data, error } = await getSiteById(siteId)
      if (error) {
        setError('Erreur lors du chargement du site')
        return
      }

      if (!data) {
        setError('Site non trouvé')
        return
      }

      setSite(data)
      setEditedContent(data.html_content || '')
    } catch (error) {
      console.error('Erreur lors du chargement:', error)
      setError('Erreur lors du chargement du site')
    } finally {
      setIsLoading(false)
    }
  }, [siteId])

  const checkAuth = useCallback(async () => {
    try {
      const { user, error } = await getCurrentUser()
      if (error || !user) {
        router.push('/login')
        return
      }
      setUser(user)
      await loadSite()
    } catch (error) {
      console.error('Erreur lors de la vérification:', error)
      router.push('/login')
    }
  }, [router, loadSite])

  useEffect(() => {
    if (siteId) {
      checkAuth()
    }
  }, [siteId, checkAuth])

  const handleSave = async () => {
    if (!site) return

    setIsSaving(true)
    setError('')
    setSuccess('')

    try {
      const { error } = await updateSite(siteId, {
        html_content: editedContent,
        updated_at: new Date().toISOString()
      })

      if (error) {
        throw error
      }

      setSuccess('Site sauvegardé avec succès !')
      setTimeout(() => setSuccess(''), 3000)
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error)
      setError('Erreur lors de la sauvegarde')
    } finally {
      setIsSaving(false)
    }
  }

  const handlePublish = async () => {
    if (!site) return

    setIsSaving(true)
    setError('')
    setSuccess('')

    try {
      const { error } = await updateSite(siteId, {
        status: 'published',
        published_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })

      if (error) {
        throw error
      }

      setSite(prev => ({ ...prev, status: 'published' }))
      setSuccess('Site publié avec succès !')
      setTimeout(() => setSuccess(''), 3000)
    } catch (error) {
      console.error('Erreur lors de la publication:', error)
      setError('Erreur lors de la publication')
    } finally {
      setIsSaving(false)
    }
  }

  const handleContentChange = (newContent) => {
    setEditedContent(newContent)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300">Chargement de l'éditeur...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-400 text-2xl">!</span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Erreur</h3>
          <p className="text-gray-400 mb-6">{error}</p>
          <Link href="/dashboard" className="btn-primary">
            Retour au tableau de bord
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Éditer {site?.name} - Klyx AI</title>
        <meta name="description" content="Éditez votre site web avec l'éditeur Klyx AI" />
      </Head>

      <div className="min-h-screen">
        <Navbar />

        <div className="pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête */}
            <div className="mb-6">
              <Link href="/dashboard" className="inline-flex items-center text-gray-400 hover:text-gray-300 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour au tableau de bord
              </Link>
              
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-white mb-2">
                    Éditer : {site?.name}
                  </h1>
                  <p className="text-gray-400">
                    {site?.status === 'published' ? 'Site publié' : 'Brouillon'}
                  </p>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowPreview(!showPreview)}
                    className="btn-outline py-2 px-4 text-sm"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    {showPreview ? 'Mode édition' : 'Aperçu'}
                  </button>
                  
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="btn-primary py-2 px-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSaving ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sauvegarde...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Save className="w-4 h-4" />
                        <span>Sauvegarder</span>
                      </div>
                    )}
                  </button>

                  {site?.status !== 'published' && (
                    <button
                      onClick={handlePublish}
                      disabled={isSaving}
                      className="btn-primary py-2 px-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Publier
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Messages d'erreur/succès */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg mb-6">
                {success}
              </div>
            )}

            {/* Éditeur */}
            <div className="card-hover">
              <SiteEditor
                content={editedContent}
                onChange={handleContentChange}
                showPreview={showPreview}
              />
            </div>

            {/* Informations du site */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card-hover p-4">
                <h3 className="font-semibold text-white mb-2">Informations</h3>
                <div className="space-y-1 text-sm text-gray-400">
                  <p><span className="font-medium">Nom :</span> {site?.name}</p>
                  <p><span className="font-medium">Secteur :</span> {site?.sector}</p>
                  <p><span className="font-medium">Style :</span> {site?.style}</p>
                  <p><span className="font-medium">Créé le :</span> {new Date(site?.created_at).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="card-hover p-4">
                <h3 className="font-semibold text-white mb-2">Actions</h3>
                <div className="space-y-2">
                  <button className="w-full btn-outline py-2 text-sm">
                    <Download className="w-4 h-4 mr-2" />
                    Exporter le code
                  </button>
                  <button className="w-full btn-outline py-2 text-sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Paramètres avancés
                  </button>
                </div>
              </div>

              <div className="card-hover p-4">
                <h3 className="font-semibold text-white mb-2">Statut</h3>
                <div className="space-y-2">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    site?.status === 'published' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {site?.status === 'published' ? 'Publié' : 'Brouillon'}
                  </span>
                  {site?.url && (
                    <a 
                      href={site.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-primary-400 hover:text-primary-300 text-sm"
                    >
                      Voir le site en ligne
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
} 