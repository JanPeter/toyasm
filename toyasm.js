module.exports = {
  assemble: function (file) {
    alert(file);
    var toy = require('./build/Release/toyasm');
    toy.create(file);
  }
};
