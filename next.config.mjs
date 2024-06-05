/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 't3.ftcdn.net',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'rockntech.com.br',
                pathname: '/**',
            },
        ],
    }
};

export default nextConfig;