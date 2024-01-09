// Create web server
// const http = require('http');
const express = require('express');
const app = express();
const port = 3000;

// Create server
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.end('Hello World');
// });

// server.listen(port, () => {
//   console.log(`Server running at port ${port}`);
// });

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});