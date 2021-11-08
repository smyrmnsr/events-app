const express = require("express");

const EventCtrl = require("../controllers/event-ctrl");

const router = express.Router();

router.post("/event", EventCtrl.createEvent);
router.delete("/events/", EventCtrl.deleteEvents);
router.get("/events", EventCtrl.getEvents);

module.exports = router;
