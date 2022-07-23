import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Slider from "../components/Slider";
import style from "../styles/Home.module.css";

function index() {
  return (
    <div>
      <h1> Offshore Service Cabinet conseil en transition numérique </h1>

      <Card />
      <Image src="/taxe 1.jpg" width={300} height={300}/>

      <p>
        Id tempor laboris labore qui. Eu veniam anim sunt labore et ad. Do
        occaecat pariatur magna proident anim officia aute ea ex excepteur sit
        culpa Lorem. Nulla cupidatat aliquip deserunt aliqua sit eu enim sint ad
        nostrud exercitation. Ullamco enim sunt mollit nostrud proident.m
      </p>
      <div className="Column">
        <div class="columns is-mobile">
          <div class="column">
          <Image src="/taxe 1.jpg" width={300} height={300}/>
            Sint sunt nostrud culpa exercitation exercitation esse esse.1</div>
          <div class="column">
          <Image src="/taxe 1.jpg" width={300} height={300}/>
          2Magna esse officia ut amet id in dolore non ad tempor.</div>
          <div class="column">
          <Image src="/taxe 1.jpg" width={300} height={300}/>
          Anim et velit ea duis anim.3</div>
          <div class="column">
          <Image src="/taxe 1.jpg" width={300} height={300}/>
          Exercitation do do commodo ea qui.4</div>
        </div>
      </div>
      <p>
        Excepteur reprehenderit exercitation nisi nisi occaecat reprehenderit
        mollit. Ad id adipisicing nisi dolore do voluptate consectetur
        adipisicing mollit velit aute enim eu. Mollit in ut sint cillum sint
        aliquip consectetur nisi incididunt culpa mollit ad.
      </p>

      <Footer />
    </div>
  );
}

export default index;
