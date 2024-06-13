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
            {
                protocol: 'https',
                hostname: 'f.i.uol.com.br',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'us-tuna-sounds-images.voicemod.net',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'pbs.twimg.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'thumbnailer.mixcloud.com',
                pathname: '/**',
            },
        ],
    }
};

export default nextConfig;