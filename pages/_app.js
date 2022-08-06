import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '../styles/style.css';
import Navbar from "../components/Navbar";




function MyApp({ Component, pageProps }) {
  return(

    <div>


      
      <Navbar/>

   
      
    <Component {...pageProps} />
  </div>

  )

  
 
}

export default MyApp
