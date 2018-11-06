import path from 'path';
import webpack from 'webpack'; //eslint-disable-line
import CleanWebpackPlugin from 'clean-webpack-plugin';

export default () => ({
  mode: 'production',
  entry: {
    index: path.join(__dirname, './index.js')
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,

        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      },
      {
        test: /\.(scss)$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },

  plugins: [
    // Clean dist folder
    new CleanWebpackPlugin(['./dist/build.js'])
  ]
});
