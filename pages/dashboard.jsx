import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { Plus, Edit, Eye, Trash2, Settings, CreditCard, Users, Globe } from 'lucide-react'
import { getCurrentUser, getUserSites, deleteSite } from '../lib/supabaseClient'
import { plans } from '../lib/plans'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [sites, setSites] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [userPlan, setUserPlan] = useState('freemium')
  const [stats, setStats] = useState({
    totalSites: 0,
    publishedSites: 0,
    draftSites: 0
  })

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const { user, error } = await getCurrentUser()
      if (error || !user) {
        router.push('/login')
        return
      }
      
      setUser(user)
      await loadUserData(user.id)
    } catch (error) {
      console.error('Erreur lors de la vérification:', error)
      router.push('/login')
    }
  }

  const loadUserData = async (userId) => {
    try {
      // Charger les sites de l'utilisateur
      const { data: sitesData, error } = await getUserSites(userId)
      if (error) {
        console.error('Erreur lors du chargement des sites:', error)
        return
      }

      setSites(sitesData || [])
      
      // Calculer les statistiques
      const published = sitesData?.filter(site => site.status === 'published').length || 0
      const drafts = sitesData?.filter(site => site.status === 'draft').length || 0
      
      setStats({
        totalSites: sitesData?.length || 0,
        publishedSites: published,
        draftSites: drafts
      })

      // TODO: Charger le plan utilisateur depuis la base de données
      // setUserPlan(userPlanFromDB)

    } catch (error) {
      console.error('Erreur lors du chargement des données:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreateSite = () => {
    router.push('/builder')
  }

  const handleEditSite = (siteId) => {
    router.push(`/editor/${siteId}`)
  }

  const handleViewSite = (siteUrl) => {
    window.open(siteUrl, '_blank')
  }

  const handleDeleteSite = async (siteId) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce site ?')) {
      return
    }

    try {
      const { error } = await deleteSite(siteId)
      if (error) {
        console.error('Erreur lors de la suppression:', error)
        return
      }

      // Mettre à jour la liste des sites
      setSites(prev => prev.filter(site => site.id !== siteId))
      setStats(prev => ({
        ...prev,
        totalSites: prev.totalSites - 1,
        publishedSites: prev.publishedSites - (sites.find(site => site.id === siteId)?.status === 'published' ? 1 : 0),
        draftSites: prev.draftSites - (sites.find(site => site.id === siteId)?.status === 'draft' ? 1 : 0)
      }))
    } catch (error) {
      console.error('Erreur lors de la suppression:', error)
    }
  }

  const getPlanInfo = () => {
    return plans.find(plan => plan.id === userPlan) || plans[0]
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300">Chargement...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Tableau de bord - Klyx AI</title>
        <meta name="description" content="Gérez vos sites web créés avec Klyx AI" />
      </Head>

      <div className="min-h-screen">
        <Navbar />

        <div className="pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                Tableau de bord
              </h1>
              <p className="text-gray-300">
                Bienvenue, {user?.email}
              </p>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="card-hover text-center p-6">
                <div className="text-3xl font-bold text-gradient mb-2">{stats.totalSites}</div>
                <div className="text-gray-400">Sites créés</div>
              </div>
              <div className="card-hover text-center p-6">
                <div className="text-3xl font-bold text-gradient mb-2">{stats.publishedSites}</div>
                <div className="text-gray-400">Sites publiés</div>
              </div>
              <div className="card-hover text-center p-6">
                <div className="text-3xl font-bold text-gradient mb-2">{stats.draftSites}</div>
                <div className="text-gray-400">Brouillons</div>
              </div>
            </div>

            {/* Plan utilisateur */}
            <div className="card-hover mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Plan actuel : {getPlanInfo().name}
                  </h3>
                  <p className="text-gray-400">
                    {getPlanInfo().price === 0 ? 'Gratuit' : `${getPlanInfo().price}€/mois`}
                  </p>
                </div>
                <Link href="/#pricing" className="btn-outline">
                  Changer de plan
                </Link>
              </div>
            </div>

            {/* Actions rapides */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">Actions rapides</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <button
                  onClick={handleCreateSite}
                  className="card-hover p-6 text-center group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Créer un site</h3>
                  <p className="text-gray-400 text-sm">Nouveau site web</p>
                </button>

                <Link href="/#pricing" className="card-hover p-6 text-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Gérer l'abonnement</h3>
                  <p className="text-gray-400 text-sm">Changer de plan</p>
                </Link>

                <Link href="/settings" className="card-hover p-6 text-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Paramètres</h3>
                  <p className="text-gray-400 text-sm">Configurer le compte</p>
                </Link>

                <Link href="/help" className="card-hover p-6 text-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Support</h3>
                  <p className="text-gray-400 text-sm">Aide et assistance</p>
                </Link>
              </div>
            </div>

            {/* Sites récents */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">Sites récents</h2>
                {sites.length > 0 && (
                  <Link href="/sites" className="text-primary-400 hover:text-primary-300 text-sm">
                    Voir tous les sites
                  </Link>
                )}
              </div>

              {sites.length === 0 ? (
                <div className="card-hover text-center py-12">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Aucun site créé</h3>
                  <p className="text-gray-400 mb-6">
                    Commencez par créer votre premier site web professionnel
                  </p>
                  <button
                    onClick={handleCreateSite}
                    className="btn-primary"
                  >
                    Créer mon premier site
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sites.slice(0, 6).map((site) => (
                    <div key={site.id} className="card-hover">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-white mb-1">{site.name}</h3>
                          <p className="text-gray-400 text-sm">{site.description}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          site.status === 'published' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {site.status === 'published' ? 'Publié' : 'Brouillon'}
                        </span>
                      </div>

                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditSite(site.id)}
                          className="flex-1 btn-outline py-2 text-sm"
                        >
                          <Edit className="w-4 h-4 mr-1" />
                          Modifier
                        </button>
                        {site.status === 'published' && (
                          <button
                            onClick={() => handleViewSite(site.url)}
                            className="flex-1 btn-outline py-2 text-sm"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Voir
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteSite(site.id)}
                          className="px-3 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors duration-200"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
} 