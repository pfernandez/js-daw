const components = require('./components/components.js');

var ractiveTest = {
  el: '#container',
  template: 'test/test.html',
	data: { datetime: new Date() }
};

components.list (function (files) { console.log (files); });
components.loadRactiveAsync(ractiveTest);
