import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Card from "../components/Card";



function dev (){

    return(

        <div>
      
      
        
          
          {" "}
          <Hero/>
          <h1 className="Offshore-title">
          Offshore Service Cabinet conseil en transition numérique{" "}
        </h1>
        <p className="text-view">
          Laborum ullamco aliquip adipisicing fugiat laborum irure commodo
          consequat deserunt ut ullamco excepteur duis. Nulla nisi tempor ullamco
          velit commodo ut dolore laborum. Ea commodo nisi irure incididunt anim
          enim labore velit nostrud consectetur duis consequat Lorem velit.
          Ullamco ullamco consectetur do culpa qui minim consectetur dolor
          eiusmod. Proident quis quis exercitation excepteur irure deserunt anim
          irure minim. Anim laborum nulla anim mollit fugiat eiusmod consectetur.
          Ullamco fugiat esse incididunt aute nostrud dolore nisi et eiusmod
          cillum dolore consequat.
        </p>
    
        <Card />
    
        <Footer />
      </div>


    )

  
}

export default dev;