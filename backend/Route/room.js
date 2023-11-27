const express = require("express");

const {
  getAllRooms,
  getLocationRoom,
} = require("../controllers/RoomController");

const router = express.Router();

router.get("/rooms", getAllRooms);

router.get("/room/:location", getLocationRoom);

module.exports = router;
