import Link from "next/link";
import Image from "next/image";
import style from "../styles/Home.module.css"

const Card = () => {
  return (
   
    <div class="card">
      <div class="card-image" image is-4by3 >
        <Image src="/website.jpg" width={300} height={300} />
        <h2>Création de site </h2>
        <p>
          Dès sa création, nous concevons votre site internet pour qu'il évolue
          avec votre entreprise et qu'il vous accompagne dans le développement
          de votre chiffre d’affaires. En développant les fonctionnalités de
          votre site internet celui-ci peut également être connecté à de
          nombreuses interfaces comme des outils statistiques, vos réseaux
          sociaux, un CRM, des solutions de réservations en ligne. Confiez-nous
          la création de votre site et développez votre entreprise!!
        </p>
      </div>
      <div class="card-image" image is-4by3>
        <Image src="/stratégie digitale.jpg" width={300} height={300} />
        <h2>Stratégie digitale</h2>
        <p>
          Dès sa création, nous concevons votre site internet pour qu'il évolue
          avec votre entreprise et qu'il vous accompagne dans le développement
          de votre chiffre d’affaires. En développant les fonctionnalités de
          votre site internet celui-ci peut également être connecté à de
          nombreuses interfaces comme des outils statistiques, vos réseaux
          sociaux, un CRM, des solutions de réservations en ligne. Confiez-nous
          la création de votre site et développez votre entreprise!!
        </p>
      </div>

      <div class="card-image" image is-4by3>
        <Image src="/entrepreneur.jpg" width={300} height={300} />
        <h2>Accompagnement créateurs</h2>
        <p>
        Dès sa création, nous concevons votre site internet pour qu'il évolue
          avec votre entreprise et qu'il vous accompagne dans le développement
          de votre chiffre d’affaires. En développant les fonctionnalités de
          votre site internet celui-ci peut également être connecté à de
          nombreuses interfaces comme des outils statistiques, vos réseaux
          sociaux, un CRM, des solutions de réservations en ligne. Confiez-nous
          la création de votre site et développez votre entreprise!!
    
        </p>
      </div>
   
    </div>
  


    
  );
};

export default Card;
