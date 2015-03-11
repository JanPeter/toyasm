module.exports = {
  assemble: function (file) {
    var toy = require('./build/Release/toyasm');
    toy.create(file);
  }
};
