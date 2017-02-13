
module.exports = {

  get: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        callback(request.responseText);
      } else {
        console.log('Error ' + request.status + ': ' + request.responseText);
      }
    };
    
    request.send();
  },
  
  post: function(url) {
    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(data);
  },

};
