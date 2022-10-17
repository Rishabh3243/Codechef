import React from "react";
import "../Images/home/1.png";
import img from "../Images/home/2.png";
import img1 from "../Images/home/3.png";
import "../Main css/home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import img2 from "../Images/CodeChef_BVM_Chapter-logo-2.png";
function Home(){
    return(
        <div>
            <section className="ab">
                <div className="y1">
                    <img className="ab4" src={img2}/>
                    <button type="button" class="btn btn-primary" id="r">JOINT US</button>
                </div>
                <div className="y">
                    <img className="ab3" src={img1}/>
                </div>
                <div>
                    <img className="ab2" src={img}/>
                </div>
            </section>
        </div>
    );
}

export default Home;