import path from 'path';
import webpack from 'webpack';

export default () => ({
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './examples/index.js'
    // the entry point of our app
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: path.resolve(__dirname, 'dist'),
    // match the output path

    publicPath: '/',
    // match the output `publicPath`

    stats: 'minimal'
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

  plugins: [new webpack.HotModuleReplacementPlugin()],
  optimization: {
    namedModules: true
  }
});
