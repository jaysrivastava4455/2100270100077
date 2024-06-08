const express = require("express");
const numberRoutes = require("./routes/numberRoutes");

const app = express();
const port = 3000;

app.use("/", numberRoutes);

app.listen(port, () => {
  console.log(`task1 is running  on http://localhost:${port}`);
});
