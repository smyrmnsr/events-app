const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./data/db");
const eventRouter = require("./routes/event-router");
const app = express();
const apiPort = 3000;
const cron = require("cron").CronJob;
const EventCtrl = require("./controllers/event-ctrl");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json({limit: '10mb', extended: true}));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

var job = new cron('* * * * *', function() {
  EventCtrl.updateEvents();
}, null, true, 'America/Los_Angeles');
job.start();


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", eventRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
