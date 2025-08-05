export const plans = [
  {
    id: 'freemium',
    name: 'Freemium',
    price: 0,
    currency: 'EUR',
    interval: 'month',
    features: [
      '1 site web',
      'Génération par IA',
      'Éditeur WYSIWYG basique',
      'Hébergement Netlify',
      'Sous-domaine gratuit',
      'Support email'
    ],
    limitations: [
      'Pas de domaine personnalisé',
      'Pas de branding personnalisé',
      'Pas d\'export de code',
      'Limite de 3 pages par site'
    ],
    stripePriceId: null, // Gratuit
    popular: false
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 29,
    currency: 'EUR',
    interval: 'month',
    features: [
      '5 sites web',
      'Génération par IA illimitée',
      'Éditeur WYSIWYG avancé',
      'Hébergement Netlify',
      'Domaine personnalisé',
      'Branding personnalisé',
      'Export de code',
      'Support prioritaire',
      'Analytics de base'
    ],
    limitations: [
      'Pas d\'équipe',
      'Pas de fonctionnalités avancées'
    ],
    stripePriceId: 'price_pro_monthly', // À configurer dans Stripe
    popular: true
  },
  {
    id: 'agence',
    name: 'Agence',
    price: 99,
    currency: 'EUR',
    interval: 'month',
    features: [
      'Sites web illimités',
      'Génération par IA illimitée',
      'Éditeur WYSIWYG avancé',
      'Hébergement Netlify',
      'Domaines personnalisés illimités',
      'Branding personnalisé',
      'Export de code',
      'Support prioritaire 24/7',
      'Analytics avancés',
      'Équipe jusqu\'à 10 membres',
      'API d\'intégration',
      'Formation dédiée'
    ],
    limitations: [],
    stripePriceId: 'price_agence_monthly', // À configurer dans Stripe
    popular: false
  }
]

export const getPlanById = (planId) => {
  return plans.find(plan => plan.id === planId)
}

export const getPlanFeatures = (planId) => {
  const plan = getPlanById(planId)
  return plan ? plan.features : []
}

export const getPlanLimitations = (planId) => {
  const plan = getPlanById(planId)
  return plan ? plan.limitations : []
}

export const checkPlanLimit = (userPlan, feature) => {
  const plan = getPlanById(userPlan)
  
  switch (feature) {
    case 'sites':
      if (plan.id === 'freemium') return 1
      if (plan.id === 'pro') return 5
      if (plan.id === 'agence') return Infinity
      return 0
      
    case 'pages':
      if (plan.id === 'freemium') return 3
      return Infinity
      
    case 'custom_domain':
      return plan.id !== 'freemium'
      
    case 'team_members':
      if (plan.id === 'agence') return 10
      return 0
      
    case 'ai_generation':
      return plan.id !== 'freemium'
      
    default:
      return false
  }
} 