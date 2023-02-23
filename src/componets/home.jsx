import React,{useState} from "react";
import robot from '../Assets/img/Robotino 1.png';
import gyl from '../Assets/img/G&L Blanco.png';
import mensaje from '../Assets/img/Mensaje.png';
import '../css/home.css';
import Forms from "../componets/Forms";

const Home=() =>{

  const[modal,setModal] = useState(false);
  const[Home, setHome] = useState(true);

  const openModal =()=>{
    setModal(true);
    setHome(false);
  }

return(
    <div>
         
     
      { 
      Home && (
       <div> 
        <div className="containerMsj">
           <img className="mensaje" src={mensaje}/>
           <h3>Bienvenido/a</h3>
         </div>
           <div className="robot"><img src={robot}/></div>
           <div className="gyl"><img src={gyl}/></div>
           <button onClick={openModal} className="buton">Empezar</button>
       </div> 
      )
      
      }
        {
          modal &&(
           <div>
            <div className="containerMsj2">
               <img className="mensaje2" src={mensaje}/>
               <h3>Registrate si quieres</h3>
            </div>
                 <div className="robot2"><img src={robot}/></div>
            <Forms/>
            </div> 
          )
        }
    </div>
);

};

export default Home;