import React from "react";
import "../Main css/about.css";
import img2 from "../Images/About/2.png";
import logo from "../Images/CodeChef_BVM_Chapter-logo-2.png";
import 'bootstrap/dist/css/bootstrap.min.css';
function About(){
    return(
        <div id="about20221">
            <div id="about20222">
                <img src={img2} alt="img" className="about-img"/>
                <div class="small_message">Once you will know us &#128515; , you will fall in love with us &#128519;</div>
            </div>
            <div id="about20223">
                <div class="about_content">
                    <div class="about_content_left">
                        <div class="question">Q.What is Codechef?</div>
                        CodeChef was started in 2009 as an educational initiative for the programming community by Directi,
                        an
                        Indian software
                        products company. Today, CodeChef is one of the world’s largest and popular global competitive
                        programming platforms
                        preferred by student & professional programmers.
                        <br /><br />
                        <div class="question">Q.Why we started this chapter?</div>
                        We want every student from our college to indulge in coding competition and to create a
                        coding environment at our college.
                        <br /> <br />
                    </div>
                    <div></div>
                    <div class="about_content_right">
                        <div class="about_content_right_logo">
                            <img src={logo} height="245px" width="250px" />
                        </div>
                    </div>
                </div>
                <hr/>
                    <div class="community_heading"><u>Community with Benefits &#128540; </u></div><br /><br />
                    <div class="community_info">
                    <i class="bi bi-caret-right-fill"/> &nbsp;&nbsp;Regular coding contest<br />
                    </div>
                    </div>
        </div>
    );
}

export default About;