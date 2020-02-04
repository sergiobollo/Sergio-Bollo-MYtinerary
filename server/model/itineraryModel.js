const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    rating: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
    duration: {
      type: String
    },
    price: {
        type: String
    },
    hashtags: {
      type: String
    }
})

module.exports = mongoose.model('itinerary', itinerarySchema)
