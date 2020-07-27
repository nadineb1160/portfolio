import React from "react";

function PortfolioCard({ card }) {
    return (
        <div className="overlay-content">
            <div className="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body">
                <h3 className="uk-card-title blue">{card.title}</h3>
                <img src={card.image} alt="grad 2018" className="rounded" />
                <p>{card.description}</p>
                <hr />
                <p><strong className="blue">Technologies Used: </strong>{card.technologies}</p>

                <a href={card.githubLink}>Github Repo | </a>
                <a href={card.demoLink}>Demo</a>
            </div>

        </div>
    )
}

export default PortfolioCard;