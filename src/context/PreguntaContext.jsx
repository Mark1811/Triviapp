import React,{createContext, useEffect, useState, useRef} from "react";

export const PreguntaContext = createContext();

export function PreguntaContextProvider(props){

    const [index, setIndex] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);
    const [preguntas, setPreguntas] = useState([]);
    const [respuestas, setRespuestas] = useState([]);
    const [respondido, setRespondido] = useState(false);
    const solucion = useRef();
    const referencias = [useRef(), useRef(), useRef(), useRef()];
    const [sel, setSel] = useState(false);
    const [openRobot,setOpenRobot] = useState([]);
    const [openModal, setModal] = useState();
    

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
            resetearBackground();
            solucion.current.classList.add("hidden");
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
        referencias,
        solucion,
        openModal,
        setModal,
       
       };

      return(
      <PreguntaContext.Provider value={value}>
         {props.children}
      </PreguntaContext.Provider>
      );
}