const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');
const path = require('path');

module.exports = {
  publicRuntimeConfig: {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
      ? process.env.LOCALE_SUBPATHS
      : 'none',
  },
  webpack(config) {
    // Unshift polyfills in main entrypoint.
    const originalEntry = config.entry;
    // eslint-disable-next-line no-param-reassign
    config.entry = async () => {
      const entries = await originalEntry();
      if (
        entries['main.js'] &&
        !entries['main.js'].includes(path.join(__dirname, 'utils/polyfills.js'))
      ) {
        entries['main.js'].unshift(path.join(__dirname, 'utils/polyfills.js'));
      }

      return entries;
    };

    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    return config;
  },
  
};
