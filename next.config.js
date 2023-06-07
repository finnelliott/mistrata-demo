/** @type {import('next').NextConfig} */
// next.config.js
const path = require('path');
const { withPayload } = require('@payloadcms/next-payload');

module.exports = withPayload({
  // your Next config here
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
      {
        protocol: 'https',
        hostname: 'ams3.digitaloceanspaces.com',
      }
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
}, {
  // The second argument to `withPayload` 
  // allows you to specify paths to your Payload dependencies.
  
  // Point to your Payload config (Required)
  configPath: path.resolve(__dirname, './payload/payload.config.ts'),
  
  // Point to your exported, initialized Payload instance (optional, default shown below`)
  payloadPath: path.resolve(process.cwd(), './payload/payloadClient.ts'),
});
