/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['dafcsignature.web.app', 'localhost', 'www.dafc.com.vn', 'dafc-cms.styleoutlet.vn'],
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  env: {
    API_URL: process.env.API_URL,
  },
  reactStrictMode: false
}

module.exports = nextConfig
