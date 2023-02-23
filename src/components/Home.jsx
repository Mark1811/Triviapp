import React, { useState } from "react";
import '../css/home.css';
import robotito from '../Assets/img/Robotino.png'
import msm from '../Assets/img/Mensaje.png'
import logo from '../Assets/img/G&L Blanco.png'
import ruleta from '../Assets/img/Ruleta.png'



const Home=()=>{

    return (
      <div>

        <div className="header">
           
           <img src={robotito} className="robotino"/>
           
           <img src={msm} alt="mensaje" className="mensaje"/>
        </div>

        <div className="logo">
          <img src={logo} alt="gyl" className="gyl"/>
        </div> 
      
        <div className="empezar">
        <button className="button">Empezar</button>
        </div>

        <div className="rob">
          
        </div>

        <div className="rulrul">
           <img src={ruleta} alt="ruleta" className="ruleta"/>
        </div>
        
      </div>
    )

};
export default Home;
