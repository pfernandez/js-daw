const path = require('path'),
  glob = require( 'glob' ),
  fs = require('fs'),
  Ractive = require('ractive');

module.exports = {
  
  directory: path.join(process.cwd(), 'components'),
  
  list: function(callback) {
    glob(path.join(this.directory, '**', '*.js'), 
      function(err, files) {
        if(err) throw err;
        callback(files);
      }
    );
  },
  
  loadRactiveAsync: function(component) {
    var templatePath = path.resolve(this.directory, component.template);
    fs.readFile(templatePath,'utf8', function(err, data) {
      if(err) throw err;
      component.template = data;
      new Ractive(component);
    });
  },
};
