import React from "react";
import Home from './home';
import About from './about';
import Team from './Team';
import Event from './Events';
import Contact from './Contactus';
import Footer from './footer';

function Main() {
    return (
      <div>
        <Home />
        <About />
        <Team />
        <Event/>
        <Contact />
        <Footer />
      </div>
    );
  }
  
export default Main;