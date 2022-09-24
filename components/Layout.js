import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { Footer } from "react-bulma-components";
;


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Slider />
      <main>{children}</main>
      <Footer />
    </>
  )
}