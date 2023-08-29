const http = require("http");

class Server {
  constructor() {
    this.middlewares = [];
  }

  use(middleware) {
    this.middlewares.push(middleware);
  }

  listen(port, callback) {
    const server = http.createServer((req, res) => {
      this.middlewares.forEach((middleware) => {
        middleware.build(req, res);
      });
    });

    server.listen(port, callback);
  }
}

module.exports = { Server };
