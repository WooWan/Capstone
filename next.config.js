const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sgfbjtwrqhjzbyuhnknq.supabase.co'
      }
    ]
  }
};

module.exports = withBundleAnalyzer(nextConfig);
