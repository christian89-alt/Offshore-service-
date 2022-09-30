import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Card from "../components/Card";
import OffshoreTitle from "../components/OffshoreTitle";


function index() {
  return (
    <div>
      <h1 className="Offshore-title">
        {" "}
        <Hero />
        L'artisan de votre succès!!!{" "}
      </h1>
      <p className="text-view">
      Nous sommes une agence de conception et d'ingénierie web troyenne spécialisée dans le développement de sites et d'applications sur mesure. Nous privilégions une approche agile et transparente, basée sur des technologies solides et éprouvées (Laravel, Vue.js, React Native) afin que vos projets soient capables d'évoluer aisément dans ce vaste écosystème qu'est le web.

Ainsi, quel que soit le besoin, nous mettons tout en œuvre pour créer des outils adaptés à votre métier, faciles à utiliser, qui plaisent à nos clients mais aussi et surtout aux clients de nos clients…

… et toujours dans la bonne humeur !
       
      </p>
      <div className="puce">
        <li>Html 5, Css3, Javascript</li>
        <li>NextJs, React</li>
      </div>

      <Card />

      <Footer />
    </div>
  );
}

export default index;
