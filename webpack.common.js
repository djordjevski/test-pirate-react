const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        index: "./index.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "templates/myIndex.ejs",
            title: "Holiday Pirates:: Hotel search",
            favicon: 'favicon.ico',
            appMountId: "AppHost"
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader"},
                    { loader: "css-loader"},
                    { loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ] // rules
    } // module
}