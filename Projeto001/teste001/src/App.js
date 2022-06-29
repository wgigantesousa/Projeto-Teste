import React from 'react';
import {useForm} from 'react-hook-form';
import './App.css';
import transudo from '../src/img/transudo.jpg';


function App () {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
   function onSubmit (userData){
    console.log(userData)
  }

    console.log(errors)
 
  return (
   <div className="App" >
    <h1> Torne-se  TRANSUDO! </h1>


   <form onSubmit={handleSubmit(onSubmit)}>
      
     <img  src={transudo} alt='TRANSUDO'/>

     <label>
        Nome:
       <input {...register("name", { required: true })}/>
       {errors.name && <span>O nome é obrigatório!</span> }
     </label>
     <label>
        Email:
       <input  {...register("email")}/> 
     </label>
     <label>
        Senha:
       <input {...register("password")}/> 
     </label>
     <label>
        Confirmar Senha:
       <input {...register("confirmPassword")}/> 
     </label>
 
     <button type='submit'>Cadastrar-se</button>
   </form>
   </div>
  )

}
export default App;
