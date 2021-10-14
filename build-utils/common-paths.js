const path = require("path");
const PROJECT_ROOT = path.resolve(__dirname, "../");

module.exports = {
  projectRoot: PROJECT_ROOT,
  publicPath: path.join(PROJECT_ROOT, "public"),
  outputPath: path.join(PROJECT_ROOT, "dist"),
  appEntry: path.join(PROJECT_ROOT, "src"),
  htmlPath: path.join(PROJECT_ROOT, "index.html"),
};
