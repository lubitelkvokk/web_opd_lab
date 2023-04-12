import React, { Component } from 'react'
import logo from "../images/logo.svg"
import Slide from 'react-reveal/Slide';
export default class Logo extends Component {
  render() { 

    return (
      <div style = {{height:"100%" ,width: "230px", display: "inline-block", float:'left', marginLeft:"10px"}}>
       <a href="http://localhost:3000/">
        <Slide left>
        <img src = {logo} style = {{width: "200px"}} /> 
        </Slide>
       </a>
        
      </div>
    )
  }
}
