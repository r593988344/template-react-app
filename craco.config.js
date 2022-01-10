/** @format */

const { whenProd } = require('@craco/craco');
const CracoLessPlugin = require('craco-less');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  webpack: {
    plugins: [...whenProd(() => [new BundleAnalyzerPlugin()], [])],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
        modifyLessRule: function (lessRule, _context) {
          lessRule.test = /\.less$/;
          lessRule.exclude = /\.module\.less$/;
          return lessRule;
        },
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
        modifyLessRule: function (lessRule, _context) {
          lessRule.test = /\.module\.less$/;
          lessRule.exclude = undefined;
          return lessRule;
        },
        cssLoaderOptions: {
          modules: { localIdentName: '[local]_[hash:base64:5]' },
        },
      },
    },
  ],
};
