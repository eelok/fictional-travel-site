var path = require('path');


module.exports = {
   entry: __dirname + "/app/assets/scripts/App.js",
   output: {
   path: __dirname + "/app/temp/scripts",
   filename: "App.js"
 },
 module: {
   loaders: [
     {
       loader: 'babel-loader',
       query: {
         presets: ['es2015']
       },
       test: /\.js$/,
       exclude: /node_modules/
     }
   ]
 }
}
