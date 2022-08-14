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
                      <img src="/management de projet.jpg" alt="image1"width={1250} height={750}/>
                      <p className="legend">Gestion de projet 1</p>
  
                  </div>
                  <div>
                      <img src="/Stratégie digitale.jpg" alt="image2" width={1250} height={750} />
                      <p className="legend">Optimiser votre stratégie digitale 2</p>
  
                  </div>
                  <div>
                      <img src="/website.jpg" alt="image3"width={1250} height={750}/>
                      <p className="legend">Creation de site vitrine sous Wordpress</p>
  
                  </div>
                  <div>
                      <img src="/cardjavascript.png" alt="image4" width={1250} height={750}/>
                      <p className="legend">Application web sur mesure</p>
  
                  </div>
                  <div>
                      <img src="/entrepreneur.jpg" alt="image5" width={1250} height={750}/>
                      <p className="legend">Entreprendre et optimiser votre entreprise 5</p>
  
                  </div>
              </Carousel>
            </div>

    )

}

export default Hero;