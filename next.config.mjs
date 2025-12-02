/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Add your WordPress domain(s) here
    // Example: domains: ['your-wordpress-site.com', 'cdn.your-site.com']
    domains: []
  },
};

export default nextConfig;



