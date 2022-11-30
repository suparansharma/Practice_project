import { useFormik } from 'formik';
import React from 'react';
import * as yup from "yup";
const FormikValidation = () => {
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:''
        },
        validationSchema:yup.object({
            name:yup.string().min(2,"name must have atleast 2 characters").required(),
            email:yup.string().email().required(),
            password:yup.string().min(6,"password must have atleast 6 characters").required(),
        }),
       
        onSubmit:(values, {resetForm})=>{
            console.log(values);
            resetForm({values:""})
        },
    })


    const renderNameError = formik.touched.name && formik.errors.name && (<span style={{ color: 'red' }}>{formik.errors.name}</span>);
    const renderEmailError = formik.touched.email && formik.errors.email && (<span style={{ color: 'red' }}>{formik.errors.email}</span>);
    const renderPasswordError = formik.touched.password && formik.errors.password && (<span style={{ color: 'red' }}>{formik.errors.password}</span>);
    return (
        <div>
        <h2>User Signup</h2>
       <form onSubmit={formik.handleSubmit}>
       <div>
            <label htmlFor="name"> Name:</label>
            <input type="text" name="name" id="name" onChange={formik.handleChange} value={formik.values.name} required/><br />
            {renderNameError}
        </div>
        <div>
            <label htmlFor="email"> Email:</label>
            <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} required/><br />
            {renderEmailError}
        </div>
        <div>
            <label htmlFor="password"> password:</label>
            <input type="password" name="password" id="password" onChange={formik.handleChange} value={formik.values.password} required /><br />
            {renderPasswordError}
        </div>
        <button type="submit">Signup</button>
       </form>
    </div>
    );
};

export default FormikValidation;