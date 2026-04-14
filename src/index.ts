import { ServerConfig } from "./config";
import  pingRouter  from "./router/router";
const express = require("express");

const app = express();

app.use(pingRouter)

app.listen(ServerConfig.PORT, () => {
  console.log(`Server running on port ${ServerConfig.PORT}`);
});
