import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Slider from "./slider";
import Footer from "./footer";


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