const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const rulesForStyles = {
  test: /\.css$/i,
  include: path.resolve(__dirname, 'src'),
  use: ['style-loader', 'css-loader', 'postcss-loader'],
};

const rulesForJavaScript = {
  test: /\.(js|jsx)$/,
  include: path.resolve(__dirname, 'src'),
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
    entry: './src/index.jsx',
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build'),
    },
    resolve: {
      extensions: ['.js', '.jsx'],
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
