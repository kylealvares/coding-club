import nextra from 'nextra'

const isProd = process.env.NODE_ENV === 'production'
const repoName = 'coding-club'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  copy: true,
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : ''
}

const withNextra = nextra({
  // ...other Nextra config
})

export default withNextra(nextConfig)
