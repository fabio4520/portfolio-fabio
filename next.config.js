/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'abrudz.github.io',
      'www.logo.wine',
      'seeklogo.com',
      'git-scm.com',
      'cdn4.iconfinder.com',
      'upload.wikimedia.org',
      'cdn-icons-png.flaticon.com'
    ]
  }
}

module.exports = nextConfig
