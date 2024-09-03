// next.config.mjs
/** @type {import('next').NextConfig} */
 
const nextConfig = {
    reactStrictMode: true,
    images: {
      
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'utfs.io'
      },
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
        },
      ],
    },
  };
  
  export default nextConfig;
  