require("dotenv").config();
const { createServer } = require("http");
const app = require("./APIs/app");

const { PORT } = process.env || 8080;
createServer(app).listen(PORT, () => {
   console.log(
      `server has started on port ${PORT}: http://127.0.0.1:${PORT}/api/user`
         .yellow
   );
});
