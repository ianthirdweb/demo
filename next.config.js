/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "6f4b9d28993ca599e4fc109a86ffae22.ipfscdn.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "web-of-truth.s3.amazonaws.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
