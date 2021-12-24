module.exports = {
  reactStrictMode: true,
}
module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,

    webpack: (config) => {
      config.resolve = {
        ...config.resolve,
        fallback: {
          "fs": false,
          "path": false,
          "os": false,
        }
      }
      return config
    },
  }
}
module.exports= {
  images: {
    domains:["https://res.cloudinary.com"],
    loader: 'cloudinary',
    path: '<cloudinary-path-here>'
  },
}
