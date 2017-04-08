//const path = require('path');

var config = {

  entry: "./app/assets/scripts/App.js",
  output: {
    // path: path.resolve(__dirname, 'build'),
    path: "./app/temp/scripts",
    filename: "bundle.js"
  },
  performance: {
    hints: false
  }

};


module.exports = config;
