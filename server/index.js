const express = require("express");
const cors = require("cors");
const db = require("./data/db");
const eventRouter = require("./routes/event-router");
const app = express();
const APIPORT = 3000;
const cron = require("cron").CronJob;
const EventCtrl = require("./controllers/event-ctrl");


app.use(express.urlencoded({ extended: true }));
app.use(cors());
/* Increased the json memory limit to allow base64 images to be saved */
app.use(express.json({limit: '10mb', extended: true}));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

/* Cronjob that checks if the events endDate is past current time using the updateEvents function from event controller */
var job = new cron('* * * * *', function() {
  EventCtrl.updateEvents();
}, null, true, 'America/Los_Angeles');
job.start();

app.use("/api", eventRouter);

app.listen(APIPORT, () => console.log(`Server running on port ${APIPORT}`));
