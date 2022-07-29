import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import style from "../styles/Home.module.css";

function index() {
  return (
    <div>

      
      
      <h1> Offshore Service Cabinet conseil en transition numérique </h1>
      <p>
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
  );
}

export default index;
