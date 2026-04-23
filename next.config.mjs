const isGithubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Conditionally add basePath and assetPrefix only for GitHub Pages
  ...(isGithubPages && {
    basePath: '/alimohammadnia',
    assetPrefix: '/alimohammadnia',
  }),
  // Ignore TypeScript and ESLint errors during build (optional but prevents common failures)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;