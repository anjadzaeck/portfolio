import path from 'path'
import { fileURLToPath } from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { readFileSync } from 'fs'

const packageJsonFile = readFileSync('./package.json')
const packageJson = JSON.parse(packageJsonFile)

const __dirname = path.dirname(
  fileURLToPath(import.meta.url) // get the resolved path to the file
) // return the name of the directory

const plugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: 'public/index.html'
  }),
  new CopyWebpackPlugin({
    patterns: [{ from: 'public/style.css', to: 'style.css' }]
  })
]

export default {
  entry: './index.tsx',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: [/node_modules/, /\.d\.ts$/]
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]' // keeps original name
        }
      },
      {
        test: /\.pdf$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]'
        }
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]'
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        default: {
          minChunks: 2
        },
        styles: {
          test: /\.(css|sass|scss)$/,
          name: 'styles',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  },
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js',
    publicPath: '/portfolio/',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devtool: 'source-map',
  plugins,
  devServer: {
    open: false,
    server: 'https',
    historyApiFallback: true,
    allowedHosts: 'all'
  }
}
