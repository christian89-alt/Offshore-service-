import React from "react"
import Link from "next/link";
import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Hero =()=> {

    return(


<div>
              <h2>Cabinet Conseil en Transition Digitale</h2>
              <Carousel>
                  <div>
                      <img src="/management de projet.jpg" alt="image1"/>
                      <p className="legend">Image 1</p>
  
                  </div>
                  <div>
                      <img src="/Stratégie digitale.jpg" alt="image2" />
                      <p className="legend">Image 2</p>
  
                  </div>
                  <div>
                      <img src="/website.jpg" alt="image3"/>
                      <p className="legend">Image 3</p>
  
                  </div>
                  <div>
                      <img src="/cardjavascript.png" alt="image4"/>
                      <p className="legend">Image 4</p>
  
                  </div>
                  <div>
                      <img src="/entrepreneur.jpg" alt="image5"/>
                      <p className="legend">Image 5</p>
  
                  </div>
              </Carousel>
            </div>

    )

}

export default Hero;