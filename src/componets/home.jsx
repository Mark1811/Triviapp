import React from "react";
import robot from '../Assets/img/Robotino 1.png';
import gyl from '../Assets/img/G&L Blanco.png';
import mensaje from '../Assets/img/Mensaje.png';
import '../css/home.css';

const Home=() =>{

return(
    <div>
      <div> 
        <div className="containerMsj">
           <img className="mensaje" src={mensaje}/>
           <h3>Bienvenido/a</h3>
         </div>
           <div className="robot"><img src={robot}/></div>
           <div className="gyl"><img src={gyl}/></div>
           <button  className="buton">Empezar</button>
       </div>
    </div>
);

};

export default Home;