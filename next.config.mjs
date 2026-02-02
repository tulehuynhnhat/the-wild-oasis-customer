/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL('https://jezelqixotlsigejliyn.supabase.co/storage/v1/object/public/cabin-images/**'),
    ],
    // unoptimized: true,
  },
  // output: 'export',
};

export default nextConfig;
