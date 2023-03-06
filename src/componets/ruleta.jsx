import React,{ useContext} from 'react';
import '../css/ruleta.css';
import robotito4 from '../Assets/img/Robotino 1.png';
import { PreguntaContext } from "../context/PreguntaContext";
import {useNavigate } from 'react-router-dom';
import sonido from '../Assets/audio/rul4.mp3';
import modalTrue from '../Assets/audio/modalTrue.mp3'

function Ruleta(){
    const {index,sel,siguientePregunta,preguntas,openModal,setModal} = useContext(PreguntaContext);

    let naveg = useNavigate();
    const ele = document.getElementById("girar");
    const contRuleta = document.getElementById("container");
    
    const onClickButtonCancel =() =>{
        setModal(false)  
        contRuleta.style.visibility="hidden";
       
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
    let sound = new Audio();
    sound.src = sonido;
    let mod = new Audio();
    mod.src = modalTrue;
   
   

    function spin(){
        sound.play();
        mod.play();
        mod.pause();
        const box = document.getElementById("box");
        const box1 = document.getElementById("box1");
        const element = document.getElementById("mainbox");
        ele.style.visibility="hidden";
       
        if(index === 3){
            ele.innerHTML="Finalizar";
            ele.style.backgroundImage= "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);"
        } 
       
        let selectedItem = " ";
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
        
        if(TC.includes(results[0])) selectedItem = "Tecnologia";
        if(GE.includes(results[0])) selectedItem = "Geografia";     
        if(MA.includes(results[0])) selectedItem = "Matematicas";
        if(EN.includes(results[0])) selectedItem = "Entretenimiento";
        if(CG.includes(results[0])) selectedItem = "Conocimiento General";

        
       box.style.setProperty("transition", "all ease 3s");
        box.style.transform = "rotate(" + results[0] + "deg)";
        box1.style.setProperty("transition", "all ease 3s");
        box1.style.transform = "rotate(" + results[0] + "deg)";
        element.classList.remove("animate");
        
            
       
        setTimeout(function(){
          element.classList.add("animate");
          setModal(true);
          siguientePregunta();
          mod.play();
        },2700);

       
        if(index === 4){
            setTimeout(function(){
                 naveg('/resultado')
               },2000);
        }
    
        setTimeout(function(){
            box.style.setProperty("transition", "initial");
            box.style.transform = "rotate(90deg)";
            box1.style.setProperty("transition", "initial");
            box1.style.transform = "rotate(90deg)";
        }, 4000);
        
    }
     
    if(sel === true){
        ele.style.visibility="visible";
        contRuleta.style.visibility="visible";
    }

    return(
    <div id='container'> 
       
            <div className='mainbox ' id="mainbox">
            <button id='girar' className='spin ' onClick={spin}>GIRAR</button>
             <div className='box' id='box'>
                <div className='box1' id='box1'>
                    <span className='font span1'><h5></h5></span>
                    <span className='font span2'><h5></h5></span>
                    <span className='font span3'><h5></h5></span>
                    <span className='font span4'><h5></h5></span>
                    <span className='font span5'><h5></h5></span> 
                    <span className='font span6'><h5></h5></span> 
                    <span className='font span7'><h5></h5></span> 
                    <span className='font span8'><h5></h5></span> 
                    <span className='centro'></span>
                </div>
             </div>
             <div className='base'></div> 
                  
            </div>
     
           
             { openModal && (
            <div className='modal'>
                <div className='modalDentro'>
                   <img alt='robotino' className='robotino4' src={robotito4}/> 
                  <h2>{preguntas[index]?.categoria}</h2>
                  <button onClick={onClickButtonCancel}>Responder</button> 
                </div>
            

            </div>
            )}

    </div>
    )
}

export default Ruleta;