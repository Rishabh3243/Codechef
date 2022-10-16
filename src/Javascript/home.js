import React from "react";
import "../Images/home/1.png";
import img from "../Images/home/2.png";
import img1 from "../Images/home/3.png";
import "../Main css/home.css"
function Home(){
    return(
        <div>
            <section className="ab">
                <div>
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