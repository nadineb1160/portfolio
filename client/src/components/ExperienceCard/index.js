import React from "react";

function ExperienceCard({ card }) {
    return (
        <li>
            <h3 className="uk-accordion-title">{card.position}</h3>
            <p>{card.date} in {card.location}</p>
            <ul className="uk-accordion-content">
                {card.workExperience.map((experience) => <li key={card.workExperience.indexOf(experience)}>{experience}</li>)}
            </ul>

        </li>
    )
}

export default ExperienceCard;