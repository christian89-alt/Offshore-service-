import Link from "next/link";
import Image from "next/image"


const Navbar =()=> {

  return(
    <nav>
      
      <div className="logo">
        <Image src="/logo.png" width={128} height={77} />
      </div>
      <Link href="/"><a>Accueil</a></Link>
      <Link href="/about"><a>Création site internet </a></Link>
      <Link href="/portfolio"><a>Développement mobile </a></Link>
      <Link href="/portfolio"><a>Gestion de projet </a></Link>
      <Link href="/contact"><a>Contact </a></Link>
    </nav>
  )


}

export default Navbar;
