import React, { useState } from 'react';
import style from './form.module.css'
const FORM = () => {
    // const [name,setName] = useState('');
    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');

    const [user,setUser] =useState({name:'',email:'',password:''})
    const {name,email,password} = user;
  

    const handleSubmit = (e) =>{
        console.log("form is submitted");
        let userInfo = {
            name,email,password
        }
        console.log(userInfo);
        e.preventDefault();
    }

    const handleChange = (e) =>{
    setUser({...user,[e.target.name]:e.target.value});
    }
    return (
        <div>
            <h1>Registration</h1>
            <form action="">
               <div className={style.formGroup}>
               <label htmlFor="name">Name:</label>
                <input value={name} type="text" name="name" id="name" onChange={handleChange} required />
               </div>

               <div className={style.formGroup}>
               <label htmlFor="email">Email:</label>
                <input value={email} type="email" name="email" id="email" onChange={handleChange} required />
               </div>

               <div className={style.formGroup}>
               <label htmlFor="password">Password:</label>
                <input value={password} type="password" name="password" id="password" onChange={handleChange} required />
               </div>
               <button onClick={handleSubmit} type='submit'>Register</button>
            </form>
        </div>
    );
};

export default FORM;