const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY
const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions'

export const generateSite = async (siteConfig) => {
  if (!DEEPSEEK_API_KEY) {
    throw new Error('Clé API DeepSeek manquante')
  }

  const {
    siteName,
    sector,
    style,
    pages,
    tone,
    description
  } = siteConfig

  const prompt = `
Créez un site web professionnel en français pour "${siteName}" dans le secteur ${sector}.

Configuration:
- Style visuel: ${style}
- Pages demandées: ${pages.join(', ')}
- Ton du contenu: ${tone}
- Description: ${description}

Générez un site web complet avec:
1. HTML sémantique moderne et responsive
2. CSS avec Tailwind CSS (classes utilitaires)
3. JavaScript minimal pour l'interactivité
4. Contenu en français adapté au secteur
5. Design professionnel et moderne
6. Optimisation SEO de base

Structure attendue:
- Header avec navigation
- Section hero avec CTA
- Sections de contenu selon les pages demandées
- Footer avec informations de contact
- Responsive design pour mobile/tablette/desktop

Retournez uniquement le code HTML complet avec CSS intégré et JavaScript minimal.
`

  try {
    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: 'Vous êtes un expert développeur web français spécialisé dans la création de sites web professionnels modernes et responsives. Vous utilisez HTML5, CSS3 avec Tailwind CSS, et JavaScript moderne.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 4000,
        temperature: 0.7
      })
    })

    if (!response.ok) {
      throw new Error(`Erreur API DeepSeek: ${response.status}`)
    }

    const data = await response.json()
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error('Réponse API DeepSeek invalide')
    }

    const generatedCode = data.choices[0].message.content

    // Nettoyer et formater le code généré
    const cleanCode = generatedCode
      .replace(/```html/g, '')
      .replace(/```/g, '')
      .trim()

    return {
      html: cleanCode,
      metadata: {
        siteName,
        sector,
        style,
        pages,
        tone,
        generatedAt: new Date().toISOString()
      }
    }

  } catch (error) {
    console.error('Erreur lors de la génération du site:', error)
    throw new Error(`Erreur lors de la génération: ${error.message}`)
  }
}

export const generateSiteVariations = async (baseConfig, variationType) => {
  const variations = {
    'color': ['Moderne avec bleu', 'Élégant avec vert', 'Dynamique avec orange'],
    'layout': ['Layout centré', 'Layout asymétrique', 'Layout en grille'],
    'style': ['Minimaliste', 'Coloré', 'Corporate']
  }

  const variationPrompts = variations[variationType] || []
  const results = []

  for (const variation of variationPrompts) {
    const config = {
      ...baseConfig,
      style: variation
    }
    
    try {
      const result = await generateSite(config)
      results.push({
        variation,
        ...result
      })
    } catch (error) {
      console.error(`Erreur pour la variation ${variation}:`, error)
    }
  }

  return results
}

export const optimizeSite = async (existingCode, optimizationType) => {
  const optimizationPrompts = {
    'seo': 'Optimisez ce code HTML pour le SEO en ajoutant les meta tags appropriés, une structure sémantique, et des attributs alt pour les images.',
    'performance': 'Optimisez ce code HTML pour les performances en minimisant le CSS, optimisant les images, et améliorant la vitesse de chargement.',
    'accessibility': 'Optimisez ce code HTML pour l\'accessibilité en ajoutant les attributs ARIA appropriés, améliorant la navigation au clavier, et respectant les standards WCAG.'
  }

  const prompt = optimizationPrompts[optimizationType]
  if (!prompt) {
    throw new Error('Type d\'optimisation non reconnu')
  }

  try {
    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: 'Vous êtes un expert en optimisation web spécialisé dans l\'amélioration des sites existants.'
          },
          {
            role: 'user',
            content: `${prompt}\n\nCode HTML actuel:\n${existingCode}`
          }
        ],
        max_tokens: 4000,
        temperature: 0.3
      })
    })

    if (!response.ok) {
      throw new Error(`Erreur API DeepSeek: ${response.status}`)
    }

    const data = await response.json()
    const optimizedCode = data.choices[0].message.content
      .replace(/```html/g, '')
      .replace(/```/g, '')
      .trim()

    return optimizedCode

  } catch (error) {
    console.error('Erreur lors de l\'optimisation:', error)
    throw new Error(`Erreur lors de l'optimisation: ${error.message}`)
  }
} 