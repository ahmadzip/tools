/** @type {import('next').NextConfig} */
const nextConfig = {
     experimental: {
            serverActions: true,
          },
    images: {
        domains: ['p16-sign.tiktokcdn-us.com'],
    },
}

module.exports = nextConfig
