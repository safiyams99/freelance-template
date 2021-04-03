import React from "react";
import OurStoriesCard from "../components/OurStoriesCard";
import { MData } from "../data/details"
import OwlCarousel from "react-owl-carousel"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Row, Col} from "react-bootstrap"


const OurStories = () => {
const w = window.visualViewport.width
console.log(w)
    return (
        <section className="testimonial" id="testimonial">
            <div className="container">
                <div className="row">
                    <div className="main-heading">
                        <p>What Say Our Client</p>
                        <h2>Our Success <span>Stories</span></h2>
                    </div>
                </div>
                <Row>
                    <OwlCarousel id="client-testimonial-slider" className="owl-theme owl-dots " items={w <= 900? w <= 500? 1 :2 :3} >
                        {MData.map((data,key)=>{
                          const {pic,name} = data
                          return(
                            <OurStoriesCard key={key} pic={pic} name={name}/>
                          )
                        })}
                    </OwlCarousel>
                </Row>
            </div>
        </section>
    )
}
export default OurStories