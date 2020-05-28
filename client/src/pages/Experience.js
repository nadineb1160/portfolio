import React from 'react';
const Experience = () => {
    return (
        <div className="uk-height-large" id="projects">
        <div className="js-wrapper">
            {/* <!-- <h2 id="portfolioHead">Portfolio Page:</h2> --> */}

            <div uk-overflow-auto="selContainer: .uk-height-medium; selContent: .js-wrapper">
                <div className="uk-child-width-1-1 uk-grid-match uk-padding uk-position-center" id="uk-overlay" uk-grid="true">

                    {/* <!-- <h2 id="portfolioHead">Portfolio Page:</h2> --> */}
        
                    <div className="overlay-content uk-overlay uk-overlay-default uk-card">
                        <ul uk-accordion="true">
                            <li>
                                <h3 className="uk-accordion-title">Summer Intern at inne</h3>
                                <p>July 2019 - August 2019 in Berlin, Germany</p>
                                <ul className="uk-accordion-content">
                                    <li>Helped secure a strategic partner within their supply chain</li>
                                    <li>Managed relationships with 16 different distributors throughout Europe</li>
                                    <li>Developed social media strategy for product launch</li>
                                    <li>Analyzed market data to help determine which EU country to launch into first
                                    </li>
                                    <li>Helped the company understand market needs and trends</li>
                                    <li>Created a company information brochure to help onboard new employees</li>
                                </ul>

                            </li>
                            <li>
                                <h3 className="uk-accordion-title">Operations Intern at May & Company</h3>
                                <p>June 2019 in Berlin, Germany</p>
                                <ul className="uk-accordion-content">
                                    <li>Gathered data on 250+ consultants to be migrated onto the Shortlist management
                                        platform</li>
                                    <li>Assisted with Leadership Seminar material for a cloud-based company in Silicon
                                        Valley</li>
                                    <li>Rebranded presenting material to meet client's needs</li>
                                </ul>

                            </li>
                            <li>
                                <h3 className="uk-accordion-title">Human Resources and Project Management Intern at Admiral Group Plc</h3>
                                <p>June 2016 - August 2016 in Cardiff, United Kingdom</p>
                                <ul className="uk-accordion-content">
                                    <li>Mapped out the insurance claim customer journey to find process inefficiencies
                                        across three locations and 20+ departments and presented recommendations to OPS
                                        management</li>
                                    <li>Analyzed staff survey results for company-wide policy changes</li>
                                    <li>Designed induction brochures for new interns and graduate students</li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
        
            </div>

        </div>
    </div>
    );
}

export default Experience;