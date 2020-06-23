let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfoliodb", {
    useNewUrlParser: true,
    useFindAndModify: false
});

let projectSeed = [
    {
        title: "Footsteps",
        image: "./Images/footsteps.gif",
        description: "Footsteps lets users keep track of their interactions to assist hospitals with contact tracing.",
        technologies: "Javascript, React, Express, Sequelize, NodeJS, APIs, Authentication, Cookies, bcrypt, MomentJS, Bootstrap",
        githubLink: "https://github.com/analoo/special-project",
        demoLink: "https://track-footsteps.herokuapp.com/"
    },
    {
        title: "TravelBit",
        image: "./Images/TravelBit.gif",
        description: "TravelBit is a web application that allows users to save their countries, states, cities and trips that they have experienced so that they can look back on old trips and share with friends and family.",
        technologies: "Javascript, React, Express, Sequelize, NodeJS, APIs, Authentication, Cookies, bcrypt, MomentJS, Bootstrap",
        githubLink: "https://github.com/nadineb1160/project3",
        demoLink: ""
    },
    {
        title: "JobKit",
        image: "./Images/JobKit.gif",
        description: "JobKit was created to organize job application information in one place for users to leverage and take a more active role in managing their job hunt. JobKit allows you to actively track job applications and job opportunities you are interested in acquiring.",
        technologies: "Sequelize, MySQL, Firebase Authentication, Express-Handlebars, Node.js, Javascript, GitHub API",
        githubLink: "https://github.com/nadineb1160/job-kit",
        demoLink: "https://job-kit.herokuapp.com"
    },
    {
        title: "AstroDash",
        image: "./Images/AstroDash.gif",
        description: "AstroDash is a dashboard that allows users to view daily horoscope, calculate astrological symbol/chinese zodiac and retrieve local weather, air quality, etc., using several APIs.",
        technologies: "Javascript, jQuery, UIKit, several APIs",
        githubLink: "https://github.com/nadineb1160/astroDash-Project",
        demoLink: "https://nadineb1160.github.io/astroDash-Project/"
    },
    {
        title: "Employee Tracker",
        image: "./Images/EmployeeTracker.gif",
        description: "This application allows you to manage a company's employees by creating an employee database that stores information on employees, roles and departments in tables. The user is prompted on the command line to change, read, update or delete (CRUD) from these categories.",
        technologies: "Node, Inquirer, MySQL, Javascript",
        githubLink: "https://github.com/nadineb1160/employee-tracker",
        demoLink: ""
    }
];


db.Projects.remove({})
  .then(() => db.Projects.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


let experienceSeed = [
    {
        position: "Summer Intern at inne",
        date: "July 2019 - August 2019",
        location: "Berlin, Germany",
        workExperience: [
          "Helped secure a strategic partner within their supply chain",
          "Managed relationships with 16 different distributors throughout Europe",
          "Developed social media strategy for product launch",
          "Analyzed market data to help determine which EU country to launch into first",
          "Helped the company understand market needs and trends",
          "Created a company information brochure to help onboard new employees"
        ]
    },
    {
        position: "Operations Intern at May & Company",
        date: "June 2019",
        location: "Berlin, Germany",
        workExperience: [
          "Gathered data on 250+ consultants to be migrated onto the Shortlist management platform",
          "Assisted with Leadership Seminar material for a cloud-based company in Silicon Valley",
          "Rebranded presenting material to meet client's needs"
        ]
    },
    {
        position: "Human Resources and Project Management Intern at Admiral Group Plc",
        date: "June 2016 - August 2016",
        location: "Cardiff, United Kingdom",
        workExperience: [
          "Mapped out the insurance claim customer journey to find process inefficiencies across three locations and 20+ departments and presented recommendations to OPS management",
          "Analyzed staff survey results for company-wide policy changes",
          "Designed induction brochures for new interns and graduate students"
        ]
    },
];


db.Experiences.remove({})
  .then(() => db.Experiences.collection.insertMany(experienceSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });