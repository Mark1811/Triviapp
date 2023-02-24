import React, { useEffect, useState } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

const Preguntas = () => {
  const [index, setIndex] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);
  const [preguntas, setPreguntas] = useState([]);
  const [respuestas, setRespuestas] = useState([]);
  const [respondido, setRespondido] = useState(false);
  const [colorRespuesta, setcolorRespuesta] = useState("");

  const resetearJuego = () => {
    setRespondido(false);
    setPorcentaje(0);
    setPreguntas([]);
    setRespuestas([]);
  };

  const siguientePregunta = () => {
    if (index < 4) {
      setTimeout(() => {
        setIndex(index + 1);
        setRespondido(false);
      }, 1000);
      return;
    }
    resetearJuego();
  };

  const definirCorrecta = (e) => {
    if (respondido) {
      return;
    }
    setRespondido(true);
    const opcionSeleccionada = e.target.innerHTML;
    const preguntaActual = preguntas[index];
    const respuesta =
      opcionSeleccionada === preguntaActual.opcionCorrecta
        ? "Correcto"
        : "Incorrecto";
    setRespuestas([...respuestas, respuesta]);
    console.log(respuestas);
  };

  useEffect(() => {
    const url = "http://localhost:8080/api/juego/preguntas";
    const peticion = fetch(url);
    peticion
      .then((datos) => datos.json())
      .then((lectura) => {
        setPreguntas(lectura);
      });
  }, []);

  useEffect(() => {
    const numCorrectas = respuestas.filter(
      (respuesta) => respuesta === "Correcto"
    ).length;
    const porcentajeCalculado = (numCorrectas / 5) * 100;
    setPorcentaje(porcentajeCalculado);
  }, [respuestas]);

  return (
    <div className="m-5 bg-transparent">
      <div className="text-center">
        <h1 className="capitalize text-xl text-white font-bold bg-[#0958b7]">
          {preguntas[index]?.categoria}
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
          <h3
            className="bg-green-600 hover:bg-green-700 transition-colors my-3 mx-5 cursor-pointer"
            onClick={siguientePregunta}
          >
            Siguiente
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
    </div>
  );
};
export default Preguntas;

/*
import React, { useEffect, useState } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

const Preguntas = () => {
  const [index, setIndex] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);
  const [preguntas, setPreguntas] = useState([]);
  const [respuestas, setRespuestas] = useState([]);
  const [respondido, setRespondido] = useState(false);

  const resetearJuego = () => {
    setRespondido(false);
    setPorcentaje(0);
    setPreguntas([]);
    setRespuestas([]);
  };

  const siguientePregunta = () => {
    if (index < 4) {
      setTimeout(() => {
        setIndex(index + 1);
        setRespondido(false);
      }, 1000);
      return;
    }
    resetearJuego();
  };

  const definirCorrecta = (e) => {
    if (respondido) {
      return;
    }
    setRespondido(true);
    const opcionSeleccionada = e.target.innerHTML;
    const preguntaActual = preguntas[index];
    const respuesta =
      opcionSeleccionada === preguntaActual.opcionCorrecta
        ? "Correcto"
        : "Incorrecto";
    setRespuestas([...respuestas, respuesta]);
    console.log(respuestas);
  };

  useEffect(() => {
    const url = "http://localhost:8080/api/juego/preguntas";
    const peticion = fetch(url);
    peticion
      .then((datos) => datos.json())
      .then((lectura) => {
        setPreguntas(lectura);
      });
  }, []);

  useEffect(() => {
    const numCorrectas = respuestas.filter(
      (respuesta) => respuesta === "Correcto"
    ).length;
    const porcentajeCalculado = (numCorrectas / 5) * 100;
    setPorcentaje(porcentajeCalculado);
  }, [respuestas]);

  return (
    <div className="m-5 bg-transparent">
      <div className="text-center">
        <h1 className="capitalize text-xl text-white font-bold bg-[#0958b7]">
          {preguntas[index]?.categoria}
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
          <h3
            className="bg-green-600 hover:bg-green-700 transition-colors my-3 mx-5 cursor-pointer"
            onClick={siguientePregunta}
          >
            Siguiente
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
    </div>
  );
};
export default Preguntas;
*/
