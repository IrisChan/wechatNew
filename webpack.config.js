module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: ['react-hot-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader', options: { cacheDirectory: true} }]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['eslint-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 8484
    }
};