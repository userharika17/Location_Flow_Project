const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    house: String,
    road: String,
    category: String,
    coordinates: {
        lat: Number,
        lng: Number,
    },
}, { timestamps: true });

module.exports = mongoose.model('Address', AddressSchema);
