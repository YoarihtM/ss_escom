const HtmlWebPack = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: '/styles.css$/',
                
            }
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebPack({
            title: 'Pruebas',
            // filename: 'index.html',
            template: './src/index.html'
        })
    ],
};