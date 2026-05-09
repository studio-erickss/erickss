/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Serve image URLs as-is and bypass Next/Vercel optimizer cache writes.
        unoptimized: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*',
            port: '',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
