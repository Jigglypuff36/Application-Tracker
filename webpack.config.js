const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const e = require('express');

module.exports = {
    entry: './client/index.tsx',
    mode: process.env.NODE_ENV,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    //
    devServer: {
        proxy: {
          '/': 'http://localhost:3000',
          '/api/**': 'http://localhost:3000'
        },
        compress: true,
        port: 8080,
        historyApiFallback: true
      },
    //
    // devServer: {
    //     host: 'localhost',
    //     historyApiFallback: true,
    //     proxy: {
    //         '/': {
    //             target: 'http//localhost:8080',
    //             router: () => 'http//localhost:3000',
    //         },
    //         '/api': {
    //             target: 'http//localhost:8080',
    //             router: () => 'http//localhost:3000',
    //         }
    //     },
    // },
    plugins: [new HtmlWebpackPlugin({
        template: './client/index.html',
        filename: 'index.html'
    }),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,  
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                exclude: /node_modules/,
            },
            {
                test: /\.png|svg|jpg|gif$/,
                use: ['file-loader'],
              },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.tx', '.js', '.jsx', '.css'],
    },
}
