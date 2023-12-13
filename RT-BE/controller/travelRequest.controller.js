const db = require("../model");

const addNewTravelRequest = async (req, res, next) => {
  try {
    const newTravelRequest = await db.holidays.create(req.body);
    return res
      .status(200)
      .send({ data: newTravelRequest, message: "new travelRequest created" });
  } catch (err) {
    console.error(err);
  }
};

const updateTravelRequest = async (req, res, next) => {
  try {
    const updaTravelRequest = await db.holidays.updateOne(
      { _id: req.body._id },
      {
        $set: req.body,
      }
    );
    return res
      .status(200)
      .send({ message: "TravelRequest updated successfully" });
  } catch (err) {
    console.error(err);
  }
};

const getAllTravelRequests = async (req, res, next) => {
  try {
    const travelRequests = await db.holidays.find({});
    return res.status(200).send(travelRequests);
  } catch (err) {
    console.error(err);
  }
};

const deleteTravelRequest = async (req, res, next) => {
  try {
    const deleteTravelRequest = await db.holidays.deleteOne({
      _id: req.params.id,
    });
    return res
      .status(200)
      .send({ message: "travelRequest deleted successfully" });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addNewTravelRequest,
  updateTravelRequest,
  getAllTravelRequests,
  deleteTravelRequest,
};
