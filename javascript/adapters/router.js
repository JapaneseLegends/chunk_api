class Router {
  constructor() {
    this.routes = [];
  }

  get(path, callback) {
    const method = "GET";
    this.routes.push({ path, method, callback });
  }

  post(path, callback) {
    const method = "POST";
    this.routes.push({ path, method, callback });
  }

  build(req, res) {
    const { url, method } = req;

    const route = this.routes.find((route) => {
      return route.path === url && route.method === method;
    });

    if (!route) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("Not found");
      return;
    }

    route.callback(req, res);
  }
}

module.exports = { Router };
