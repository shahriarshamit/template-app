const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve("docs"),
        publicPath: "/",
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         "style-loader",
            //         "css-loader",
            //         "sass-loader"
            //     ],
            // },
        ],
    },
    externals: [nodeExternals()], 
    plugins: [
        new HTMLWebpackPlugin({
            template: "index.html"
        }),
    ]
}