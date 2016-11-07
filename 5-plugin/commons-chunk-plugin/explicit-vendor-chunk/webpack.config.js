var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/index.js'),
        vendor: [
            'react'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.[hash].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",

            filename: "vendor.[hash].js",
            // (Give the chunk a different name)

            minChunks: Infinity
            // (with more entries, this ensures that no other module
            //  goes into the vendor chunk)
        })

    ]
}
