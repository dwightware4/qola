import type { NextConfig } from 'next'

const config: NextConfig = {
  transpilePackages: ['@t3-oss/env-nextjs', '@t3-oss/env-core'],
  experimental: {
    optimizePackageImports: ['@mantine/core'],
  },
  devIndicators: false,
}

export default config
