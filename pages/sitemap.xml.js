const Sitemap = () => {
  return null
}

export const getServerSideProps = async ({ res }) => {
  const baseUrl = 'https://ai.klyx.fr'
  
  const pages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/builder', priority: '0.9', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog', priority: '0.9', changefreq: 'daily' },
    { url: '/docs', priority: '0.7', changefreq: 'monthly' },
    { url: '/help', priority: '0.7', changefreq: 'monthly' },
    { url: '/guide', priority: '0.8', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
    { url: '/terms', priority: '0.5', changefreq: 'yearly' },
    { url: '/cookies', priority: '0.5', changefreq: 'yearly' },
    { url: '/rgpd', priority: '0.5', changefreq: 'yearly' },
    { url: '/status', priority: '0.6', changefreq: 'weekly' }
  ]

  const blogArticles = [
    { slug: 'ia-revolution-creation-sites-web-2025', priority: '0.8' },
    { slug: 'top-10-outils-ia-seo-2025', priority: '0.8' },
    { slug: 'creer-site-ecommerce-ia-2025', priority: '0.8' },
    { slug: 'tendances-design-web-2025-ia', priority: '0.8' },
    { slug: 'securite-web-ia-menaces-modernes-2025', priority: '0.8' },
    { slug: 'performance-web-ia-optimisation-vitesse-2025', priority: '0.8' },
    { slug: 'klyx-ia-creation-site-web-intelligence-artificielle', priority: '0.9' },
    { slug: 'generateur-site-web-ia-francais', priority: '0.9' },
    { slug: 'creation-site-web-professionnel-ia', priority: '0.9' }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
  ${blogArticles.map(article => `
  <url>
    <loc>${baseUrl}/blog/${article.slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${article.priority}</priority>
  </url>`).join('')}
</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default Sitemap 