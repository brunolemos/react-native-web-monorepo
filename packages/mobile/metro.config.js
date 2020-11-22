/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')

module.exports = {
  watchFolders: [path.resolve(__dirname, '../../')],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
}
