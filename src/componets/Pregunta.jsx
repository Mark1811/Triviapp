import React, { useContext, useEffect, useState } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import '../css/Pregunta.css';
import Ruleta from '../componets/ruleta';
import Robot from "../componets/Robot";
import { PreguntaContext} from "../context/PreguntaContext";
import ClipLoader from "react-spinners/ClipLoader";


function Preguntas (){
   const {index,preguntas,definirCorrecta,porcentaje, referencias,solucion} = useContext(PreguntaContext);
   const[loadin,setLoadin] = useState(false);
   
    
   const categoModifi=(catego)=>{
    let categoria;
      switch(catego){
        case "tecnologia":
          categoria = "Tecnología";
          break;
        case "matematica":
          categoria = "Matemática"
          break;
        case "entretenimiento":
          categoria =  "Entretenimiento";
          break;
        case "geografia":
          categoria = "Geografía";
          break; 
        case "conocimientoGeneral":
          categoria = "Conocimiento General";
          break;
        default: categoria = "";      
         
      }
        
        return categoria;
    }
   
   useEffect(()=>{
    setLoadin(true)
    setTimeout(()=>{
      setLoadin(false)
    },2000)
   },[])
   


   return (
   <div>
  { loadin ?
    (
      <div className="spinner">  <ClipLoader loading={loadin} size={50} aria-label="Loading Spinner" /></div>
  
    )
    :
   ( <div className="preguntaConetenedor">
      <div > <Robot /></div>   
      <div className="cont-1">
        <h1 className="titulo">
        {categoModifi(preguntas[index]?.categoria)}
        </h1>
        <h2 className="descrip">{preguntas[index]?.descripcion}</h2>
        <h2 className="my-3 text-white hidden" ref={solucion}>
          Respuesta correcta: {preguntas[index]?.opcionCorrecta}
        </h2>

        <div className="text-white text-xl">
          <h3
            className="bg-[#090979] hover:bg-[#338BB8] transition-colors my-4 mx-5 cursor-pointer rounded-xl p-3"
            onClick={definirCorrecta}
           
            ref={referencias[0]}
          >
            {preguntas[index]?.opcionA}
          </h3>
          <h3
            className="bg-[#090979] hover:bg-[#338BB8] transition-colors my-4 mx-5 cursor-pointer rounded-xl p-3"
            onClick={definirCorrecta}
            ref={referencias[1]}
          >
            {preguntas[index]?.opcionB}
          </h3>
          <h3
            className="bg-[#090979] hover:bg-[#338BB8] transition-colors my-4 mx-5 cursor-pointer rounded-xl p-3"
            onClick={definirCorrecta}
            ref={referencias[2]}
          >
            {preguntas[index]?.opcionC}
          </h3>
          <h3
            className="bg-[#090979] hover:bg-[#338BB8] transition-colors my-4 mx-5 cursor-pointer rounded-xl p-3"
            onClick={definirCorrecta}
            ref={referencias[3]}
          >
            {preguntas[index]?.opcionD}
          </h3>
          
        </div>
      </div>
      <div className="porcen">
        <ProgressBar
          percent={porcentaje}
          unfilledBackground="rgba(0, 0, 255, 0.2)"
          filledBackground="linear-gradient(to right, #184684, #0150bb)"
          className="h-24"
          height={35}
         
        >
          <Step>
            {({ accomplished }) => (
              <div className="progress-step">
                {accomplished ? <i className="fas fa-check"></i> : null}
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <div className="progress-step">
                {accomplished ? <i className="fas fa-check"></i> : null}
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <div className="progress-step">
                {accomplished ? <i className="fas fa-check"></i> : null}
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <div className="progress-step">
                {accomplished ? <i className="fas fa-check"></i> : null}
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <div className="progress-step">
                {accomplished ? <i className="fas fa-check"></i> : null}
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <div className="progress-step">
                {accomplished ? <i className="fas fa-check"></i> : null}
                <span className="porcePregunta">{porcentaje}%</span>
              </div>
            )}
          </Step>
        </ProgressBar>
      </div>
    <Ruleta/>
    </div>
    )
  }
    
    </div>
  );
  
};

export default Preguntas;