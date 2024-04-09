/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();
const nextConfig = {
  reactStrictMode: true
};

module.exports = withNextIntl(nextConfig);
