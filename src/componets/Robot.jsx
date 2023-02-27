import React,{useContext} from 'react';
import robotinoFeliz from '../Assets/img/RobotinoFeliz.png';
import robotinoTriste from '../Assets/img/RobotinoTriste.png';
import { PreguntaContext } from "../context/PreguntaContext";
import '../css/robot.css';

const  Robot =()=>{
    const {sel,openRobot,openModal} = useContext(PreguntaContext);
    
    const elemento = document.getElementById("Rob");
        
        if(sel === true){
            elemento.style.opacity="1";
        }
        
        if(openModal === true){
            elemento.style.opacity="0"
        }
      

       if(openRobot === "Correcto"){
        const ele2 = document.getElementById("robT");
        ele2.style.visibility="hidden"; 
        const ele = document.getElementById("robF");
        ele.style.visibility="visible";     
       }
       if(openRobot==="Incorrecto"){
        const ele = document.getElementById("robF");
        ele.style.visibility="hidden";   
        const ele2 = document.getElementById("robT");
        ele2.style.visibility="visible"; 
        
       }


      

     return (
         <div id='Rob'>
              <img id='robF' className='robFeliz' src={robotinoFeliz}/>
              <img id='robT' className='robTriste' src={robotinoTriste}/>
         </div>
     );
 };
 export default Robot; 