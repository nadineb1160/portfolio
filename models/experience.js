const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
    position: {
        type: String,
        trim: true,
        required: "Postition is Required"
    },
    date: {
        type: String,
        trim: true,
        required: "Date is Required"
    },
    location: {
        type: String,
        trim: true,
        required: "Location is Required"
    },
    workExperience: [ {
        type: String,
        trim: true,
        required: "Work Experience is Required"
    }]


});

const Experiences = mongoose.model("Experience", ExperienceSchema);

module.exports = Experiences;