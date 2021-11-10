const Event = require("../data/db/models/events");

createEvent = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide an event",
    });
  }
  console.log(body);
  const event = new Event(body);

  if (!event) {
    return res.status(400).json({ success: false, error: err });
  }

  event
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: event._id,
        message: "Event created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        res,
        message: "Event not created!",
      });
    });
};

deleteEvents = async (req, res) => {
  await Event.deleteMany({}, (err, event) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    return res.status(200).json({ success: true, data: event });
  }).clone().catch((err) => console.log(err));
};

getEvents = async (req, res) => {
  await Event.find({}).sort({createdAt: "desc"}).exec((err, events) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!events.length) {
      return res.status(404).json({ success: false, error: `Event not found` });
    }
    return res.status(200).json({ success: true, data: events });
  });
};

module.exports = {
  createEvent,
  deleteEvents,
  getEvents,
};
