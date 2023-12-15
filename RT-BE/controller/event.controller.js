const db = require("../model");

const addNewEvent = async (req, res, next) => {
  try {
    const newEvent = await db.events.create(req.body);
    return res
      .status(200)
      .send({ data: newEvent, message: "new event created" });
  } catch (err) {
    console.error(err);
  }
};

const updateEvent = async (req, res, next) => {
  try {
    const updaEvent = await db.events.updateOne(
      { _id: req.body._id },
      {
        $set: req.body,
      }
    );
    return res.status(200).send({ message: "Event updated successfully" });
  } catch (err) {
    console.error(err);
  }
};

const getAllEvents = async (req, res, next) => {
  try {
    const events = await db.events.find({});
    return res.status(200).send(events);
  } catch (err) {
    console.error(err);
  }
};

const deleteEvent = async (req, res, next) => {
  try {
    const deleteEvent = await db.events.deleteOne({ _id: req.params.id });
    return res.status(200).send({ message: "event deleted successfully" });
  } catch (err) {
    console.error(err);
  }
};

const getEventsByParamsType = async(req,res,next) => {
  try{
    
    const EventAggregation = [];

    EventAggregation.push({
      $match:{
        eventType:req.params.eventType
      }
    })
    
    if(req.params.eventType == "leave"){
      EventAggregation.push(
          {
            $lookup:{
              from:"company",
              let:{companyId:"$companyId"},
              pipeline:[
                {
                  $match:{
                    $expr:{
                      $eq:[{$toString:"$_id"},"$$companyId"]
                    }
                  }
                }
              ],
              as:"companyDetails"
            }
          },
          {$unwind:"$companyDetails"},
          {
            $lookup:{
              from:"employee",
              let:{employeeId:"$employeeId"},
              pipeline:[
                {
                  $match:{
                    $expr:{
                      $eq:[{$toString:"$_id"},"$$employeeId"]
                    }
                  }
                }
              ],
              as:"employeeDetails"
            }
          },
          {$unwind:"$employeeDetails"},
          {
            $project:{
              _id:1,
              title: 1,
              startDate: 1,
              endDate: 1,
              description: 1,
              status: 1,
              companyId: 1,
              eventType: 1,

              employeeId: 1,
              visitPurpose: 1,
              visitPlace: 1,
              travelMode: 1,
              arrangementType: 1,
              expectedBudget: 1,
              actualBudget: 1,
              goalType: 1,
              targetAchievement: 1,
              companyName:"$companyDetails.name",
              employeeName:"$employeeDetails.username",
              halfDay: 1,
              leaveReason: 1 ,
              remarks: 1,
            }
          }
        )
    }
    const getTypeEvents = await db.events.aggregate(EventAggregation)
    console.log(getTypeEvents)
    return res.status(200).send(getTypeEvents);
  }catch(err){
    console.error(err)
  }
} 

module.exports = {
  addNewEvent,
  updateEvent,
  getAllEvents,
  deleteEvent,
  getEventsByParamsType
};
