/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  devIndicators: {

    buildActivity:false,
    buildActivityPosition: 'bottom-right',
    background: true,     // バックグラウンドのタスクを表示
    clearConsole: true
  },
};

module.exports = nextConfig;
