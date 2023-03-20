import React, { Component } from 'react'
import Main from "./Main"
import Logo from "./Logo"
import Professions from "./Professions"
import Reveal from "react-reveal/Reveal"
import Avatar from "./Avatar"


export default function Header({ changeProf }) {

  return (
    <div style={{ float: "left", width: "99.5%", height: "105px", paddingTop: "5px", border: "4px solid rgba(0, 0, 0, 0.05)", backgroundColor: "white" }}>
      <Logo />
      <Reveal>
        <Professions changeProf={changeProf} />
        <Main />

      </Reveal>
      {/* <Avatar/> */}

    </div>
  )
}

