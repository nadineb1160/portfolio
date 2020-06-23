import React, {useEffect, useState} from 'react';
import PortfolioContainer from "../components/PortfolioContainer";
import API from "../utils/API";

const Portfolio = () => {
    const [portfolioCards, setPortfolioCards] = useState([]);

    useEffect(() => {
        // Get all portfolio
        API.getProjects()
        .then((projects) => {
            console.log(projects.data)

            setPortfolioCards(projects.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <div className="uk-height-large" id="projects">
            <PortfolioContainer cards={portfolioCards} />
        </div>
    );
}

export default Portfolio;