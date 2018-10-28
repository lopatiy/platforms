const path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./dist/assets"),
        compress: true,
        port: 12000,
        stats: 'errors-only',
        open: true
    },
};