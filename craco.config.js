const CracoLessPlugin = require("craco-less");
const colors = require("./src/config/colors");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": colors.primary },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};
