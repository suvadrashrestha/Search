/** @type {import('next').NextConfig} */
const nextConfig = {
    // to add external images in Image of next/image;
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'buffer.com'
            },
            {
                protocol:'https',
                hostname:'cdn.pixabay.com'
            }
        ]
    }
}

export default nextConfig;
