const RoomModel = require("../models/RoomModel");

const getAllRooms = async (req, res) => {
  try {
    const rooms = await RoomModel.find();

    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({
      error: "Rooms not found!!",
    });
  }
};

const getLocationRoom = async (req, res) => {
  try {
    const location = req.params.location;
    console.log(location);
    const rooms = await RoomModel.find({
      location: location,
    });

    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({
      error: "Rooms not found!!",
    });
  }
};

module.exports = {
  getAllRooms,
  getLocationRoom,
};
