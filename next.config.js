/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MY_MICROSERVICE_URL: process.env.MY_MICROSERVICE_URL,
    WEB_URL: process.env.WEB_URL,
  },
};

module.exports = nextConfig;
