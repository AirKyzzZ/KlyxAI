import Head from 'next/head'
import Link from 'next/link'
import { Shield, Users, CreditCard, FileText, AlertTriangle, CheckCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Conditions d'utilisation - Klyx</title>
        <meta name="description" content="Conditions d'utilisation de Klyx - Termes et conditions légaux" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Conditions d'utilisation
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Dernière mise à jour : 15 janvier 2024
              </p>
            </div>

            {/* Company Info */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Informations sur l'entreprise</h2>
              <div className="text-gray-300">
                <p className="mb-2"><strong>Klyx</strong></p>
                <p className="mb-2">30 Cours Henri Brunet</p>
                <p className="mb-2">33000 Bordeaux, France</p>
                <p className="mb-2">SIRET : 94157236400011</p>
                <p className="mb-2">Email : contact@klyx.fr</p>
                <p>Téléphone : 07 83 97 23 60</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-12">
              {/* Introduction */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">1. Acceptation des conditions</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    En accédant et en utilisant le service Klyx ("le Service"), vous acceptez d'être lié par ces 
                    conditions d'utilisation ("les Conditions"). Si vous n'acceptez pas ces conditions, 
                    veuillez ne pas utiliser le Service.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Ces conditions constituent un accord légal entre vous et Klyx concernant l'utilisation 
                    de notre plateforme de création de sites web.
                  </p>
                </div>
              </section>

              {/* Definitions */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">2. Définitions</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <ul className="text-gray-300 space-y-3">
                    <li>• <strong>"Service"</strong> : La plateforme Klyx et tous ses composants</li>
                    <li>• <strong>"Utilisateur"</strong> : Toute personne utilisant le Service</li>
                    <li>• <strong>"Contenu"</strong> : Tout texte, image, vidéo ou autre matériel créé via le Service</li>
                    <li>• <strong>"Site"</strong> : Un site web créé et hébergé via le Service</li>
                    <li>• <strong>"Compte"</strong> : L'espace personnel de l'utilisateur sur la plateforme</li>
                  </ul>
                </div>
              </section>

              {/* Service Description */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">3. Description du service</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Klyx est une plateforme de création de sites web utilisant l'intelligence artificielle. 
                    Le Service comprend :
                  </p>
                  <ul className="text-gray-300 space-y-3">
                    <li>• La création automatique de sites web basée sur vos descriptions</li>
                    <li>• Un éditeur visuel pour personnaliser vos sites</li>
                    <li>• L'hébergement et la publication de vos sites</li>
                    <li>• Des outils d'analyse et de gestion</li>
                    <li>• Un support client et une documentation</li>
                  </ul>
                </div>
              </section>

              {/* Account Registration */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">4. Inscription et compte</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">4.1 Création de compte</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Pour utiliser le Service, vous devez créer un compte en fournissant des informations 
                    exactes et à jour. Vous êtes responsable de maintenir la confidentialité de vos 
                    identifiants de connexion.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">4.2 Responsabilités du compte</h3>
                  <ul className="text-gray-300 space-y-3">
                    <li>• Vous êtes responsable de toutes les activités effectuées sous votre compte</li>
                    <li>• Vous devez nous informer immédiatement de toute utilisation non autorisée</li>
                    <li>• Vous ne pouvez pas partager votre compte avec d'autres personnes</li>
                    <li>• Vous devez avoir au moins 16 ans pour créer un compte</li>
                  </ul>
                </div>
              </section>

              {/* Acceptable Use */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">5. Utilisation acceptable</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Vous vous engagez à utiliser le Service uniquement à des fins légales et conformes 
                    à ces conditions. Il est interdit de :
                  </p>
                  <ul className="text-gray-300 space-y-3">
                    <li>• Créer du contenu illégal, offensant ou inapproprié</li>
                    <li>• Violer les droits de propriété intellectuelle d'autrui</li>
                    <li>• Tenter de pirater ou de compromettre la sécurité du Service</li>
                    <li>• Utiliser le Service pour du spam ou des activités frauduleuses</li>
                    <li>• Reproduire, distribuer ou modifier le Service sans autorisation</li>
                    <li>• Utiliser le Service pour des activités commerciales non autorisées</li>
                  </ul>
                </div>
              </section>

              {/* Content and Intellectual Property */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">6. Contenu et propriété intellectuelle</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">6.1 Votre contenu</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Vous conservez tous vos droits sur le contenu que vous créez via le Service. 
                    Vous nous accordez une licence non exclusive pour héberger et afficher votre contenu.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">6.2 Notre propriété intellectuelle</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Le Service, y compris son code, design et fonctionnalités, est protégé par les droits 
                    d'auteur et autres lois sur la propriété intellectuelle. Ces droits appartiennent à Klyx.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">6.3 Licences</h3>
                  <ul className="text-gray-300 space-y-3">
                    <li>• Nous vous accordons une licence limitée pour utiliser le Service</li>
                    <li>• Cette licence est non exclusive, non transférable et révocable</li>
                    <li>• Vous ne pouvez pas sous-licencier ou revendre le Service</li>
                  </ul>
                </div>
              </section>

              {/* Payment Terms */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">7. Conditions de paiement</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">7.1 Tarification</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Les prix de nos services sont affichés sur notre site web et incluent la TVA française (20%). 
                    Nous nous réservons le droit de modifier nos tarifs avec un préavis de 30 jours.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">7.2 Paiements</h3>
                  <ul className="text-gray-300 space-y-3">
                    <li>• Les paiements sont traités via Stripe</li>
                    <li>• Les abonnements sont facturés à l'avance</li>
                    <li>• Les factures sont émises automatiquement</li>
                    <li>• Les paiements en retard peuvent entraîner la suspension du service</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">7.3 Remboursements</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Nous offrons une garantie de remboursement de 30 jours. Les demandes de remboursement 
                    doivent être soumises par email à contact@klyx.fr.
                  </p>
                </div>
              </section>

              {/* Service Availability */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">8. Disponibilité du service</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Nous nous efforçons de maintenir le Service disponible 24h/24 et 7j/7, mais nous ne 
                    garantissons pas une disponibilité ininterrompue. Le Service peut être temporairement 
                    indisponible pour :
                  </p>
                  <ul className="text-gray-300 space-y-3">
                    <li>• Maintenance planifiée</li>
                    <li>• Mises à jour du système</li>
                    <li>• Problèmes techniques imprévus</li>
                    <li>• Force majeure</li>
                  </ul>
                </div>
              </section>

              {/* Privacy and Data */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">9. Confidentialité et données</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    La collecte et l'utilisation de vos données personnelles sont régies par notre 
                    <Link href="/privacy" className="text-primary-400 hover:text-primary-300"> Politique de confidentialité</Link>. 
                    En utilisant le Service, vous acceptez cette politique.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Nous respectons le RGPD et mettons en place des mesures appropriées pour protéger vos données.
                  </p>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">10. Limitation de responsabilité</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Dans toute la mesure permise par la loi, Klyx ne sera pas responsable de :
                  </p>
                  <ul className="text-gray-300 space-y-3">
                    <li>• Perte de données ou interruption de service</li>
                    <li>• Dommages indirects ou consécutifs</li>
                    <li>• Perte de profits ou d'opportunités commerciales</li>
                    <li>• Actions de tiers ou utilisateurs</li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    Notre responsabilité totale est limitée au montant payé pour le Service dans les 12 mois 
                    précédant l'événement donnant lieu à la réclamation.
                  </p>
                </div>
              </section>

              {/* Termination */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">11. Résiliation</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">11.1 Résiliation par l'utilisateur</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Vous pouvez résilier votre compte à tout moment depuis votre dashboard. 
                    La résiliation prendra effet immédiatement.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">11.2 Résiliation par Klyx</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Nous pouvons suspendre ou résilier votre compte en cas de :
                  </p>
                  <ul className="text-gray-300 space-y-3">
                    <li>• Violation de ces conditions</li>
                    <li>• Utilisation frauduleuse du Service</li>
                    <li>• Non-paiement des frais</li>
                    <li>• Activité illégale</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">11.3 Effets de la résiliation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Après la résiliation, vous perdrez l'accès à votre compte et à vos sites. 
                    Nous pouvons supprimer vos données après 30 jours.
                  </p>
                </div>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">12. Droit applicable et juridiction</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed">
                    Ces conditions sont régies par le droit français. Tout litige sera soumis à la 
                    compétence exclusive des tribunaux de Bordeaux, France, sauf disposition légale contraire.
                  </p>
                </div>
              </section>

              {/* Changes */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">13. Modifications des conditions</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed">
                    Nous pouvons modifier ces conditions à tout moment. Les modifications importantes 
                    seront notifiées par email ou via une notification sur le site. Votre utilisation 
                    continue du Service après les modifications constitue votre acceptation des nouvelles conditions.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">14. Contact</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Pour toute question concernant ces conditions d'utilisation :
                  </p>
                  <div className="text-gray-300">
                    <p className="mb-2"><strong>Klyx</strong></p>
                    <p className="mb-2">30 Cours Henri Brunet</p>
                    <p className="mb-2">33000 Bordeaux, France</p>
                    <p className="mb-2">Email : <a href="mailto:contact@klyx.fr" className="text-primary-400 hover:text-primary-300">contact@klyx.fr</a></p>
                    <p>Téléphone : <a href="tel:+33783972360" className="text-primary-400 hover:text-primary-300">07 83 97 23 60</a></p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
} 