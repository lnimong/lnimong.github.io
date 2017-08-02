var path = require("path");

var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    entry:[

        
        path.join(__dirname,'es6src','app.js')
    ],

    debug: true,

    devtool: 'source-map',

    output: {

        path:  path.resolve(__dirname, "public"),

        filename: 'bundle.js',

        publicPath : 'http://localhost:8080/public'
    },

    module: {   

         loaders: [{

                test: /\.less$/,
                
                loader : ExtractTextPlugin.extract('css!less')
            }, {

                test: /\.scss$/,
                
                loaders : ["style", "css", "sass"]
            }, {

                test: /\.js$/,

                exclude: /node_modules/,

                loaders: ['react-hot-loader/webpack', 'babel']
            },   
        ]
     },

  resolve: {
    extensions: ['', '.less', '.scss', '.js', '.json']
  },

     plugins: [
     

         new ExtractTextPlugin("style.css")
     ],

}