@type {import('next').NextConfig}
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rm-s3-image.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/**",
      }
    ]
  }
};

export default nextConfig;
