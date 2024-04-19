const crypto = require('crypto');
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = (algorithm) =>
    crypto_orig_createHash(algorithm == 'md5' ? 'sha256' : algorithm);

const basePath = '/app';

/** @type {import('next').NextConfig} */
module.exports = {
    basePath,
    transpilePackages: ['@repo/shared-ui'],
    output: 'standalone',
    experimental: {
        instrumentationHook: true,
    },
    env: {
        BASE_PATH: basePath
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.ignoreWarnings = [{ module: /opentelemetry/ }];
        }

        config.ignoreWarnings = [{ module: /opentelemetry/ }];
        return config;
    },
    redirects: () => {
        return [
            {
                source: '/auth/login',
                permanent: false,
                destination: `${process.env.NEXTAUTH_URL}/auth/login`,
            },
        ];
    },
    images: {
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
};
