var http = require("http");
var fs = require("fs");

var myhttp = http.createServer(function (request, response) {
  const responseData = {
    native_ads: ["www.google.com"],
    box_ads: ["<all_urls>"],
  };

  const jsonContent = JSON.stringify(responseData);
  response.end(jsonContent);
  var body;
  request.on("data", function (chunk) {
    body += chunk;
  });

  request.on("end", function () {
    fs.appendFile("log.txt", body, function (err) {
      if (err) {
        // append failed
      } else {
        // done
      }
    });
  });
});

myhttp.listen(3000);

console.log("we listen to http://127.0.0.1:3000/");
