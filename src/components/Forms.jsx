import React, { useState } from "react";
import '../css/forms.css';
import FormInput from '../components/FormInput';
import logo from '../Assets/img/G&L Blanco.png';
import { Form } from "react-router-dom";

const Forms=() =>{

   const [ values, setValues] = useState ({
       edad:"",
       nombre:"",
       telefono:"",
       email:"",

   });
   const input =[
       {
           id:1,
           name: "edad",
           type:"text",
           placeholder: "Edad",
           errorMessage:" Deberia incluir solo números",
           label: "Edad",
           pattern: "^[0-2]+$",
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
        name: "email",
        type:"email",
        placeholder: "Email",
        errorMessage:"Deberia ser una dirección de correo electronico válida ",
        label: "Email",
        required:true,

    },
   ];
   
    
    const handleSubmit = (e)=>{
        e.preventDefault();
      
    };
    const onChange =(e)=> {
      setValues({...values,[e.target.name]: e.target.value});
    };
     
    console.log(values);

    return (
    <div className="app">
        <form onSubmit={handleSubmit}>
            <h1> A Jugar</h1>
            {input.map((input)=>(
              <FormInput 
              key={input.id} {...input} 
              value={values[input.name]}
              onChange={onChange}/>

            ))}
        <button>Empezar</button>

        </form>
  
    </div>
    );
};

export default Forms;

