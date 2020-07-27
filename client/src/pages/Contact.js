import React from 'react';

const Contact = () => {
    return (
        <div className="uk-container">
            <div className="uk-overlay uk-overlay-default uk-position-center uk-card" id="uk-overlay">

                {/* <!-- My Bio --> */}
                <h2 className="blue">Please reach out to:</h2>

                {/* <!-- Picture --> */}
                <img className="uk-border-pill uk-align-center" src="./Images/college_grad.JPG" width="200" height="200" alt="Border circle"/>

                {/* <!-- Name --> */}
                <h3 className="blue">Nadine Bundschuh</h3>

                {/* <!-- Email - malito --> */}
                <p><a href="mailto:nadineb@umich.edu" target="_top"><span uk-icon="mail"></span> nadineb@umich.edu</a></p>

                {/* <!-- GitHub Account --> */}
                <p><a href="https://github.com/nadineb1160/"><span uk-icon="github"></span> GitHub Account</a></p>

                {/* <!-- Linkedin --> */}
                <p><a href="https://www.linkedin.com/in/nadine-bundschuh-731233b9/"><span uk-icon="linkedin"></span> Linkedin</a></p>

                {/* <!-- Resume --> */}
                <p><a href="https://drive.google.com/file/d/1sLedD_iq1OutxhALJdXrbXQ_-MFuL0hf/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer"><span uk-icon="file-text"></span> Resume</a></p>
            </div>

        </div>
    );
}

export default Contact;