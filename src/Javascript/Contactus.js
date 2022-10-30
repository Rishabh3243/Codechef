import React from "react";
import '../Main css/Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import GoogleMapReact from 'google-map-react';

function Contact(){
    return(
            <div className="contact">
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
                                    <iframe width="500" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Birla%20Vishavakarma%20Mahavidhyala&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> 
                            </div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Contact;