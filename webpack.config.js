const { resolve } = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const Dotenv = require("dotenv-webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const styleLintPlugin = require("stylelint-webpack-plugin");

require("es6-promise").polyfill();

module.exports = {
    entry: "./src/index.js",

    context: resolve(__dirname),

    output: {
        path: __dirname,
        filename: "dist/strongline-ui.js"
    },

    plugins: [
        new Dotenv({
            path: "./.env",
            safe: true,
            systemvars: true
        }),

        // Specify the resulting CSS filename
        new ExtractTextPlugin("dist/strongline-ui.css"),

        // Stylelint plugin
        new styleLintPlugin({
            configFile: ".stylelintrc",
            context: "",
            files: "**/*.scss",
            syntax: "scss",
            failOnError: true,
            quiet: false
        })
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("css-loader!sass-loader?outputStyle=expanded")
            }
        ]
    },

    resolve: {
        modules: [resolve("./src"), "node_modules"]
    },

    stats: {
        // Colored output
        colors: true
    },

    // Create Sourcemaps for the bundle
    devtool: "source-map"
};
