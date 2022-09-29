import React from "react"
import Link from "next/link";
import Image from "next/image"


const Hero =()=> {

    return(

     <section>
  
  
  <nav className="nav">
  

      
      <div className="logo" role="navigation" aria-label="menu de navigation">
      <div class="navbar-brand">
    
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

      </div>
      <Link href="/"><a>Accueil</a></Link>
      <Link href="/dev web"><a>Développement web & Mobile </a></Link>
      <Link href="/entreprenariat"><a>Services entreprise</a></Link>
      <Link href="/project management"><a>Gestion de projet </a></Link>
      <Link href="/contact"><a>Contact </a></Link>
      <div class="hero-body">
  </div>
  
    </nav>
</section>
       
        
      
  

    


  


           


    )

}

export default Hero;