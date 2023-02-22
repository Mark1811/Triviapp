import React, { useEffect, useState } from "react";

const Preguntas = () => {
  const [index, setIndex] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);
  const [preguntas, setPreguntas] = useState([]);
  const [respuestas, setRespuestas] = useState([]);

  const siguientePregunta = () => {
    if (index < 4) {
      setTimeout(() => {
        setIndex(index + 1);
      }, 1000);

      return;
    }
    setPorcentaje(0);
    setPreguntas([]);
    setRespuestas([]);
  };

  const definirCorrecta = (e) => {
    const opcionSeleccionada = e.target.innerHTML;
    const preguntaActual = preguntas[index];
    const respuesta =
      opcionSeleccionada === preguntaActual.opcionCorrecta
        ? "Correcto"
        : "Incorrecto";
    setRespuestas([...respuestas, respuesta]);
    console.log(respuestas);
    //siguientePregunta();
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
    <div className="m-5 border">
      <div className="text-center">
        <h1 className="capitalize text-xl text-white bg-cyan-900">
          {preguntas[index]?.categoria}
        </h1>
        <h2>{preguntas[index]?.descripcion}</h2>
        <div className="font-bold text-white">
          <h3
            className="bg-cyan-600 hover:bg-cyan-700 transition-colors my-1 mx-5 cursor-pointer"
            onClick={definirCorrecta}
          >
            {preguntas[index]?.opcionA}
          </h3>
          <h3
            className="bg-cyan-600 hover:bg-cyan-700 transition-colors my-1 mx-5 cursor-pointer"
            onClick={definirCorrecta}
          >
            {preguntas[index]?.opcionB}
          </h3>
          <h3
            className="bg-cyan-600 hover:bg-cyan-700 transition-colors my-1 mx-5 cursor-pointer"
            onClick={definirCorrecta}
          >
            {preguntas[index]?.opcionC}
          </h3>
          <h3
            className="bg-cyan-600 hover:bg-cyan-700 transition-colors my-1 mx-5 cursor-pointer"
            onClick={definirCorrecta}
          >
            {preguntas[index]?.opcionD}
          </h3>
          <h3
            className="bg-green-600 hover:bg-green-700 transition-colors my-1 mx-5 cursor-pointer"
            onClick={siguientePregunta}
          >
            Siguiente
          </h3>
        </div>
      </div>
      <h1 className="text-center">      <progress value={porcentaje} max="100">
        <span className="font-black">{porcentaje}% completado</span>
      </progress></h1>
      <h1 className="text-right">Pregunta {index + 1} / 5</h1>

    </div>
  );
};

export default Preguntas;
