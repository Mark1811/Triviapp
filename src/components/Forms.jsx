import React, { useState } from "react";
import '../css/forms.css';
import robotito from '../Assets/img/Robotino.png'
import registrarse from '../Assets/img/registrarse.png'
import FormInput from '../components/FormInput';
import logo from '../Assets/img/G&L Blanco.png';
import rul from '../Assets/img/Ruleta.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Forms=() =>{

   const navigate = useNavigate();
    const UserNull= {
        edad: null,
        nombre:null,
        telefono:null,
        mail:null,
        
    };

   const [ form, setForm] = useState (UserNull );

   const input =[
       {
           id:1,
           name: "edad",
           type:"text",
           placeholder: "Edad",
           errorMessage:" Deberia incluir solo números",
           label: "Edad",
           pattern: "^[0-9]+$",
         

       },
       {
        id:2,
        name: "nombre",
        type:"text",
        placeholder: "Nombre",
        errorMessage:" Deberia tener 3-16 caracteres y no deberia incluir ningun tipo de caracteres!",
        label: "Nombre",
        pattern: "^[A-Za-z0-9]{3,16}$",
       
    },
    {
        id:3,
        name: "telefono",
        type:"text",
        placeholder: "Telefono",
        errorMessage:"Deberia incluir solo números",
        label: "Telefono",
        pattern:"[0-9]{0,13}",
       

    },
    {
        id:4,
        name: "mail",
        type:"email",
        placeholder: "Email",
        errorMessage:"Deberia ser una dirección de correo electronico válida ",
        label: "Email",
       

    },
   ];
   
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        addUser(form);
    };
    const onChange =(e)=> {
      setForm({...form,[e.target.name]: e.target.value});
    };
     
    console.log(form);
    
    const addUser =(data)=>{
   
        const requesInit = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        }
        
        fetch('http://localhost:8080/api/juego/registro', requesInit)
        .then(res => {
        toast.success('A jugar', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
                setTimeout(()=>{
                    navigate('/') /* AGREGAR PATH DE LA PANTALLA DE PREGUNTAS con registro*/ 
                },2000)
            ;
        })
        /* toast.success('Registro exitoso', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                }); */
       .catch(err => err)

      };

    return (
    <div className="forms">

       
       <div className="top-left"> <img src={robotito} className="robotino"/> 
              <div className="top-left-msm">
                    <img src={registrarse} className="myt" alt="mensaje" />
              </div>    
        <div className="container-logo">
        <div className="logo">
            <NavLink to= '/'>
                <img src={logo} className="gyl"></img>
            </NavLink>
        </div>

        </div>
        
       </div>
       
        <div className="centered-form">
            <div className="ontener-form">
                     <form onSubmit={handleSubmit}>
                        
                        {input.map((input)=>(
                            <FormInput 
                            key={input.id} {...input} 
                            value={form[input.name]}
                            onChange={onChange}/>

                        ))}
                    </form>
            </div>
                       
                <>
                    <div className="jugar">
                        
                        <div className="rueda-boton">
                            <div className="button-girar"> 
                            <button className="button-rg" type="submit">Girar</button> 
                            </div>  
                            <img src={rul} alt="ruleta" className="ruleta-registro"/>
                        </div>    
                    </div>   
                </>
                
        <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />

                
        </div>
    
    </div> 
    );
};

export default Forms;

