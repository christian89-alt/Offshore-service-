import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Footer from 'react-bulma-components';
import { Hero } from 'react-bulma-components';




function MyApp({ Component, pageProps }) {
  return(

    <div>
      <>
      <Hero/>
      </>


      

    

   
      
    <Component {...pageProps} />
  </div>

  )

  
 
}

export default MyApp
