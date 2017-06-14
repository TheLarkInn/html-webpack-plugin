var fs = require("fs");
var path = require("path");
var HtmlWebpackPlugin = require('../..');
var MultipageWebpackPlugin = require("multipage-webpack-plugin");

var getEntries = function() {
  var entryObject = {};
  fs.readdirSync(path.resolve(__dirname, "./"))
    .filter(function(fileName){
      return fileName.startsWith("a.");
    })
    .forEach(function(fileName){
      entryObject[fileName.replace(/\./g,"")] = path.join(__dirname, fileName);
    })

  return entryObject;
}

module.exports = {
  entry: getEntries(),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].chunk.js"
  },
  plugins: [
    new MultipageWebpackPlugin()
  ]
}
