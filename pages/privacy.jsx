import Head from 'next/head'
import { Shield, Eye, Lock, Database, User, Mail, Phone } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Politique de confidentialité - Klyx</title>
        <meta name="description" content="Politique de confidentialité de Klyx - Protection de vos données personnelles" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Politique de confidentialité
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Dernière mise à jour : 15 janvier 2024
              </p>
            </div>

            {/* Company Info */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Informations sur l'entreprise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Klyx Studio</h3>
                  <p className="mb-2">30 Cours Henri Brunet</p>
                  <p className="mb-2">33000 Bordeaux, France</p>
                  <p className="mb-2">SIRET : 94157236400011</p>
                  <p>Email : contact@klyx.fr</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Contact DPO</h3>
                  <p className="mb-2">Délégué à la protection des données</p>
                  <p className="mb-2">Email : contact@klyx.fr</p>
                  <p>Téléphone : 07 83 97 23 60</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-12">
              {/* Introduction */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">1. Introduction</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Klyx Studio ("nous", "notre", "nos") s'engage à protéger votre vie privée et vos données personnelles. 
                    Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations 
                    lorsque vous utilisez notre service de création de sites web.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    En utilisant Klyx, vous acceptez les pratiques décrites dans cette politique de confidentialité. 
                    Si vous n'êtes pas d'accord avec ces pratiques, veuillez ne pas utiliser notre service.
                  </p>
                </div>
              </section>

              {/* Data Collection */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">2. Données que nous collectons</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">2.1 Données d'identification</h3>
                  <ul className="text-gray-300 space-y-2 mb-6">
                    <li>• Nom et prénom</li>
                    <li>• Adresse email</li>
                    <li>• Numéro de téléphone (optionnel)</li>
                    <li>• Adresse postale (pour la facturation)</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-4">2.2 Données de connexion</h3>
                  <ul className="text-gray-300 space-y-2 mb-6">
                    <li>• Adresse IP</li>
                    <li>• Type de navigateur</li>
                    <li>• Système d'exploitation</li>
                    <li>• Pages visitées et temps passé</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-4">2.3 Données de contenu</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Contenu de vos sites web</li>
                    <li>• Images et médias uploadés</li>
                    <li>• Préférences de personnalisation</li>
                    <li>• Historique des modifications</li>
                  </ul>
                </div>
              </section>

              {/* Data Usage */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">3. Utilisation des données</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Nous utilisons vos données personnelles pour les finalités suivantes :
                  </p>
                  <ul className="text-gray-300 space-y-3">
                    <li>• <strong>Fourniture du service :</strong> Créer et gérer vos sites web</li>
                    <li>• <strong>Support client :</strong> Répondre à vos demandes d'assistance</li>
                    <li>• <strong>Facturation :</strong> Traiter les paiements et émettre des factures</li>
                    <li>• <strong>Amélioration :</strong> Analyser l'utilisation pour améliorer nos services</li>
                    <li>• <strong>Sécurité :</strong> Détecter et prévenir les fraudes et abus</li>
                    <li>• <strong>Communication :</strong> Vous informer des mises à jour importantes</li>
                  </ul>
                </div>
              </section>

              {/* Data Sharing */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">4. Partage des données</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, 
                    sauf dans les cas suivants :
                  </p>
                  <ul className="text-gray-300 space-y-3">
                    <li>• <strong>Prestataires de services :</strong> Stripe (paiements), Supabase (base de données), OVH (hébergement)</li>
                    <li>• <strong>Obligations légales :</strong> Si requis par la loi ou une autorité compétente</li>
                    <li>• <strong>Protection de nos droits :</strong> Pour défendre nos droits légitimes</li>
                    <li>• <strong>Avec votre consentement :</strong> Dans des cas spécifiques avec votre accord explicite</li>
                  </ul>
                </div>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">5. Sécurité des données</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Nous mettons en place des mesures de sécurité appropriées pour protéger vos données :
                  </p>
                  <ul className="text-gray-300 space-y-3">
                    <li>• <strong>Chiffrement :</strong> Toutes les données sont chiffrées en transit et au repos</li>
                    <li>• <strong>Accès restreint :</strong> Seul le personnel autorisé peut accéder aux données</li>
                    <li>• <strong>Surveillance :</strong> Monitoring 24/7 de nos systèmes</li>
                    <li>• <strong>Sauvegardes :</strong> Sauvegardes régulières et sécurisées</li>
                    <li>• <strong>Formation :</strong> Notre équipe est formée à la protection des données</li>
                  </ul>
                </div>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">6. Conservation des données</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités pour lesquelles 
                    elles ont été collectées :
                  </p>
                  <ul className="text-gray-300 space-y-3">
                    <li>• <strong>Données de compte :</strong> Pendant la durée de votre compte + 3 ans</li>
                    <li>• <strong>Données de facturation :</strong> 10 ans (obligation légale)</li>
                    <li>• <strong>Logs de connexion :</strong> 12 mois</li>
                    <li>• <strong>Données de support :</strong> 3 ans après la résolution</li>
                  </ul>
                </div>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">7. Vos droits</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Conformément au RGPD, vous disposez des droits suivants :
                  </p>
                  <ul className="text-gray-300 space-y-3">
                    <li>• <strong>Droit d'accès :</strong> Consulter vos données personnelles</li>
                    <li>• <strong>Droit de rectification :</strong> Corriger des données inexactes</li>
                    <li>• <strong>Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                    <li>• <strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                    <li>• <strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                    <li>• <strong>Droit de limitation :</strong> Limiter le traitement de vos données</li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    Pour exercer ces droits, contactez-nous à <a href="mailto:contact@klyx.fr" className="text-primary-400 hover:text-primary-300">contact@klyx.fr</a>
                  </p>
                </div>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">8. Cookies</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Nous utilisons des cookies pour améliorer votre expérience sur notre site :
                  </p>
                  <ul className="text-gray-300 space-y-3">
                    <li>• <strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
                    <li>• <strong>Cookies de performance :</strong> Analyser l'utilisation du site</li>
                    <li>• <strong>Cookies de fonctionnalité :</strong> Mémoriser vos préférences</li>
                    <li>• <strong>Cookies de marketing :</strong> Personnaliser les publicités (avec votre consentement)</li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
                  </p>
                </div>
              </section>

              {/* International Transfers */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">9. Transferts internationaux</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed">
                    Vos données sont principalement stockées en France. En cas de transfert vers des pays tiers, 
                    nous nous assurons que des garanties appropriées sont en place, conformément au RGPD.
                  </p>
                </div>
              </section>

              {/* Children */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">10. Protection des mineurs</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed">
                    Notre service n'est pas destiné aux enfants de moins de 16 ans. Nous ne collectons pas 
                    sciemment de données personnelles auprès d'enfants. Si vous êtes parent et pensez que votre 
                    enfant nous a fourni des données, contactez-nous immédiatement.
                  </p>
                </div>
              </section>

              {/* Changes */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">11. Modifications de cette politique</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed">
                    Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. 
                    Nous vous informerons de tout changement important par email ou via une notification 
                    sur notre site. Nous vous encourageons à consulter régulièrement cette page.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">12. Contact</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Pour toute question concernant cette politique de confidentialité ou la protection de vos données :
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Klyx Studio</h3>
                      <p className="text-gray-300 mb-2">30 Cours Henri Brunet</p>
                      <p className="text-gray-300 mb-2">33000 Bordeaux, France</p>
                      <p className="text-gray-300 mb-2">Email : <a href="mailto:contact@klyx.fr" className="text-primary-400 hover:text-primary-300">contact@klyx.fr</a></p>
                      <p className="text-gray-300">Tél : <a href="tel:+33783972360" className="text-primary-400 hover:text-primary-300">07 83 97 23 60</a></p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Délégué à la protection des données</h3>
                      <p className="text-gray-300 mb-2">Email : <a href="mailto:contact@klyx.fr" className="text-primary-400 hover:text-primary-300">contact@klyx.fr</a></p>
                      <p className="text-gray-300">Tél : <a href="tel:+33783972360" className="text-primary-400 hover:text-primary-300">07 83 97 23 60</a></p>
                    </div>
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