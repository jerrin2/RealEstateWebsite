const express = require('express');

const {
    getAllRooms
} = require("../controllers/RoomController")

const router = express.Router();

router.get("/rooms",getAllRooms)

module.exports = router;