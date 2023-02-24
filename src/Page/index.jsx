import React from "react";
import Home from '../componets/home';
import Pregunta from '../componets/Pregunta';
import {BrowserRouter as Router,  Routes, Route} from "react-router-dom";

const Index = () =>{
       
    return(
        <Router>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/pregunta' element={<Pregunta/>}/> 
       </Routes>
    </Router>
    )   
}
export default Index;