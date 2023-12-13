const db = require("../model");

const addNewGoal = async (req, res, next) => {
  try {
    const newGoal = await db.holidays.create(req.body);
    return res.status(200).send({ data: newGoal, message: "new goal created" });
  } catch (err) {
    console.error(err);
  }
};

const updateGoal = async (req, res, next) => {
  try {
    const updaGoal = await db.holidays.updateOne(
      { _id: req.body._id },
      {
        $set: req.body,
      }
    );
    return res.status(200).send({ message: "Goal updated successfully" });
  } catch (err) {
    console.error(err);
  }
};

const getAllGoals = async (req, res, next) => {
  try {
    const goals = await db.holidays.find({});
    return res.status(200).send(goals);
  } catch (err) {
    console.error(err);
  }
};

const deleteGoal = async (req, res, next) => {
  try {
    const deleteGoal = await db.holidays.deleteOne({ _id: req.params.id });
    return res.status(200).send({ message: "goal deleted successfully" });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addNewGoal,
  updateGoal,
  getAllGoals,
  deleteGoal,
};
