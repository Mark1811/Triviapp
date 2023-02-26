import React, { useEffect, useRef, useState } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

const Preguntas = () => {
  const [index, setIndex] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);
  const [preguntas, setPreguntas] = useState([]);
  const [respuestas, setRespuestas] = useState([]);
  const [respondido, setRespondido] = useState(false);
  const solucion = useRef();
  const referencias = [useRef(), useRef(), useRef(), useRef()];

  const resetearBackground = () => {
    referencias.forEach((e) => {
      if (e.current.classList.contains("bg-green-600")) {
        e.current.classList.remove("bg-green-600");
      }
      if (e.current.classList.contains("bg-red-700/75")) {
        e.current.classList.remove("bg-red-700/75");
      }
      e.current.classList.add("bg-[#0958b7]", "hover:bg-[#0c5fdd]");
    });
  };

  const resetearJuego = () => {
    setRespondido(false);
    setPorcentaje(0);
    setPreguntas([]);
    setRespuestas([]);
  };

  const colorearSegunRespuesta = (e, respuesta) => {
    if (respuesta === "Incorrecto") {
      e.target.classList.remove("bg-[#0958b7]", "hover:bg-[#0c5fdd]");
      e.target.classList.add("bg-red-700/75");
    } else {
      e.target.classList.remove("bg-[#0958b7]", "hover:bg-[#0c5fdd]");
      e.target.classList.add("bg-green-600");
    }
  };

  const siguientePregunta = () => {
    if (index < 4) {
      setTimeout(() => {
        resetearBackground();
        solucion.current.classList.add("hidden");
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
    solucion.current.classList.remove("hidden");
    setRespondido(true);
    const opcionSeleccionada = e.target.innerHTML;
    const preguntaActual = preguntas[index];
    const respuesta =
      opcionSeleccionada === preguntaActual.opcionCorrecta
        ? "Correcto"
        : "Incorrecto";
    setRespuestas([...respuestas, respuesta]);

    colorearSegunRespuesta(e, respuesta);
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
    <div className="m-5 bg-cyan-600 p-3">
      <div className="text-center">
        <h1 className="capitalize text-2xl text-white font-bold bg-[#0958b7]">
          {preguntas[index]?.categoria}
        </h1>
        <h2 className="my-3 text-white text-xl">{preguntas[index]?.descripcion}</h2>
        <h2 className="my-3 text-white hidden" ref={solucion}>
          Respuesta correcta: {preguntas[index]?.opcionCorrecta}
        </h2>

        <div className="text-white text-xl">
          <h3
            className="bg-[#0958b7] hover:bg-[#0c5fdd] transition-colors my-4 mx-5 cursor-pointer rounded-xl p-1"
            onClick={definirCorrecta}
            ref={referencias[0]}
          >
            {preguntas[index]?.opcionA}
          </h3>
          <h3
            className="bg-[#0958b7] hover:bg-[#0c5fdd] transition-colors my-4 mx-5 cursor-pointer rounded-xl p-1"
            onClick={definirCorrecta}
            ref={referencias[1]}
          >
            {preguntas[index]?.opcionB}
          </h3>
          <h3
            className="bg-[#0958b7] hover:bg-[#0c5fdd] transition-colors my-4 mx-5 cursor-pointer rounded-xl p-1"
            onClick={definirCorrecta}
            ref={referencias[2]}
          >
            {preguntas[index]?.opcionC}
          </h3>
          <h3
            className="bg-[#0958b7] hover:bg-[#0c5fdd] transition-colors my-4 mx-5 cursor-pointer rounded-xl p-1"
            onClick={definirCorrecta}
            ref={referencias[3]}
          >
            {preguntas[index]?.opcionD}
          </h3>
          <h3
            className="bg-green-600 hover:bg-green-600 transition-colors my-4 mx-5 cursor-pointer"
            onClick={siguientePregunta}
          >
            Siguiente
          </h3>
        </div>
      </div>
      <div className="progress-bar-container mx-10 text-xs text-white ">
        <ProgressBar
          percent={porcentaje}
          unfilledBackground="rgba(0, 0, 255, 0.2)"
          filledBackground="linear-gradient(to right, #184684, #0150bb)"
          className="h-24"
          height={20}
          text="Puntaje"
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
                <span>{porcentaje}%</span>
              </div>
            )}
          </Step>
        </ProgressBar>
      </div>
    </div>
  );
};
export default Preguntas;