import React from "react";
import img from "../Images/Events/2.png"
import "../Main css/Event.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import img2 from "../Images/Events/3.png";
import img4 from "../Images/Events/4.png"


function Event(){
    return(
        <div className="a" id="Events">
        <div className="a123">
        <img className="event23" src={img4} />
        <div id="carouselExampleIndicators" class="carousel slide" data-mdb-ride="carousel" >
                    <div class="carousel-indicators">
                        <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="1"
                        aria-label="Slide 2"></button>
                        <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="2"
                        aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={img2} class="d-block w-100"
                            alt="Wild Landscape" />
                        </div>
                        <div class="carousel-item">
                        <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" class="d-block w-100" alt="Camera" />
                        </div>
                        <div class="carousel-item">
                        <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" class="d-block w-100"
                            alt="Exotic Fruits" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleIndicators"
                        data-mdb-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleIndicators"
                        data-mdb-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
            </div>
        </div>
        </div>
    );
}

export default Event;