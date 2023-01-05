/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compress: true,
  images: {
    minimumCacheTTL: 60,
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
