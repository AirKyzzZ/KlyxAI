import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="keywords" content="Klyx IA, Klyx AI, création site IA, intelligence artificielle, développement web, générateur site web, site web professionnel, TPE PME, indépendants, agences, hébergement web, design web, SEO, optimisation web" />
        <meta name="author" content="Klyx.fr" />
        <meta name="language" content="fr" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="France" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Klyx AI" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content="https://ai.klyx.fr/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Klyx AI - Création de sites web professionnels avec l'IA" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@klyx_fr" />
        <meta name="twitter:creator" content="@klyx_fr" />
        <meta name="twitter:image" content="https://ai.klyx.fr/images/twitter-card.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Klyx AI",
              "alternateName": "Klyx IA",
              "description": "Créez votre site web professionnel en 30 secondes grâce à l'IA. Solution française pour TPE/PME, indépendants et agences.",
              "url": "https://ai.klyx.fr",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://ai.klyx.fr/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Klyx.fr",
                "url": "https://klyx.fr",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://ai.klyx.fr/images/logo.png"
                },
                "sameAs": [
                  "https://twitter.com/klyx_fr",
                  "https://linkedin.com/company/klyx-fr"
                ]
              },
              "mainEntity": {
                "@type": "SoftwareApplication",
                "name": "Klyx AI - Générateur de sites web",
                "description": "Générateur de sites web professionnels alimenté par l'intelligence artificielle",
                "applicationCategory": "WebApplication",
                "operatingSystem": "Web",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "EUR",
                  "availability": "https://schema.org/InStock"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "ratingCount": "127"
                }
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 