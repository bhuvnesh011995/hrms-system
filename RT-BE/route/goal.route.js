const goalController = require("../controller/goal.controller");

module.exports = function (app) {
  app.post("/rt/api/v1/goals/addNewGoal", [], goalController.addNewGoal);
  app.put("/rt/api/v1/goals/updateGoal", [], goalController.updateGoal);
  app.get("/rt/api/v1/goals/getAllGoals", [], goalController.getAllGoals);
  app.delete("/rt/api/v1/goals/deleteGoal", [], goalController.deleteGoal);
};
