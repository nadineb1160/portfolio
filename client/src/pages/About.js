import React from 'react';
import image from "../Images/college_grad.JPG"

const About = () => {
    return (
        <div className="uk-height-large" id="bio">
            <div className="js-wrapper">

                <div uk-overflow-auto="selContainer: .uk-height-medium; selContent: .js-wrapper">
                    <div className="uk-child-width-1-2 uk-text-center" id="uk-overlay">
                        <div className="overlay-content uk-overlay uk-overlay-default uk-align-center uk-card" id="uk-overlay">

                            <div className="overlay-content">

                                <img className="uk-align-left uk-margin-remove-adjacent" id="grad"
                                    src={image} alt="Graduation Photo"/>
                                {/* <!-- My Bio --> */}
                                <p>
                                    My name is Nadine Bundschuh and I am a recent graduate of the University of Michigan
                                    with a Bachelor
                                    of
                                    Science in Cognitive Science and a minor in Computer Science. I was a liberal arts
                                    student with a
                                    wide
                                    background of skills, coursework and experiences.

                                    <br/>

                                    I have taken classNamees in the fields of Anthropology,
                                    Artificial Intelligence, Computer Science, Economics, Entrepreneurship, Linguistics,
                                    Mathematics,
                                    Philosophy,
                                    Psychology, Sociology, Statistics and more. Currently, I'm working to advance my
                                    programming skills
                                    through UC
                                    Berkeley's Full-Stack Development Bootcamp.
                                </p>

                                <p>
                                    Previous Languages: C++, Python
                                    <br/>
                                    New Languages: HTML, CSS, JavaScript
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