/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/it/chi-sono",
          destination: "/it/about",
        },
        {
          source: "/it/contatti",
          destination: "/it/contact",
        },
        {
          source: "/it/progetti",
          destination: "/it/projects",
        },
        {
          source: "/it/progetti/:slug",
          destination: "/it/projects/:slug",
        },
      ],
    };
  },
};

export default nextConfig;
