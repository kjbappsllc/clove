const path = require('path');

module.exports = {
    entry: ["./test/setup.js", "./test/run.js"],
    output: {
        path: path.resolve(__dirname, 'test'),
        filename: 'test-bundle.js',
    },
    resolve: {
        alias: {
            'https://unpkg.com/chai@4.1.2/chai.js': 'chai/chai.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: require.resolve('chai/chai.js'),
                use: 'script-loader'
            }
        ]
    },
  };