import React from "react";
import Home from '../componets/home';
import Pregunta from '../componets/Pregunta';
import Resultado from "../componets/Resultado";
import {BrowserRouter as Router,  Routes, Route} from "react-router-dom";
import Forms from "../componets/forms";


const Index = () =>{
       
    return(
  
    <Router>
       <Routes>
         <Route path='/' element={<Forms/>}/>
         <Route path='/pregunta' element={<Pregunta/>}/> 
         <Route path='/resultado' element={<Resultado/>}/> 
       </Routes>
    </Router>
   
    )   
}
export default Index;