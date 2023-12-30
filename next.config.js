/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["picsum.photos"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
