import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
const UserForm = ({btnText,handleSubmitData,selectedUser}) => {
    const [user,setUser] = useState({
        title:'',
        body:''
    })
    const {title,body} = user;

    useEffect(()=>{
        setUser({
            title:selectedUser.title,
            body:selectedUser.body
        })
    },[selectedUser])

    const handleChange = (e)=>{
        const selectedField = e.target.name;
        const selectedValue = e.target.value;
        setUser(prevState =>{
            return {...prevState,[selectedField]:selectedValue}
        })
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        handleSubmitData(user);
        setUser({
            title:'',
            body:''
        });
    }
    return (
        <div>
            <h2>UserForm</h2>
            <form onSubmit={handleSubmit} >
            <div className="field-group">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" placeholder='title' value={title} onChange={handleChange} required/>

            </div>

            <div className="field-group">
                <label htmlFor="body">body</label>
                <input type="text" name="body" id="body" placeholder='body' value={body} onChange={handleChange} required/>

            </div>
            <button type="submit" className='btn'>{btnText}</button>
            </form>
        </div>
    );
};

UserForm.defaultProp={
    selectedUser:{
        title:'',
        email:''
    }
}
export default UserForm;