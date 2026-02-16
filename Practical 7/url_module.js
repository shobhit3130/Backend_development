const url = require('url');
const myURL = new URL("https://example.com:8080/path/name");

console.log("Host:", myURL.host);
console.log("Hostname:", myURL.hostname);
console.log("Port:", myURL.port);
console.log("Pathname:", myURL.pathname);
