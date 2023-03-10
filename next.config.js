/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'resources.newhomesourceprofessional.com',
        port: '',
        pathname: '/globalresources/**',
      },
    ],
  }
}

module.exports = nextConfig
