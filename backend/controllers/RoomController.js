const RoomModel = require("../models/RoomModel");

const getAllRooms = async (req, res) => {
    try {
        const rooms = await RoomModel.find();

        res.status(200).json({
            message: rooms,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Rooms not found!!',
        });
    }
};

module.exports = {
    getAllRooms
}