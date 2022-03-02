const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const rulesForStyles = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const rulesForJavaScript = {
  test: /\.m?js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        [
          '@babel/preset-react',
          {
            runtime: 'automatic', // default 'classic'
          },
        ],
      ],
    },
  },
};

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === 'production';

  return {
    entry: './src/index.js',
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build'),
    },
    plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
    module: {
      rules: [rulesForJavaScript, rulesForStyles],
    },
    devServer: {
      open: true,
      port: 3000,
    },
  };
};
