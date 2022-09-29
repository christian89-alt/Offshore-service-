import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Hero from "../components/Hero";

import Footer from "../components/Footer";
import style from "../styles/Home.module.css";
import { Hero } from "react-bulma-components";


export default function Contact(){

    return(

        
<div id="contact-form">
	<div>
		<h1>Ravi de vous entendre!!</h1>
		<h4>Vous avez une question ? N'hésitez pas à nous contacter.</h4> 
	</div>
		<p id="failure">Oopsie...Votre message n'a pas été envoyé.</p>  
		<p id="success">Votre message à bien été envoyé.Nous le traiterons aussi rapidement que possible.Merci!</p>

		   <form method="post" action="/">
			<div>
		      <label for="name">
		      	<span class="required">Nom: *</span> 
		      	<input type="text" id="name" name="name" value="" placeholder=" Votre Nom" required="required" tabindex="1" autofocus="autofocus" />
		      </label> 
			</div>
			<div>
		      <label for="email">
		      	<span class="required">Email: *</span>
		      	<input type="email" id="email" name="email" value="" placeholder="Votre Email" tabindex="2" required="required" />
		      </label>  
			</div>
			<div>		          
		      <label for="subject">
		      <span>Sujet: </span>
			      <select id="subject" name="sujet" tabindex="4">   
			         <option value="hello">Je veux un devis site</option>
			         <option value="quote">Contact pour une cession de conseil!</option>  
			         <option value="general">- Autres motifs - </option>
			      </select>
		      </label>
			</div>
			<div>		          
		      <label for="message">
		      	<span class="required">Message: *</span> 
		      	<textarea id="message" name="message" placeholder="Ecrivez votre message ici..." tabindex="5" required="required"></textarea> 
		      </label>  
			</div>
			<div>		           
		      <button name="submit" type="submit" id="submit" >Envoyer</button> 
			</div>
		   </form>

	</div>
    

    )
}

