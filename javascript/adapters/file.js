const fs = require("fs/promises");

async function read(relative_path) {
  return fs.readFile(relative_path, "utf-8");
}

async function readSync(relative_path) {
  throw new Error("Not implemented");
}

module.exports = {
  read,
  readSync,
};
