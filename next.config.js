/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: './_static',
  experimental: {
    appDir: true,
  },
  compress: true,
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 365,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.mistrata.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000'
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
        {
            source: '/robots.txt',
            destination: '/api/robots'
        },
        {
          source: '/sitemap.xml',
          destination: '/api/sitemap'
      }
    ];
  }
}

module.exports = nextConfig
