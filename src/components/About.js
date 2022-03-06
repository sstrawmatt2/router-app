import React,{Component} from "react";
import {useNavigate} from 'react-router-dom'

function About(){
    let navigate = useNavigate();
    return(
        <div>
            This is the about page <button onClick={() =>{navigate("/")}}> Change to home page</button>
        </div>
    )
}
export default About;