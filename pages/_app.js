import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Ajouter les classes CSS pour le scroll smooth
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return <Component {...pageProps} />
} 