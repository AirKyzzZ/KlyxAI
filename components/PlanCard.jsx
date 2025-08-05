import { Check, X, Crown, Zap, Rocket, Building2 } from 'lucide-react'
import { plans } from '../lib/plans'

export default function PlanCard({ plan, isPopular = false, onSelect }) {
  const planData = typeof plan === 'string' ? plans.find(p => p.id === plan) : plan

  if (!planData) return null

  return (
    <div className={`card-hover relative ${isPopular ? 'ring-2 ring-primary-500/50 glow-effect' : ''}`}>
      {/* Badge populaire */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
            <Crown className="w-4 h-4" />
            <span>Le plus populaire</span>
          </div>
        </div>
      )}

      {/* En-tête du plan */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{planData.name}</h3>
        <div className="mb-4">
          <span className="text-5xl font-black text-gradient">{planData.price}</span>
          {planData.price > 0 && (
            <span className="text-gray-400 ml-1">€</span>
          )}
          {planData.price === 0 && (
            <span className="text-gray-400 ml-1">Gratuit</span>
          )}
          <span className="text-gray-400">/{planData.interval}</span>
        </div>
        <p className="text-gray-400 text-sm">
          {planData.price === 0 ? 'Parfait pour commencer' : 'Facturation mensuelle'}
        </p>
      </div>

      {/* Fonctionnalités */}
      <div className="space-y-4 mb-8">
        <h4 className="font-semibold text-white mb-4">Ce qui est inclus :</h4>
        {planData.features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
              <Check className="w-3 h-3 text-green-400" />
            </div>
            <span className="text-gray-300">{feature}</span>
          </div>
        ))}
      </div>

      {/* Limitations */}
      {planData.limitations.length > 0 && (
        <div className="space-y-4 mb-8">
          <h4 className="font-semibold text-white mb-4">Limitations :</h4>
          {planData.limitations.map((limitation, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                <X className="w-3 h-3 text-red-400" />
              </div>
              <span className="text-gray-400">{limitation}</span>
            </div>
          ))}
        </div>
      )}

      {/* Bouton d'action */}
      <div className="mt-auto">
        {planData.price === 0 ? (
          <button
            onClick={() => onSelect && onSelect(planData.id)}
            className="w-full btn-outline inline-flex items-center justify-center space-x-3 group"
          >
            <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Commencer gratuitement</span>
          </button>
        ) : (
          <button
            onClick={() => onSelect && onSelect(planData.id)}
            className={`w-full inline-flex items-center justify-center space-x-3 group ${
              isPopular ? 'btn-primary' : 'btn-outline'
            }`}
          >
            {isPopular ? (
              <>
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Choisir {planData.name}</span>
              </>
            ) : (
              <>
                <Building2 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Choisir {planData.name}</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Informations supplémentaires */}
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          {planData.price === 0 
            ? 'Aucune carte de crédit requise' 
            : 'Annulation à tout moment'
          }
        </p>
      </div>
    </div>
  )
}

export function PlanComparison() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary-600/20 backdrop-blur-sm border border-primary-600/30 rounded-full px-6 py-3 mb-8">
            <Crown className="w-5 h-5 text-primary-400" />
            <span className="text-primary-400 font-medium">Plans et tarifs</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Choisissez votre{' '}
            <span className="text-gradient">plan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Des solutions adaptées à tous les besoins, de l'essai gratuit 
            aux fonctionnalités avancées pour les agences.
          </p>
        </div>

        {/* Cartes des plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              isPopular={plan.popular}
              onSelect={(planId) => {
                // Redirection vers la page de connexion avec le plan sélectionné
                window.location.href = `/login?signup=true&plan=${planId}`
              }}
            />
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Questions fréquentes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-hover p-8">
              <h4 className="font-bold text-white mb-4 text-lg">
                Puis-je changer de plan à tout moment ?
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Oui, vous pouvez passer à un plan supérieur ou inférieur à tout moment. 
                Les changements sont appliqués immédiatement.
              </p>
            </div>
            <div className="card-hover p-8">
              <h4 className="font-bold text-white mb-4 text-lg">
                Y a-t-il des frais cachés ?
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Non, tous nos prix sont transparents. Aucun frais caché, 
                aucun engagement sur le long terme.
              </p>
            </div>
            <div className="card-hover p-8">
              <h4 className="font-bold text-white mb-4 text-lg">
                Puis-je annuler mon abonnement ?
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Oui, vous pouvez annuler votre abonnement à tout moment 
                depuis votre tableau de bord.
              </p>
            </div>
            <div className="card-hover p-8">
              <h4 className="font-bold text-white mb-4 text-lg">
                Le support est-il inclus ?
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Oui, tous nos plans incluent le support. Le plan Agence 
                bénéficie d'un support prioritaire 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 