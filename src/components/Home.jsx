import React, { useState } from "react";
import '../css/home.css';
import robotito from '../Assets/img/Robotino.png'
import msm from '../Assets/img/Mensaje.png'
import logo from '../Assets/img/G&L Blanco.png'
import ruleta from '../Assets/img/Ruleta.png'
import { NavLink } from "react-router-dom";


const Home=()=>{
   
    return (
      <div>

        <div className="header">
           
           <img src={robotito} className="robotino"/>

           <div className="mensaje">
             <div className="wrapper"> 
              <div className="bienvenido">
              <img src={msm} className="myt" alt="mensaje" />
              <div className="texto1"> <h1 >Bienvenido/a</h1></div>
              
              </div>
           
             </div>
               
           </div>
           

        </div>

        <div className="logo">

          <img src={logo} alt="gyl" className="gyl"/>
        </div> 
      
        <div className="empezar">
       
           <NavLink to= '/register'>  
              <button className="button">Empezar</button>
            </NavLink>
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
