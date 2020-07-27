import React, {useEffect, useState} from 'react';
import ExperienceContainer from "../components/ExperienceContainer";
import API from "../utils/API";

const Experience = () => {
    const [experienceCards, setExperienceCards] = useState([]);


    useEffect(() => {
        // Get all experiences
        API.getExperiences()
        .then((experiences) => {
            console.log(experiences.data)

            setExperienceCards(experiences.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <div className="uk-height-large">
            <ExperienceContainer cards={experienceCards} />
        </div>
    );
}

export default Experience;