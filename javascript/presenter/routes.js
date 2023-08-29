const { read } = require("../adapters/file");
const { Router } = require("../adapters/router");
const fs = require("fs");

const router = new Router();

router.get("/", async (req, res) => {
  const file = await read(__dirname + "/views/index.html");

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(file);
});

router.post("/upload", async (req, res) => {
  const filepath = __dirname + "/uploads/" + req.headers["file-name"];

  const writeStream = fs.createWriteStream(filepath, { flags: "a" });

  req.on("data", (chunk) => {
    writeStream.write(chunk);
  });

  req.on("end", () => {
    writeStream.end();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "File uploaded successfully" }));
  });
});

module.exports = { router };
