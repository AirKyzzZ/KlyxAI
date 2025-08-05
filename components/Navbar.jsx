import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, X, User, LogOut } from 'lucide-react'
import { supabase, getCurrentUser, signOut } from '../lib/supabaseClient'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    checkUser()
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null)
      setIsLoading(false)
    })

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      subscription.unsubscribe()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const checkUser = async () => {
    try {
      const { user } = await getCurrentUser()
      setUser(user)
    } catch (error) {
      console.error('Erreur lors de la vérification utilisateur:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      router.push('/')
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      scrolled 
        ? 'px-4 py-2' 
        : 'px-0 py-0'
    }`}>
      <div className={`max-w-7xl mx-auto transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl shadow-black/20 mx-auto max-w-4xl' 
          : 'bg-transparent'
      }`}>
        <div className={`flex justify-between items-center transition-all duration-500 ease-out ${
          scrolled ? 'h-16 px-6' : 'h-20 px-4 sm:px-6 lg:px-8'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image 
                src="/images/black_transparent.png" 
                alt="Klyx AI" 
                width={56} 
                height={56} 
                className={`group-hover:scale-110 transition-all duration-300 ${
                  scrolled ? 'w-10 h-10' : 'w-14 h-14'
                }`}
              />
            </Link>
          </div>

          {/* Navigation desktop */}
          <div className="hidden md:block">
            <div className={`flex items-baseline space-x-8 transition-all duration-500 ease-out ${
              scrolled ? 'ml-6 space-x-6' : 'ml-10 space-x-8'
            }`}>
              <Link href="/" className="text-gray-300 hover:text-primary-400 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5">
                Accueil
              </Link>
              <Link href="/#features" className="text-gray-300 hover:text-primary-400 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5">
                Fonctionnalités
              </Link>
              <Link href="/#pricing" className="text-gray-300 hover:text-primary-400 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5">
                Tarifs
              </Link>
              <Link href="/#contact" className="text-gray-300 hover:text-primary-400 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5">
                Contact
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-primary-400 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5">
                À propos
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-primary-400 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5">
                Blog
              </Link>
            </div>
          </div>

          {/* Actions utilisateur */}
          <div className="hidden md:block">
            {!isLoading && (
              <div className={`flex items-center space-x-4 transition-all duration-500 ease-out ${
                scrolled ? 'space-x-3' : 'space-x-4'
              }`}>
                {user ? (
                  <>
                    <Link href="/dashboard" className={`btn-primary transition-all duration-300 ${
                      scrolled ? 'px-4 py-2 text-sm' : 'px-6 py-2'
                    }`}>
                      Tableau de bord
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="text-gray-300 hover:text-red-400 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5 flex items-center space-x-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Déconnexion</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="text-gray-300 hover:text-primary-400 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5">
                      Connexion
                    </Link>
                    <Link href="/login?signup=true" className={`btn-primary transition-all duration-300 ${
                      scrolled ? 'px-4 py-2 text-sm' : 'px-6 py-2'
                    }`}>
                      Commencer gratuitement
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-primary-400 p-2 rounded-lg transition-all duration-300 hover:bg-white/5"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile ouvert */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className={`px-4 pt-2 pb-6 space-y-2 transition-all duration-500 ease-out ${
            scrolled 
              ? 'bg-black/95 backdrop-blur-xl rounded-b-2xl border border-white/10 shadow-2xl shadow-black/20 mx-4' 
              : 'bg-black/95 backdrop-blur-md border-t border-gray-800/50'
          }`}>
            <Link href="/" className="text-gray-300 hover:text-primary-400 block px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/5">
              Accueil
            </Link>
            <Link href="/#features" className="text-gray-300 hover:text-primary-400 block px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/5">
              Fonctionnalités
            </Link>
            <Link href="/#pricing" className="text-gray-300 hover:text-primary-400 block px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/5">
              Tarifs
            </Link>
            <Link href="/#contact" className="text-gray-300 hover:text-primary-400 block px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/5">
              Contact
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-primary-400 block px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/5">
              À propos
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-primary-400 block px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/5">
              Blog
            </Link>
            
            {!isLoading && (
              <div className="pt-4 border-t border-gray-800/50">
                {user ? (
                  <>
                    <Link href="/dashboard" className="btn-primary w-full text-center block mb-3">
                      Tableau de bord
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="text-gray-300 hover:text-red-400 block px-3 py-3 rounded-lg text-base font-medium w-full text-left transition-all duration-300 hover:bg-white/5 flex items-center space-x-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Déconnexion</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="text-gray-300 hover:text-primary-400 block px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/5">
                      Connexion
                    </Link>
                    <Link href="/login?signup=true" className="btn-primary w-full text-center block mt-3">
                      Commencer gratuitement
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
} 