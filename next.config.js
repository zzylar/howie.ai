/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/chat',
            destination: '/',
            permanent: true, 
          },
        ];
      },
}

module.exports = nextConfig
