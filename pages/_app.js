import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '../styles/burger.css';
import Navbar from "../components/Navbar";
import { Hero } from 'react-bulma-components';




function MyApp({ Component, pageProps }) {
  return(

    <div>
      <>
      <Hero/>
      </>


      
      <Navbar/>

    

   
      
    <Component {...pageProps} />
  </div>

  )

  
 
}

export default MyApp
