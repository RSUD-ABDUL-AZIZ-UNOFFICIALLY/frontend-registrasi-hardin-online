/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    env: {
        base_url: process.env.base_url,
        api_url: process.env.api_url,
    },
}

module.exports = nextConfig