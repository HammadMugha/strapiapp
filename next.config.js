/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost"
            }
        ],
        minimumCacheTTL:150000,
    }
}

module.exports = nextConfig

