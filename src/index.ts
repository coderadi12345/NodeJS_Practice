import { ServerConfig } from "./config";
import { anyError } from "./middleware/error.middleware";
import v1 from "./router/v1";
const express = require("express");

const app = express();
app.use(express.json())

app.use('/v1/router',v1)

app.use(anyError)

app.listen(ServerConfig.PORT, () => {
  console.log(`Server running on port ${ServerConfig.PORT}`);
});