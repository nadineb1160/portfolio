import React from 'react';

const About = () => {
    return (
        <div className="uk-height-large" id="bio">
            <div className="js-wrapper">

                <div uk-overflow-auto="selContainer: .uk-height-medium; selContent: .js-wrapper">
                    <div className="uk-child-width-1-2 uk-text-center" id="uk-overlay">
                        <div className="overlay-content uk-overlay uk-overlay-default uk-align-center uk-card" id="uk-overlay">

                            <div className="overlay-content">

                                <img className="uk-align-left uk-margin-remove-adjacent" id="grad"
                                    src="./Images/college_grad.JPG" alt="Graduation" />
                                {/* <!-- My Bio --> */}
                                <p>
                                    My name is Nadine Bundschuh and I am a recent graduate of the University of Michigan
                                    with a Bachelor of Science in Cognitive Science and a minor in Computer Science. I have a liberal arts
                                    background with a wide variety of skills, coursework and experiences.
                                    <br/>
                                    <br/>
                                    I have taken classes in the fields of Anthropology, Artificial Intelligence, Computer Science, Economics, 
                                    Entrepreneurship, Linguistics, Mathematics, Philosophy, Psychology, Sociology, Statistics and more. 
                                    I've recently advanced my programming skills through UC Berkeley's Full-Stack Bootcamp.
                                </p>

                                <p>
                                    <strong className="blue">Languages:</strong> HTML, CSS, JavaScript, Python, C++, Netlogo
                                    <br/>
                                    <br/>
                                    <strong className="blue">Technical Skills:</strong> AJAX, API, Authentication, Bootstrap, Context API, Declarative Programming, ES6, Express.js, Firebase, Git, GitHub, Heroku, IndexDB, JavaScript, jQuery, JSON, JSX, Mongo DB, Mongoose ODM, MySQL, Node.js, Object-Oriented Programming (OOP), ORM, Postman, React, Rest API, Sequelize, SQL, Tailwind CSS, Testing
                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );



}

export default About;