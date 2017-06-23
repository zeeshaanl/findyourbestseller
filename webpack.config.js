const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = [
    new HtmlWebpackPlugin({
        title: 'Find Your Bestseller',
        inject: 'body',
        template: './src/index.html',
    }),
    new ExtractTextPlugin({
        filename: 'bundle.css',
        disable: true,
        fallback: "style-loader"
    })
];

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: plugins,
    module: {
        rules: [
            {
                test: [/\.js$/, /\.jsx$/],
                exclude: [/node_modules/],
                loader: 'babel-loader'
            },
            {
                test: [/\.scss$/],
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader"
                        }, {
                            loader: "sass-loader"
                        }
                    ],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    }
};
