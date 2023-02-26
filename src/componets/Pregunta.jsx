import React, { useEffect, useState, useContext } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import Ruleta from '../componets/ruleta';
import { PreguntaContext, PreguntaContextProvider } from "../context/PreguntaContext";

export default ()=>
<PreguntaContextProvider>
  <Preguntas></Preguntas>
</PreguntaContextProvider>


function Preguntas (){
   const {index,preguntas,definirCorrecta,porcentaje} = useContext(PreguntaContext);
   
   const preguntasBack={
    categoria:"",
  }
   setTimeout(()=>{
    preguntasBack.categoria = preguntas[index]?.categoria;
    const categoria = document.getElementById('categoria');
    categoria.innerHTML = preguntasBack.categoria;
   },1500)


  return (
    <div className="m-5 bg-transparent">
      <div className="text-center">
        <h1 id="categoria" className="capitalize text-xl text-white font-bold bg-[#0958b7]">
            
        </h1>
        <h2 className="my-3">{preguntas[index]?.descripcion}</h2>
        <div className="text-white">
          <h3
            className="bg-[#0958b7] hover:bg-[#0c5fdd] transition-colors my-3 mx-5 cursor-pointer"
            onClick={definirCorrecta}
          >
            {preguntas[index]?.opcionA}
          </h3>
          <h3
            className="bg-[#0958b7] hover:bg-[#0c5fdd] transition-colors my-3 mx-5 cursor-pointer"
            onClick={definirCorrecta}
          >
            {preguntas[index]?.opcionB}
          </h3>
          <h3
            className="bg-[#0958b7] hover:bg-[#0c5fdd] transition-colors my-3 mx-5 cursor-pointer"
            onClick={definirCorrecta}
          >
            {preguntas[index]?.opcionC}
          </h3>
          <h3
            className="bg-[#0958b7] hover:bg-[#0c5fdd] transition-colors my-3 mx-5 cursor-pointer"
            onClick={definirCorrecta}
          >
            {preguntas[index]?.opcionD}
          </h3>
          
        </div>
      </div>
      <div className="progress-bar-container mx-10 text-xs text-white bg-gray-800">
        <ProgressBar
          percent={porcentaje}
          filledBackground="linear-gradient(to right, #184684, #0150bb)"
          className="h-24"
        >
          <Step>
            {({ accomplished }) => (
              <div className="progress-step">
                {accomplished ? <i className="fas fa-check"></i> : null}
                <span>0%</span>
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <div className="progress-step">
                {accomplished ? <i className="fas fa-check"></i> : null}
                <span>20%</span>
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <div className="progress-step">
                {accomplished ? <i className="fas fa-check"></i> : null}
                <span>40%</span>
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <div className="progress-step">
                {accomplished ? <i className="fas fa-check"></i> : null}
                <span>60%</span>
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <div className="progress-step">
                {accomplished ? <i className="fas fa-check"></i> : null}
                <span>80%</span>
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <div className="progress-step">
                {accomplished ? <i className="fas fa-check"></i> : null}
                <span>100%</span>
              </div>
            )}
          </Step>
        </ProgressBar>
      </div>
      <Ruleta/>
    </div>
  );
};
