import React,{useContext} from 'react';
import robotinoFeliz from '../Assets/img/RobotinoFeliz.png';
import robotinoTriste from '../Assets/img/RobotinoTriste.png';
import robotinoPensativo from '../Assets/img/RobotinoPensativo.png';
import { PreguntaContext } from "../context/PreguntaContext";
import '../css/robot.css';

const  Robot =()=>{

    const {sel,openRobot,openModal} = useContext(PreguntaContext);
    const elemento = document.getElementById("Rob");
    const ele5 = document.getElementById('Pen');    

        if(sel === true){
            elemento.style.opacity="1";
            ele5.style.opacity='0'
        }
        
        if(openModal === true){
            elemento.style.opacity="0"; 
            setTimeout(()=>{
              ele5.style.opacity='1'; 
            },1000) 
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
        <div>
           <div id='Rob'>
                <img id='robF' className='robFeliz' src={robotinoFeliz}/>
                <img id='robT' className='robTriste' src={robotinoTriste}/>
           </div>

           <div id='Pen'>
              <img className='robPens' src={robotinoPensativo}/>
           </div>
           
         </div>
        
     );
 };
 export default Robot; 