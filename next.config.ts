const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // This will disable ESLint during the build
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
