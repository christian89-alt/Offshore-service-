import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '../styles/style.css';
import Navbar from "../components/Navbar";
import Slider from "../components/Slider"

function MyApp({ Component, pageProps }) {
  return(

    <div>
      
      
      <Navbar/>

      <Slider/>
      
    <Component {...pageProps} />
  </div>

  )

  
 
}

export default MyApp
