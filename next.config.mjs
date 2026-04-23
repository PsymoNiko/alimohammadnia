const isGithubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? '/alimohammadnia' : '',
  assetPrefix: isGithubPages ? '/alimohammadnia' : '',
  // Optional: Ignore build errors if TypeScript/ESLint are problematic
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;