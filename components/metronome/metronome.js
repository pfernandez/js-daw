const components = require('./utils/components.js');

var metronome = {
  el: '#container',
  template: 'metronome/metronome.html',
  data: { datetime: new Date() }
};

components.loadRactiveAsync(metronome);
