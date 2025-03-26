let userConfig = undefined;
try {
  userConfig = await import('./v0-user-next.config');
} catch (e) {
  // Ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  output: 'export', // Enables static export
  distDir: 'dist',  // Outputs to 'dist' instead of 'out'
  // Workaround: Log warning instead of failing for missing generateStaticParams
  onDemandEntries: {
    // This won't fully bypass the error but can help with dev feedback
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Custom webpack config to suppress punycode warning
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      punycode: false, // Suppress punycode usage
    };
    return config;
  },
};

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return nextConfig;
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      };
    } else {
      nextConfig[key] = userConfig[key];
    }
  }
  return nextConfig;
}

export default mergeConfig(nextConfig, userConfig);