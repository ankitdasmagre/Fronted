import React from 'react'
import {useEffect, useState} from "react";
import "./Login.css";

const Login = () => {
    const [getForm,setForm] =useState({
    name:"",
    email:"",
    password:""
    })
    const inputMethod =(event) => {
    const {name,value} = event.target;
    setForm((preState) => {
        return {
        ...preState,
        [name]:value
        }
    })
    console.log('name',event.target.name);
    console.log('value',event.target.value);
    }
    useEffect(() =>{
    console.log('getForm',getForm);
    })
    return (
    
        <>
    <div className="form-container">
        <h1> LogIn Form</h1>
        <div className="form-group">
        <label htmlfor="name">Name</label>
        <input type="text" name="name" id="name" value={getForm.name} onChange={inputMethod} />
        <label htmlfor="email">Email</label>

        <input type="text" name="email" id="email" value={getForm.email} onChange={inputMethod} />
        <label htmlfor="name">Password</label>

        <input type="password" name="password" id="password" value={getForm.password} 
                onChange={inputMethod} />

        <button className="btn btn-primary" >Submit</button>
        </div>
    </div>
    </>
    
    )
}

export default Login;