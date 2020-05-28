import React from "react";
import PortfolioCard from "../PortfolioCard";

function PortfolioContainer({ cards }) {
    return (
        <div class="js-wrapper uk-width-2-3 uk-align-center">
            <div uk-overflow-auto="selContainer: .uk-height-medium; selContent: .js-wrapper">
                <div class="uk-child-width-1-1@m uk-grid-match uk-padding uk-text-center" id="uk-overlay" uk-grid>
                    {cards.map((card) => <PortfolioCard key={card.id} card={card} />)}
                </div>
            </div>
        </div>
    )
}

export default PortfolioContainer;