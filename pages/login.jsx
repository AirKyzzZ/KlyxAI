import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from 'lucide-react'
import { signUp, signIn, signInWithGoogle } from '../lib/supabaseClient'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function Login() {
  const router = useRouter()
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  })

  // Détecter si on vient de l'inscription
  useEffect(() => {
    if (router.query.signup === 'true') {
      setIsSignUp(true)
    }
  }, [router.query])

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    setError('') // Effacer les erreurs quand l'utilisateur tape
  }

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError('Tous les champs sont requis')
      return false
    }

    if (isSignUp) {
      if (!formData.firstName || !formData.lastName) {
        setError('Veuillez remplir tous les champs')
        return false
      }

      if (formData.password !== formData.confirmPassword) {
        setError('Les mots de passe ne correspondent pas')
        return false
      }

      if (formData.password.length < 6) {
        setError('Le mot de passe doit contenir au moins 6 caractères')
        return false
      }
    }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsLoading(true)
    setError('')
    setSuccess('')

    try {
      if (isSignUp) {
        const { error } = await signUp(formData.email, formData.password)
        if (error) {
          setError(error.message)
        } else {
          setSuccess('Vérifiez votre email pour confirmer votre compte')
        }
      } else {
        const { error } = await signIn(formData.email, formData.password)
        if (error) {
          setError(error.message)
        } else {
          router.push('/dashboard')
        }
      }
    } catch (error) {
      setError('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    setError('')
    
    try {
      const { error } = await signInWithGoogle()
      if (error) {
        setError(error.message)
      }
    } catch (error) {
      setError('Une erreur est survenue lors de la connexion avec Google')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>{isSignUp ? 'Inscription' : 'Connexion'} - Klyx AI</title>
        <meta name="description" content={isSignUp ? 'Créez votre compte Klyx AI' : 'Connectez-vous à votre compte Klyx AI'} />
      </Head>

      <div className="min-h-screen">
        <Navbar />

        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 pt-32">
          <div className="max-w-md w-full space-y-8">
                         <div className="text-center">
               <div className="mb-6">
                <Image 
                  src="/images/black_transparent.png" 
                  alt="Klyx AI" 
                  width={56} 
                  height={56} 
                  className="w-14 h-14 mx-auto mb-4"
                />
              </div>
              <h2 className="text-3xl font-bold text-white">
                {isSignUp ? 'Créer votre compte' : 'Se connecter'}
              </h2>
              <p className="mt-2 text-gray-300">
                {isSignUp 
                  ? 'Commencez à créer vos sites web professionnels'
                  : 'Accédez à votre tableau de bord'
                }
              </p>
            </div>

            <div className="card-hover">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Messages d'erreur/succès */}
                {error && (
                  <div className="bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}
                {success && (
                  <div className="bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg">
                    {success}
                  </div>
                )}

                {/* Champs du formulaire */}
                {isSignUp && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                        Prénom
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="input-field"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                        Nom
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="input-field"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="input-field pl-10"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="input-field pl-10 pr-10"
                      placeholder="Votre mot de passe"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {isSignUp && (
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                      Confirmer le mot de passe
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        className="input-field pl-10 pr-10"
                        placeholder="Confirmez votre mot de passe"
                      />
                    </div>
                  </div>
                )}

                {/* Bouton de soumission */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{isSignUp ? 'Création du compte...' : 'Connexion...'}</span>
                    </div>
                  ) : (
                    <span>{isSignUp ? 'Créer mon compte' : 'Se connecter'}</span>
                  )}
                </button>

                {/* Séparateur */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-900/50 text-gray-400">Ou</span>
                  </div>
                </div>

                {/* Connexion Google */}
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={isLoading}
                  className="w-full btn-outline py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span>{isSignUp ? 'S\'inscrire avec Google' : 'Se connecter avec Google'}</span>
                  </div>
                </button>
              </form>

              {/* Lien de basculement */}
              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  {isSignUp ? 'Vous avez déjà un compte ?' : 'Vous n\'avez pas de compte ?'}
                  <button
                    onClick={() => {
                      setIsSignUp(!isSignUp)
                      setError('')
                      setSuccess('')
                    }}
                    className="ml-1 text-primary-400 hover:text-primary-300 font-medium"
                  >
                    {isSignUp ? 'Se connecter' : 'S\'inscrire'}
                  </button>
                </p>
              </div>
            </div>

            {/* Liens utiles */}
            <div className="text-center">
              <Link href="/" className="text-gray-400 hover:text-gray-300 text-sm">
                ← Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
} 