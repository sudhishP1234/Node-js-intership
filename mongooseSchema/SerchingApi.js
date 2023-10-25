const express = require("express");
const db = require("./dbUrl");
const scema = require("./Schema");
const app = express();
app.use = express.json();

app.get("/search/:key", async (req, resp) => {
  const fd = await scema.find({
    $or: [{ name: { $regex: req.params.key } }],
  });
  resp.send(fd);
});
app.post("/cret/:key", async (req, resp) => {
  const pt = new scema(req.params);
  const sv = await pt.save({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
    ],
  });
  resp.send(sv);
});

app.listen(8000);
