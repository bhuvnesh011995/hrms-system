const travelRequestController = require("../controller/travelRequest.controller");

module.exports = function (app) {
  app.post(
    "/rt/api/v1/travelRequest/addNewTravelRequest",
    [],
    travelRequestController.addNewTravelRequest
  );
  app.put(
    "/rt/api/v1/travelRequest/updateTravelRequest",
    [],
    travelRequestController.updateTravelRequest
  );
  app.get(
    "/rt/api/v1/travelRequest/getAllTravelRequests",
    [],
    travelRequestController.getAllTravelRequests
  );
  app.delete(
    "/rt/api/v1/travelRequest/deleteTravelRequest",
    [],
    travelRequestController.deleteTravelRequest
  );
};
