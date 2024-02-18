import packageConfig  from "./package.json" assert { type: 'json' };

/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        version: packageConfig.version,
    },
};

export default nextConfig;
