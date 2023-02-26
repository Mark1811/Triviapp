import React from "react";
import Home from '../componets/home';
import Pregunta from '../componets/Pregunta';
import Resultado from "../componets/Resultado";
import {BrowserRouter as Router,  Routes, Route} from "react-router-dom";


const Index = () =>{
       
    return(
 
    <Router>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/pregunta' element={<Pregunta/>}/> 
         <Route path='/resultado' element={<Resultado/>}/> 
       </Routes>
    </Router>
   
   
    )   
}
export default Index;