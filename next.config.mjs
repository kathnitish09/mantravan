/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning instead of failing build on unused vars
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
