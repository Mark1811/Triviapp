import React, { useState } from "react";
import '../css/forms.css';
import FormInput from '../componets/FormImput';
import logo from '../Assets/img/G&L Blanco.png';
import { useNavigate } from 'react-router-dom';

const Forms=() =>{
    let navegar = useNavigate()
   const [ form, setForm] = useState ({
       edad:"",
       nombre:"",
       telefono:"",
       mail:"",

   });
   const input =[
       {
           id:1,
           name: "edad",
           type:"text",
           placeholder: "Edad",
           errorMessage:" Deberia incluir solo números",
           label: "Edad",
           pattern: "^[0-90]+$",
           required:true,

       },
       {
        id:2,
        name: "nombre",
        type:"text",
        placeholder: "Nombre",
        errorMessage:" Deberia tener 3-16 caracteres y no deberia incluir ningun tipo de caracteres!",
        label: "Nombre",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required:true,
    },
    {
        id:3,
        name: "telefono",
        type:"text",
        placeholder: "Telefono",
        errorMessage:"Deberia incluir solo números ",
        label: "Telefono",
        pattern: "^[0-8]+$",
        required:true,

    },
    {
        id:4,
        name: "mail",
        type:"email",
        placeholder: "Email",
        errorMessage:"Deberia ser una dirección de correo electronico válida ",
        label: "Email",
        required:true,

    },
   ];
    const handleSubmit = (e)=>{
        e.preventDefault();
        addUser(form);
        navegar('/pregunta');
    };
    const onChange =(e)=> {
      setForm({...form,[e.target.name]: e.target.value});
    };
     
    const addUser =(data)=>{
         const requesInit = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        }
        
        fetch('http://localhost:8080/api/juego/registro', requesInit)
        .then(res => res.json())
      };

     const OnclikAddUser= ()=>{
        addUser(form);
        navegar('/pregunta');
     }


    return (
    <div className="app">
           <img className="logoModal" src={logo}/>
        <form onSubmit={handleSubmit}>
           
            {
            input.map((input)=>(
              <FormInput 
              key={input.id} {...input} 
              value={form[input.name]}
              onChange={onChange}/>

            ))}
           <button  type="submit" className="botonEmpezar" >Empezar</button>
        </form>
     
    </div>
    );
};

export default Forms;