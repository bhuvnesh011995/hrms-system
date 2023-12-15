const eventController = require("../controller/event.controller");

module.exports = function (app) {
  app.post(
    "/rt/api/v1/events/addNewEvent",
    [],
    eventController.addNewEvent
  );
  app.put(
    "/rt/api/v1/events/updateEvent",
    [],
    eventController.updateEvent
  );
  app.get(
    "/rt/api/v1/events/getAllEvents",
    [],
    eventController.getAllEvents
  );
  app.delete(
    "/rt/api/v1/events/deleteEvent/:id",
    [],
    eventController.deleteEvent
  );

  app.get("/rt/api/v1/events/getEvents/:eventType",[],eventController.getEventsByParamsType)

};
