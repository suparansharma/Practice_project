import { useFormik } from 'formik';
import React, { useState } from 'react';

const FormikSignup = () => {
    
    
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:''
        },
        onSubmit:(values)=>{
            console.log(values);
        },
    })
    
  

    return (
        
        <div>
            <h2>User Signup</h2>
           <form onSubmit={formik.handleSubmit}>
           <div>
                <label htmlFor="name"> Name:</label>
                <input type="text" name="name" id="name" onChange={formik.handleChange} value={formik.values.name} />
            </div>
            <div>
                <label htmlFor="email"> Email:</label>
                <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} />
            </div>
            <div>
                <label htmlFor="password"> password:</label>
                <input type="password" name="password" id="password" onChange={formik.handleChange} value={formik.values.password} />
            </div>
            <button type="submit">Signup</button>
           </form>
        </div>
    );
};

export default FormikSignup;