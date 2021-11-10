const express = require("express");

const EventCtrl = require("../controllers/event-ctrl");
const UserCtrl = require("../controllers/user-ctrl");

const router = express.Router();

router.post("/event", EventCtrl.createEvent);
router.post("/events/delete", EventCtrl.deleteEvents);
router.get("/events", EventCtrl.getEvents);
router.post("/register", UserCtrl.signUp);
router.post("/login", UserCtrl.signIn);

module.exports = router;
