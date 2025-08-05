import { useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'

const sectors = [
  'Restaurant / Hôtellerie',
  'Commerce / E-commerce',
  'Services professionnels',
  'Artisanat',
  'Santé / Médical',
  'Éducation / Formation',
  'Technologie / IT',
  'Immobilier',
  'Transport / Logistique',
  'Associations / ONG',
  'Autre'
]

const styles = [
  'Moderne et épuré',
  'Classique et élégant',
  'Coloré et dynamique',
  'Minimaliste',
  'Corporate',
  'Créatif et artistique'
]

const pages = [
  { id: 'home', label: 'Accueil', default: true },
  { id: 'about', label: 'À propos', default: true },
  { id: 'services', label: 'Services', default: false },
  { id: 'portfolio', label: 'Portfolio / Réalisations', default: false },
  { id: 'blog', label: 'Blog / Actualités', default: false },
  { id: 'contact', label: 'Contact', default: true },
  { id: 'pricing', label: 'Tarifs', default: false },
  { id: 'testimonials', label: 'Témoignages', default: false }
]

const tones = [
  'Professionnel et formel',
  'Convivial et accessible',
  'Technique et expert',
  'Créatif et inspirant',
  'Rassurant et de confiance'
]

export default function SiteBuilderForm({ onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    siteName: '',
    sector: '',
    style: '',
    pages: ['home', 'about', 'contact'],
    tone: '',
    description: ''
  })

  const [errors, setErrors] = useState({})

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Effacer l'erreur du champ modifié
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: null
      }))
    }
  }

  const handlePageToggle = (pageId) => {
    const newPages = formData.pages.includes(pageId)
      ? formData.pages.filter(id => id !== pageId)
      : [...formData.pages, pageId]
    
    handleInputChange('pages', newPages)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.siteName.trim()) {
      newErrors.siteName = 'Le nom du site est requis'
    }

    if (!formData.sector) {
      newErrors.sector = 'Veuillez sélectionner un secteur d\'activité'
    }

    if (!formData.style) {
      newErrors.style = 'Veuillez choisir un style visuel'
    }

    if (formData.pages.length === 0) {
      newErrors.pages = 'Veuillez sélectionner au moins une page'
    }

    if (!formData.tone) {
      newErrors.tone = 'Veuillez choisir un ton de contenu'
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Veuillez décrire votre activité'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Nom du site */}
      <div>
        <label htmlFor="siteName" className="block text-sm font-medium text-gray-700 mb-2">
          Nom de votre site *
        </label>
        <input
          type="text"
          id="siteName"
          value={formData.siteName}
          onChange={(e) => handleInputChange('siteName', e.target.value)}
          placeholder="Ex: Boulangerie Martin, Cabinet Dubois..."
          className={`input-field ${errors.siteName ? 'border-red-500' : ''}`}
        />
        {errors.siteName && (
          <p className="text-red-500 text-sm mt-1">{errors.siteName}</p>
        )}
      </div>

      {/* Secteur d'activité */}
      <div>
        <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-2">
          Secteur d'activité *
        </label>
        <select
          id="sector"
          value={formData.sector}
          onChange={(e) => handleInputChange('sector', e.target.value)}
          className={`input-field ${errors.sector ? 'border-red-500' : ''}`}
        >
          <option value="">Sélectionnez votre secteur</option>
          {sectors.map((sector) => (
            <option key={sector} value={sector}>
              {sector}
            </option>
          ))}
        </select>
        {errors.sector && (
          <p className="text-red-500 text-sm mt-1">{errors.sector}</p>
        )}
      </div>

      {/* Style visuel */}
      <div>
        <label htmlFor="style" className="block text-sm font-medium text-gray-700 mb-2">
          Style visuel *
        </label>
        <select
          id="style"
          value={formData.style}
          onChange={(e) => handleInputChange('style', e.target.value)}
          className={`input-field ${errors.style ? 'border-red-500' : ''}`}
        >
          <option value="">Choisissez un style</option>
          {styles.map((style) => (
            <option key={style} value={style}>
              {style}
            </option>
          ))}
        </select>
        {errors.style && (
          <p className="text-red-500 text-sm mt-1">{errors.style}</p>
        )}
      </div>

      {/* Pages souhaitées */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Pages souhaitées *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {pages.map((page) => (
            <label key={page.id} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.pages.includes(page.id)}
                onChange={() => handlePageToggle(page.id)}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <span className="text-sm text-gray-700">{page.label}</span>
            </label>
          ))}
        </div>
        {errors.pages && (
          <p className="text-red-500 text-sm mt-1">{errors.pages}</p>
        )}
      </div>

      {/* Ton du contenu */}
      <div>
        <label htmlFor="tone" className="block text-sm font-medium text-gray-700 mb-2">
          Ton du contenu *
        </label>
        <select
          id="tone"
          value={formData.tone}
          onChange={(e) => handleInputChange('tone', e.target.value)}
          className={`input-field ${errors.tone ? 'border-red-500' : ''}`}
        >
          <option value="">Choisissez un ton</option>
          {tones.map((tone) => (
            <option key={tone} value={tone}>
              {tone}
            </option>
          ))}
        </select>
        {errors.tone && (
          <p className="text-red-500 text-sm mt-1">{errors.tone}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Décrivez votre activité *
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          placeholder="Décrivez brièvement votre activité, vos services, votre public cible..."
          rows={4}
          className={`input-field ${errors.description ? 'border-red-500' : ''}`}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
        <p className="text-gray-500 text-sm mt-1">
          Plus vous êtes précis, mieux l'IA pourra personnaliser votre site.
        </p>
      </div>

      {/* Bouton de soumission */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Génération en cours...</span>
            </div>
          ) : (
            'Générer mon site web'
          )}
        </button>
      </div>
    </form>
  )
} 