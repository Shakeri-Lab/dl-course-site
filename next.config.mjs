/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/dl-course-site' : '',
  assetPrefix: isProd ? '/dl-course-site/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/dl-course-site' : '',
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
