const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    "entry": "./src/index.jsx",
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },  
            {  
            test: /\.svg$/,
            use: ["@svgr/webpack"]   
            },     
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}