import React, { useState } from "react";
import '../css/home.css';
import robotito from '../Assets/img/Robotino.png'
import msm from '../Assets/img/welcome.png'
import logo from '../Assets/img/G&L Blanco.png'
import ruleta from '../Assets/img/Ruleta.png'
import { NavLink } from "react-router-dom";


const Home=()=>{
   
    return (
      <div className="home">
      <div className="top-left"> <img src={robotito} className="robotino"/> 
              <div className="top-left-msm">
                    <img src={msm} className="myt" alt="mensaje" />
              </div>    
     </div> 
       
          <div className="centered"> 
                <img src={logo} alt="gyl" className="gyl"/>
                
           </div>          

      <div className="bottom-empezar">
                <NavLink to= '/register'>  
                  <button className="button">Empezar</button>
                </NavLink></div>
      <div className="bottom-right"> <img src={ruleta} alt="ruleta" className="ruleta"/></div>    
  
      </div>
    )
};
export default Home;
