/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'celsosalazar.com'
            }
        ]
    }
};

export default nextConfig;
