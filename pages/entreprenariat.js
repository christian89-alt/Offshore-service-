import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Card from "../components/Card";

const About = () => {
  return (
    <div>
      <Hero />

      <h1>A propos d'Offshores Services</h1>

      <p>
        Proident nisi ipsum labore adipisicing commodo. Velit amet irure nisi
        laboris anim laboris ut adipisicing esse pariatur. Deserunt irure anim
        duis sunt deserunt. Nisi cupidatat tempor et et minim Lorem quis cillum
        consectetur id sit. Dolore qui pariatur consequat sint. Mollit nisi et
        consectetur ut eiusmod. Nisi cillum anim consequat exercitation.
      </p>

      <Footer/>
    </div>
    
  );
};

export default About;
