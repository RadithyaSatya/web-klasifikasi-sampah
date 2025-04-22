/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/model/:path*',
          destination: 'https://web-production-c8bf2.up.railway.app/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;
  