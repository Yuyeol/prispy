/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.utoimage.com",
      },
    ],
  },
};

export default nextConfig;
