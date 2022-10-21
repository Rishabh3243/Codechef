import React from "react";
import Home from './home';
import About from './about';
import Team from './Team';
import Event from './Events';
import Contact from './Contactus';

function Main() {
    return (
      <div>
        <Home />
        <About />
        <Team />
        <Event/>
        <Contact />
      </div>
    );
  }
  
export default Main;