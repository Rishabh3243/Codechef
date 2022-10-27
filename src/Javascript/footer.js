import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Main css/footer.css';
import lof from '../Images/CodeChef_BVM_Chapter-logo-2.png';
function Footer(){
    return(
        <div id="footer123">
        <div class="row">
            <div class="col">
                <div className="Footer12344">
                    <img src={lof} className="Footer1234"/>
                    <h5>Codechef BVM Chapter</h5>
                </div>
                <div className="Footer12345">
                    <h6>
                       About: - 
                    </h6>
                    <p>
                    CodeChef College Chapters are the programming clubs run and maintained by the official 
                    Chapter Leaders and mentored by CodeChef. We aim to make 
                    learning competitive 
                    programming accessible for students across the globe.
                    </p>
                </div>
            </div>
            <div class="col">
                <div>
                    <h6> Links </h6> 
                </div>
            </div>
            <div class="col">
            Column
            </div>
        </div>
        </div>
    );
}

export default Footer;