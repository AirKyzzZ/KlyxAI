import { Star, Quote, ArrowRight, Users, Heart, Award } from 'lucide-react'
import Link from 'next/link'

const testimonials = [
  {
    id: 1,
    name: 'Marie Dubois',
    role: 'Fondatrice, Cabinet de conseil',
    company: 'Dubois Consulting',
    avatar: '/avatars/marie-dubois.jpg',
    content: 'Klyx AI m\'a permis de créer un site professionnel en moins d\'une heure. L\'IA a parfaitement compris mon secteur et généré un contenu adapté. Un vrai gain de temps !',
    rating: 5,
    siteUrl: 'https://dubois-consulting.netlify.app'
  },
  {
    id: 2,
    name: 'Thomas Martin',
    role: 'Artisan boulanger',
    company: 'Boulangerie Martin',
    avatar: '/avatars/thomas-martin.jpg',
    content: 'En tant qu\'artisan, je n\'avais pas le temps ni les compétences pour créer un site. Grâce à Klyx AI, j\'ai maintenant une présence web professionnelle qui attire de nouveaux clients.',
    rating: 5,
    siteUrl: 'https://boulangerie-martin.netlify.app'
  },
  {
    id: 3,
    name: 'Sophie Leroy',
    role: 'Directrice marketing',
    company: 'Agence DigitalPro',
    avatar: '/avatars/sophie-leroy.jpg',
    content: 'Nous utilisons Klyx AI pour nos clients qui ont besoin de sites rapidement. La qualité est excellente et nos clients sont ravis. Un outil indispensable pour notre agence.',
    rating: 5,
    siteUrl: 'https://digitalpro-agency.netlify.app'
  }
]

export default function SocialProof() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary-600/20 backdrop-blur-sm border border-primary-600/30 rounded-full px-6 py-3 mb-8">
            <Heart className="w-5 h-5 text-primary-400" />
            <span className="text-primary-400 font-medium">Ils nous font confiance</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Nos clients{' '}
            <span className="text-gradient">satisfaits</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez ce que nos clients disent de Klyx AI. 
            Des centaines de TPE/PME et indépendants nous font confiance pour leur présence web.
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="card-hover text-center p-8 group">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-gradient mb-2">500+</div>
            <div className="text-gray-400 font-medium">Sites créés</div>
          </div>
          <div className="card-hover text-center p-8 group">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-gradient mb-2">98%</div>
            <div className="text-gray-400 font-medium">Clients satisfaits</div>
          </div>
          <div className="card-hover text-center p-8 group">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-gradient mb-2">30s</div>
            <div className="text-gray-400 font-medium">Temps moyen de création</div>
          </div>
        </div>

        {/* Témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="card-hover p-8 group">
              {/* Note */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Contenu */}
              <div className="mb-8">
                <Quote className="w-8 h-8 text-primary-400 mb-4" />
                <p className="text-gray-300 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Auteur */}
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-white text-lg">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                  <div className="text-primary-400 font-medium">{testimonial.company}</div>
                </div>
              </div>

              {/* Lien vers le site */}
              <div className="pt-6 border-t border-gray-800/50">
                <Link 
                  href={testimonial.siteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center space-x-2 group/link transition-colors duration-300"
                >
                  <span>Voir leur site</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="card-hover p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Rejoignez nos clients satisfaits
            </h3>
            <p className="text-gray-300 mb-8">
              Créez votre site web professionnel en quelques minutes
            </p>
            <Link 
              href="/login?signup=true" 
              className="btn-primary text-lg px-10 py-5 inline-flex items-center space-x-3 group"
            >
              <Star className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Commencer gratuitement</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 