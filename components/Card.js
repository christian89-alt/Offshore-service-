import React from "react"
import Link from "next/link"
import Image from "next/image"



const Card =()=>{

    return(
     
  <div className="column">
  <div class="card">
  <Image src="/taxe 1.jpg" alt="Avatar" style="width:100%" width={330} height={330}></Image>
  <div class="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
</div>
  <div className="column">
  <div className="card">
  <Image src="/taxe 1.jpg" alt="Avatar" style="width:100%" width={330} height={330}></Image>
  <div class="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
</div>2</div>
  <div className="column">
  <div className="card">
  <Image src="/taxe 1.jpg" alt="Avatar" style="width:100%" width={330} height={330}></Image>
  <div className="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
</div>3</div>
  <div className="column">
  <div className="card">
  <Image src="/taxe 1.jpg" alt="Avatar" style="width:100%" width={330} height={330}></Image>
  <div className="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
</div>4</div>
</div>

        
        
    )

}

export default Card;
