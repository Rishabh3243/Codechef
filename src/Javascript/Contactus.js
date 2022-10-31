import React from "react";
import '../Main css/Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import GoogleMapReact from 'google-map-react';
import {BsLinkedin,BsDiscord,BsInstagram,BsArrowReturnRight} from "react-icons/bs";
function Contact(){
    return(
            <div className="contact" id="cont">
                <div className="contact-Head">
                    <h1 className="contact-Head-h1">
                        Contact US
                    </h1>
                    <div class="small_message">
                        It will be our pleasure to meet you &#128525;
                    </div>
                    <div className="bottom-section">
                        <div class="contact-map">
                            <div class="mapouter">
                                    <iframe width="500" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Birla%20Vishavakarma%20Mahavidhyala&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
                            </div>
                        </div>
                        <div className="contact-in">
                            <h2>Reach US</h2>
                            <button id="cont12"><a href="https://www.linkedin.com/in/codechef-bvm-chapter/"><BsLinkedin size={40}></BsLinkedin>&nbsp;&nbsp;codechef_bvm</a></button>
                            <button id="cont13"><a href="https://www.instagram.com/codechef_bvm/"><BsInstagram size={40}></BsInstagram>&nbsp;&nbsp;codechef_bvm</a></button>
                            <button id="cont14"><a href="https://www.linkedin.com/in/codechef-bvm-chapter/"><BsDiscord size={40}></BsDiscord>&nbsp;&nbsp;codechef_bvm</a></button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Contact;