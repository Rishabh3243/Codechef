import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Main css/footer.css';
import lof from '../Images/CodeChef_BVM_Chapter-logo-2.png';
import {BsLinkedin,BsDiscord,BsInstagram,BsArrowReturnRight} from "react-icons/bs";
function Footer(){
    <script src="https://kit.fontawesome.com/879cf924f2.js"></script>
    return(
        <div id="footer123">
        <div class="row">
            <div class="col">
                <div className="Footer12344">
                    <img src={lof} className="Footer1234"/>
                    <h4>Codechef BVM Chapter</h4>
                </div>
                <div className="Footer12345">
                    <h5>
                       About: - 
                    </h5>
                    <p>
                    CodeChef College Chapters are the programming clubs run and maintained by the official 
                    Chapter Leaders and mentored by CodeChef. We aim to make 
                    learning competitive 
                    programming accessible for students across the globe.
                    </p>
                </div>
            </div>
            <div class="col">
                <div className="Footer98">
                    <h5> Links </h5> 
                    <p>
                        <BsArrowReturnRight className="icon12" size={26}/>
                    </p>
                </div>
            </div>
            <div class="col">
                <div className="Footer99">
                    <h5>Follow Us</h5>
                    <p>
                    <a href="https://www.linkedin.com/in/codechef-bvm-chapter/"><BsLinkedin className="icon12" size={36}/></a>
                    <a href=""><BsDiscord className="icon12" size={36}/></a>
                    <a href=""><BsInstagram className="icon12" size={36}/></a>
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Footer;