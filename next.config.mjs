/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only add basePath/assetPrefix when building for GitHub Pages
  basePath: isGithubPages ? '/alimohammadnia' : '',
  assetPrefix: isGithubPages ? '/alimohammadnia' : '',
};

export default nextConfig;