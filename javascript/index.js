const { Server } = require("./adapters/server");
const { router } = require("./presenter/routes");

const server = new Server();

server.use(router);

server.listen(8000, () => {
  console.log("Server is running...");
});
