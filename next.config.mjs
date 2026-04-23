/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // Enables static HTML export (required for GitHub Pages)
  images: {
    unoptimized: true,     // Already correct – keep it
  },
  typescript: {
    ignoreBuildErrors: true, // Already correct – keep if you want to ignore TS errors
  },
  // If you use a custom domain (alimohammadnia.dev), you don't need basePath.
  // If you want the site to also work at psymoniko.github.io/alimohammadnia, add:
  basePath: '/alimohammadnia',
  assetPrefix: '/alimohammadnia/',
  // But with a custom domain, leave them commented or remove them.
  trailingSlash: true,     // Optional but helps with relative links on static hosts
};

export default nextConfig;