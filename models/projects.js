const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    // Project Title
    title: {
        type: String,
        trim: true,
        required: "Title is Required"
    },
    // Project gif/Image URL or Path
    image: {
        type: String,
        trim: true,
        required: "Image is Required"
    },
    // Decription
    description: {
        type: String,
        trim: true,
        required: "Description is Required"
    },
    // Technologies Used
    technologies: {
        type: String,
        trim: true,
        required: "Technologies is Required"
    },
    // Github Repo Link
    githubLink: {
        type: String,
        trim: true,
        required: "GitHub Link is Required"
    },
    // Demo Link
    demoLink: {
        type: String,
        trim: true
    }

});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;