import React,{ useContext} from 'react';
import '../css/Resultado.css';
import { PreguntaContext } from "../context/PreguntaContext";
import robot from '../Assets/img/Robotino 1.png';
import gyl from '../Assets/img/G&L Blanco.png';
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import {useNavigate } from 'react-router-dom';


function Resultado (){
    const {porcentaje} = useContext(PreguntaContext);
 
    
    let nav = useNavigate();
    const refresh=()=>{
      nav('/');
      
    }

     return (
    <div className="porcen2">
        <div className='resulDentro'>
           <img className='imgRobot' src={robot} alt="RobotGyl"/>
           <img className='imgGyl' src={gyl} loading="lazy"alt='logoGyl'/>
           <h1>¡¡Felicitaciones!! <br></br> Tu porcentaje ha sido de</h1>
           <h2 className='hGracia'>Muchas Gracias Por Participar</h2>
           <button onClick={refresh} className='btnHome'>Inicio</button> 
        </div>
      <div className='barra'>
        <ProgressBar
          percent={porcentaje}
          unfilledBackground="rgba(0, 0, 255, 0.2)"
          filledBackground="linear-gradient(to right, #184684, #0150bb)"
          height={40}
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
                <span className='porceRe'>{porcentaje}%</span>
              </div>
            )}
          </Step>
        </ProgressBar>
        </div>
        
      </div>
     );
 };
 export default Resultado;