/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    NO_INDEX: process.env.NO_INDEX,
    PUBLICATION_STATE: process.env.PUBLICATION_STATE,
    RECHAPTCHA_SITE_KEY: process.env.RECHAPTCHA_SITE_KEY,
    BACKEND_API: process.env.BACKEND_API,
  },
  images: {
    domains: [
      "geminisolutions-assets-dev-devathon.s3.ap-south-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
