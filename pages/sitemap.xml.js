const Sitemap = () => {
  return null
}

export const getServerSideProps = async ({ res }) => {
  const baseUrl = 'https://klyx.ai'
  
  const pages = [
    '',
    '/blog',
    '/builder',
    '/dashboard',
    '/docs',
    '/help',
    '/login',
    '/privacy',
    '/terms',
    '/cookies',
    '/rgpd',
    '/status',
    '/api'
  ]

  const blogArticles = [
    'ia-revolution-creation-sites-web-2025',
    'top-10-outils-ia-seo-2025',
    'creer-site-ecommerce-ia-2025',
    'tendances-design-web-2025-ia',
    'securite-web-ia-menaces-modernes-2025',
    'performance-web-ia-optimisation-vitesse-2025'
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === '/blog' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : page === '/blog' ? '0.9' : '0.8'}</priority>
  </url>`).join('')}
  ${blogArticles.map(article => `
  <url>
    <loc>${baseUrl}/blog/${article}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
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