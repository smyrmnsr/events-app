const Event = require("../data/db/models/events");
const moment = require("moment");

/* Creates a new event */
createEvent = (req, res) => {
  const body = req.body;
  
  /* If the event has an empty body, the request will yield an error */
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide an event",
    });
  }

  const event = new Event(body);

  /* If the event couldn't be created by the scheme, the request will yield an error */
  if (!event) {
    return res.status(400).json({ success: false, error: err });
  }


  /* Event is saved in the database, if failed, request will yield an error */
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

/* Delete all user events */
deleteEvents = async (req, res) => {
  const body = req.body;

  /* If the event has an empty body, the request will yield an error */
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide an event",
    });
  }

  /* Deletes all the events from an user (user received in the request) from the database, if failed, the request will yield an error */
  /* Clone creates a new instance of the querry, without it multiple requests on the same endpoint will yield an error */
  await Event.deleteMany(body, (err, event) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    return res.status(200).json({ success: true, data: event });
  }).clone().catch((err) => console.log(err));
};

/* Gets all the events from the database */
getEvents = async (req, res) => {

  /* Executes a SELECT querry, ordering all events by 'submittedAt', if there are no events, request will yield a 404 error */
  /* SELECT * from EVENTS ORDER BY submittedAt "desc" */
  await Event.find({}).sort({submittedAt: "desc"}).exec((err, events) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!events.length) {
      return res.status(404).json({ success: false, error: `Event not found` });
    }
    return res.status(200).json({ success: true, data: events });
  });
};

/* Check if any events have the endDate past current time */
updateEvents = async () => {

  /* Initialize the ids array with the events that need to be updated (active: false) */
  let passedEvents = [];

  /* Select all events that have (active: true - events are still active or they haven't been updated yet) */
  await Event.find({active: true}).exec((err, events) => {
    if(err) {
      return console.log(err);
    }

    if (!events.length) {
      return console.log("There are no events that need updating");
    }

    /* Iterate through all the events that were found by the querry and check if the endDate is before current time
       If the condition is false we push the id to the id array */
    events.forEach((event) => {
      if(moment().isAfter(event.endDate)) {
        passedEvents.push(event._id.valueOf());
      }
    });
    
    /* Update all the events from the ids array with active:false */
    Event.updateMany({"_id": passedEvents}, {active: false})
    .exec((err, data) => {

      if(err) {
        return console.log(err);
      }

      /* Show in console if any events were modified */
      if(data.modifiedCount > 0) {
        return console.log("There were " + data.modifiedCount + " events updated");
      }

      return console.log("No events needed an update");
    });

  });
}

module.exports = {
  createEvent,
  deleteEvents,
  getEvents,
  updateEvents,
};

