const db = require("../model");

const addNewHoliday = async (req, res, next) => {
  try {
    const newHoliday = await db.holidays.create(req.body);
    return res
      .status(200)
      .send({ data: newHoliday, message: "new holiday created" });
  } catch (err) {
    console.error(err);
  }
};

const updateHoliday = async (req, res, next) => {
  try {
    const updaHoliday = await db.holidays.updateOne(
      { _id: req.body._id },
      {
        $set: req.body,
      }
    );
    return res.status(200).send({ message: "Holiday updated successfully" });
  } catch (err) {
    console.error(err);
  }
};

const getAllHolidays = async (req, res, next) => {
  try {
    const holidays = await db.holidays.find({});
    return res.status(200).send(holidays);
  } catch (err) {
    console.error(err);
  }
};

const deleteHoliday = async (req, res, next) => {
  try {
    const deleteHoliday = await db.holidays.deleteOne({ _id: req.params.id });
    return res.status(200).send({ message: "holiday deleted successfully" });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addNewHoliday,
  updateHoliday,
  getAllHolidays,
  deleteHoliday,
};
