import React,{useState} from 'react';
import '../css/ruleta.css';


//import sonido from '../Assets/rule.mp3';

function Ruleta({siguientePregunta}){
    
    const [openModal, setModal] = useState(false);
    
    const onClickButtonCancel =()=>{
        setModal(false);
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
        let selectedItem = "";
         
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

        
       box.style.setProperty("transition", "all ease 5s");
        box.style.transform = "rotate(" + results[0] + "deg)";
        element.classList.remove("animate");
         
        setTimeout(function(){
            siguientePregunta();
            element.classList.add("animate");
        },5000);
         
        setTimeout(function(){
            
        },5500);
    
        setTimeout(function(){
            box.style.setProperty("transition", "initial");
            box.style.transform = "rotate(90deg)";
        }, 6000);
        
    }


    return(
    <div> 
    {/*<img className='robot' src={logoRboto}/>
       <img className='logoGyl'  src={logoGyl}/>  
       */}
       
       <button className='spin' onClick={spin}>GIRAR</button>
            <div className='mainbox' id="mainbox">
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
        <div className='base'></div> 
           
             { openModal && (
            <div className='modal'>
                <div className='modalDentro'>
                  <h2>{openModal}</h2>
                  <button onClick={onClickButtonCancel}>Responder</button> 
                </div>
            </div>
            )}
    </div>
    )
}

export default Ruleta;