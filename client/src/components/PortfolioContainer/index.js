import React from "react";
import PortfolioCard from "../PortfolioCard";

function PortfolioContainer({ cards }) {
    return (
        <div className="js-wrapper uk-width-2-3 uk-align-center">
            <div uk-overflow-auto="selContainer: .uk-height-medium; selContent: .js-wrapper">
                <div className="uk-child-width-1-1@m uk-grid-match uk-padding uk-text-center" id="uk-overlay" uk-grid="true">
                    {cards.map((card) => <PortfolioCard key={card._id} card={card} />)}
                </div>
            </div>
        </div>
    )
}

export default PortfolioContainer;