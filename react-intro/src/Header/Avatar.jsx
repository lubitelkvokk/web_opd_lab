import React, { Component } from 'react'
import avatar from "../images/avatar.png"
import {useState} from "react"
export default function Avatar () {

    const [open, setState] = useState(false);
    function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl ); // false for synchronous request
    xmlHttp.send();
    return xmlHttp.responseText;
}

    return (
        
        <div style = {{height:"100%" ,width: "130px", display: "inline-block", float: "left"}}>
            <img onClick={()=>(httpGet("https://jsonplaceholder.typicode.com/posts"))}  src={avatar} style={{width:"100px", cursor:"pointer", border:"solid", borderRadius:"px"}}/>
            {
                open && <ul>
                <li>{httpGet("https://jsonplaceholder.typicode.com/posts")}</li>
                <li></li>
                <li></li>
            </ul>
            }
            
        </div>
    )
    
}
