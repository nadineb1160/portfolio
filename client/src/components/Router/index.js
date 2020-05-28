import React from 'react';
import Home from "../../pages/Home";
import About from "../../pages/About";
import Portfolio from "../../pages/Portfolio";
import Experience from "../../pages/Experience";
import Contact from "../../pages/Contact";
import Navbar from "../Navbar";
import LandingContainer from "../LandingContainer";

import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";

const Router = () => {
    return (

        <BrowserRouter>
            <LandingContainer>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/portfolio" component={Portfolio}/>
                    <Route exact path="/experience" component={Experience}/>
                    <Route exact path="/contact" component={Contact}/>
                </Switch>
            </LandingContainer>
            
        </BrowserRouter>
    );
}

export default Router;