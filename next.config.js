module.exports = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: process.env.CONTENTFUL_ASSETS_URL },
    ],
  },
};
