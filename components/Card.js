import React from "react"
import Link from "next/link"
import Image from "next/image"



const Card =()=>{

    return(
     
  <div className="column">
  <div class="card">
  <Image className="image1" src="/management de projet.jpg" alt="Avatar" style="width:100%" width={330} height={330}></Image>
  <div className="container">
    <h4 className="h4" >Gestion de projet</h4>
    <p>Culpa nisi excepteur velit irure et id exercitation ipsum. Nostrud amet qui cillum proident ut amet. Sunt non ipsum dolore velit pariatur. Excepteur nulla irure exercitation velit magna nostrud duis minim ipsum ea sint laborum mollit ad. Incididunt do in ut duis consectetur cupidatat officia. Aliqua sit dolor aute cillum elit id ipsum quis esse aute excepteur.</p>
  </div>
</div>
  <div className="column">
  <div className="card">
  <Image className="image1" src="/entrepreneur.jpg" alt="Avatar" style="width:100%" width={330} height={330}></Image>
  <div class="container">
    <h4 className="h4">Accompagnement et gestion d'entreprise</h4>
    <p>Occaecat duis est cillum veniam est et tempor. Elit dolor elit laborum sint esse minim eiusmod quis aliquip magna. Ad in anim id id veniam ullamco Lorem veniam aute duis culpa.</p>
  </div>
</div></div>
  <div className="column">
  <div className="card">
  <Image className="image1"  src="/website.jpg" alt="Avatar" style="width:100%" width={330} height={330}></Image>
  <div className="container">
    <h4>Création de site</h4>
    <p>Esse ea esse eiusmod deserunt occaecat id amet anim amet occaecat aliquip nulla est consectetur. Nostrud esse Lorem veniam cillum. Et commodo aute laboris sit sint in. Anim reprehenderit commodo fugiat anim officia labore eiusmod excepteur exercitation commodo consequat sunt. Adipisicing deserunt eu esse ea sit laborum culpa tempor. Id consectetur velit aute nulla. Laborum sint excepteur non nulla eiusmod dolore non do pariatur.
    </p>
  </div>
</div></div>
  
</div>

        
        
    )

}

export default Card;
