import React,{ useContext, useState} from 'react';
import '../css/ruleta.css';
import Robot from "./Robot";
import { PreguntaContext } from "../context/PreguntaContext";



//import sonido from '../Assets/rule.mp3';

function Ruleta(){
    const {index,sel,siguientePregunta,openRobot,preguntas} = useContext(PreguntaContext);

    const ele = document.getElementById("girar");
    const elemento = document.getElementById("Rob");
    const [openModal, setModal] = useState(false);
   
    
    const onClickButtonCancel =() =>{
        setModal(false)  
        elemento.style.opacity="0";
    }
      
    function shuffle(array){
       var currentIndex = array.length, randomIndex;
     
       while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[currentIndex],
            array[currentIndex],

        ];
       }
       return array;
    }
    //let sound = new Audio();
    //sound.src = sonido
       

    function spin(){
       // sound.play();
     
        const box = document.getElementById("box");
        const element = document.getElementById("mainbox");
        ele.style.visibility="hidden";
        let selectedItem = "";
        if(index === 3){
            ele.innerHTML="Finalizar";
            ele.style.backgroundImage= "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);"
    
        }
       
    
        let TC = shuffle([1890,2250,2610]);
        let GE = shuffle([1850,2210,2570]);
        let MA = shuffle([1770,2130,2490]);
        let EN = shuffle([1810,2170,2530]);
        let CG = shuffle([1630,1990,2350]);
        
        let results = shuffle([
            TC[0],
            GE[0],
            MA[0],
            EN[0],
            CG[0],
        ]);
        
        if(TC.includes(results[0])) selectedItem ="Tecnologia";
        if(GE.includes(results[0])) selectedItem ="Geografia";     
        if(MA.includes(results[0])) selectedItem ="Matematicas";
        if(EN.includes(results[0])) selectedItem ="Entretenimiento";
        if(CG.includes(results[0])) selectedItem ="Conocimiento General";

        
       box.style.setProperty("transition", "all ease 3s");
        box.style.transform = "rotate(" + results[0] + "deg)";
        element.classList.remove("animate");
         
        setTimeout(function(){
           element.classList.add("animate");
          setModal(true);
          siguientePregunta();
        },3000);
    
        setTimeout(function(){
            box.style.setProperty("transition", "initial");
            box.style.transform = "rotate(90deg)";
        }, 4000);
        
    }
     
    if(sel === true){
        ele.style.visibility="visible";
        elemento.style.opacity="1"
    }

    return(
    <div  className="container"> 
       
            <div className='mainbox ' id="mainbox">
            <button id='girar' className='spin ' onClick={spin}>GIRAR</button>
             <div className='box' id='box'>
                <div className='box1'>
                    <span className='font span1'><h5>G&L</h5></span>
                    <span className='font span2'><h5>G&L</h5></span>
                    <span className='font span3'><h5>G&L</h5></span>
                    <span className='font span4'><h5>G&L</h5></span> 
                    <span className='centro'></span>
                </div>
                
             </div>           
            </div>
     
           
             { openModal && (
            <div className='modal'>
                <div className='modalDentro'>
                  <h2>{preguntas[index]?.categoria}</h2>
                  <button onClick={onClickButtonCancel}>Responder</button> 
                </div>
            </div>
            )}

              <div id='Rob'> <Robot  openRobot={openRobot} /></div>   
    </div>
    )
}

export default Ruleta;