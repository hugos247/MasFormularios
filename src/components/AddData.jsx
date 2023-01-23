import { useState } from "react"

import React from 'react'

const AddData = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const crearUsuario = (event) =>  {
        event.preventDefault();
        console.log(event.target.value);
    }

  return (
    <>
        <form  onSubmit={ crearUsuario } > 
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                <input onChange={ (event) => setNombre(event.target.value) } type="text" className="form-control"  aria-describedby="emailHelp"/>
                { (nombre.length < 2 && nombre !== "")  ?  <p className="text-danger"> El nombre debe tener al menos dos caracteres </p> : null }
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Apellido</label>
                <input onChange={ (event) => setApellido(event.target.value) } type="text" className="form-control"  aria-describedby="emailHelp"/>
                { (apellido.length < 2 && apellido !== "")  ?  <p className="text-danger"> El apellido debe tener al menos dos caracteres </p> : null }
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input onChange={ (event) => setEmail(event.target.value) } type="email" className="form-control"  aria-describedby="emailHelp"/>
                { (email.length < 5 && email !== "")  ?  <p className="text-danger"> El email debe tener mas de cinco caracteres </p> : null }
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input onChange={ (event) => setPassword(event.target.value) } type="password" className="form-control" id="exampleInputPassword1"/>
                { (password.length < 8 && password !== "")  ?  <p className="text-danger"> Las contraseñas deben tener al menos 8 caracteres </p> : null }
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                <input onChange={ (event) => setConfirmPassword(event.target.value) } type="password" className="form-control" id="exampleInputPassword1"/>
                { (confirmPassword !== password)  ?  <p className="text-danger"> Las contraseñas deben coincidir </p> : null }
            </div>

            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>

    <div>
        <p>Nombre: { nombre } </p>
        <p>Apellido: { apellido } </p>
        <p>Email: { email } </p>
        <p>Password: { password } </p>
        <p>Confirm Password: { confirmPassword } </p>

    </div>

    </>
  )
}

export default AddData
