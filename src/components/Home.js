import React,{Component} from "react";
import {useNavigate} from 'react-router-dom'


function Home(){
    let navigate = useNavigate();
    return(
        <div>
            This is the home page <button onClick={() =>{navigate("/profile")}}> Change to profile page</button>
        </div>
    )
}
export default Home;