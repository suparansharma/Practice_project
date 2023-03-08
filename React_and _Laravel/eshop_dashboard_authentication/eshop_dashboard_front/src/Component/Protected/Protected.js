import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const { Component } = props;
    const navigate = useNavigate();

    useEffect(() => {
        if (!sessionStorage.getItem('user')) {
            navigate('/register')
        }
    })
    return (
        <div><Component /></div>
    )
}

export default Protected