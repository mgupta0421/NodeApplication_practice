var http = require('http');

// Options to be used by request 
var options = {
   port: '4000',
   path: '/test.html'  
};

// Callback function is used to deal with response
var callback = function(response) {
   // Continuously update stream with data
   var body = '';
   response.on('data', function(value) {
      body += value;
   });
   
   response.on('end', function() {
      // Data received completely.
      console.log(body);
   })
}
// Make a request to the server
var req = http.request(options, callback);
req.end();