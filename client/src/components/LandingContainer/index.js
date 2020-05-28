import React from "react";

function LandingContainer({children}) {
    return (
        <div class="uk-container uk-container-large" id="landing">
            {children}
        </div>
    )
}

export default LandingContainer;
