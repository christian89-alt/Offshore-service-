import React from "react";
import Link from "next/link";
import Hero from "./Hero";
import { Footer } from "react-bulma-components";



export default function Layout({ children }) {
  return (
    <>

      <Hero />
      
      <main>{children}</main>
      <Footer />
    </>
  )
}