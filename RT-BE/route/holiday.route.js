const holidayController = require("../controller/holiday.controller");

module.exports = function (app) {
  app.post(
    "/rt/api/v1/holiday/addNewHoliday",
    [],
    holidayController.addNewHoliday
  );
  app.put(
    "/rt/api/v1/holiday/updateHoliday",
    [],
    holidayController.updateHoliday
  );
  app.get(
    "/rt/api/v1/holiday/getAllHolidays",
    [],
    holidayController.getAllHolidays
  );
  app.delete(
    "/rt/api/v1/holiday/deleteHoliday",
    [],
    holidayController.deleteHoliday
  );
};
