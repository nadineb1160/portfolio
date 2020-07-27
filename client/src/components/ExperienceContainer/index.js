import React from "react";
import ExperienceCard from "../ExperienceCard";

function ExperienceContainer({ cards }) {
    return (
        <div className="js-wrapper uk-margin-medium">
            <div uk-overflow-auto="selContainer: .uk-height-medium; selContent: .js-wrapper">
                <div className="uk-child-width-1-1 uk-grid-match uk-position-center" id="uk-overlay" uk-grid="true">
                    <div className="overlay-content uk-overlay uk-overlay-default uk-card">
                        <ul uk-accordion="true">
                            {cards.map((card) => <ExperienceCard key={card._id} card={card} />)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceContainer;