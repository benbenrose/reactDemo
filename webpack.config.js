/**
 * Created by lily 2016/11/11
 */
var path = require('path');

module.exports = {
    entry: {
        bundle: './app/main.js'
      /*  btn: ['./app/index.js']*//*分别打包*/
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(png|jpg|gif|ico|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=1204&name=[path][name].[ext]'
            }, {
                test: /\.scss/,
                loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version", "firefox 15"]}!sass-loader?outputStyle=expanded'
            },
            {
                test: /\.css$/,
                loader: 'style!css'//感叹号的作用在于使同一文件能够使用不同类型的loader
            }
            , {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
}