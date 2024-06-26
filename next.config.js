/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    ppr: 'incremental',
  },
     images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/my-bucket/**',
      },
    ],
  },
};

module.exports = nextConfig;
