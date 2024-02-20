/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['dafcsignature.web.app'],
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
}

module.exports = nextConfig
