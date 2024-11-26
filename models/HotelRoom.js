const mongoose = require('mongoose');


// Connect to MongoDB
const dbURI = "mongodb+srv://langeantoine20:XBBvHkjwUokuWBKj@lantoine1.h27n0.mongodb.net/?retryWrites=true&w=majority&appName=LAntoine1";

mongoose.connect(dbURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

// Define a schema and model for Hotel Room
const hotelRoomSchema = new mongoose.Schema({
    roomNumber: { type: Number, required: true, unique: true },
    roomType: { type: String, required: true },
    pricePerNight: { type: Number, required: true },
    isBooked: { type: Boolean, default: false }
});

const HotelRoom = mongoose.model('HotelRoom', hotelRoomSchema);

module.exports = HotelRoom;