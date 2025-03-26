// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "pumex-website-prod-bucket.s3.us-east-1.amazonaws.com",
//         pathname: "/companyImages/**",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pumex-website-prod-bucket.s3.us-east-1.amazonaws.com",
        pathname: "/companyImages/**",
      },
      {
        protocol: "https",
        hostname: "d2l4gl47o0xxs9.cloudfront.net",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
