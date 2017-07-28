const express = require("express");
require("./service/passport");

const app = express();
require("./routes/authRoute")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(">> Listening at port: " + PORT);
});
