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
    domains:["https://charles-cantin-administration.herokuapp.com/global"],
  },
}
