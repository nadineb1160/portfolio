import React, {useEffect, useState} from 'react';
import PortfolioContainer from "../components/PortfolioContainer";
import API from "../utils/API";

const Portfolio = () => {
    const [portfolioCards, setPortfolioCards] = useState([]);

    useEffect(() => {
        // Get all portfolio
        // API.getProjects().then((projects) => {
        //     console.log(projects)

        //     // setDisplayCards();
        // })
    }, [])

    return (
        <div className="uk-height-large" id="projects">
            {/* <PortfolioContainer/> */}
        </div>
    );
}

export default Portfolio;