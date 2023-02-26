import React,{createContext, useEffect, useState} from "react";

export const PreguntaContext = createContext();

export function PreguntaContextProvider(props){

    const [index, setIndex] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);
    const [preguntas, setPreguntas] = useState([]);
    const [respuestas, setRespuestas] = useState([]);
    const [respondido, setRespondido] = useState(false);
    const [colorRespuesta, setcolorRespuesta] = useState("");
    const [sel, setSel] = useState(false);
    const [openRobot,setOpenRobot] = useState([]);

    const resetearJuego = () => {
        setRespondido(false);
        setPorcentaje(0);
        setPreguntas([]);
        setRespuestas([]);
      };
    
      const siguientePregunta = () => {
        if (index < 4) {
            setIndex(index + 1);
            setRespondido(false);
            setSel(false);
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
        setSel(true);
        setOpenRobot(respuesta);
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

       const value ={
        index,
        porcentaje,
        preguntas,
        sel,
        openRobot,
        definirCorrecta,
        siguientePregunta,
       
       };

      return(
      <PreguntaContext.Provider value={value}>
         {props.children}
      </PreguntaContext.Provider>
      );
}