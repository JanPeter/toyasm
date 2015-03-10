module.exports = {
  assemble: function (file) {
    if(file && file.endsWith('.asm'))
    {
      if(file.indexOf('.//') == 0)
        file = file.substr(3, file.length - 3);

      var toy = require('./build/Release/toyasm');
      toy.create(file);
    }
  }
};
