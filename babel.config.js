module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@componentes": "./src/componentes",
            "@pages": "./src/pages",
            "@store": "./src/store",
            "@hooks": "./src/hooks",
            "@model": "./src/model",
            "@core": "./src/core",
            "@": "./src"
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}