import React, { Component } from 'react'
import Main from "./Main"
import Logo from "./Logo"
import Professions from "./Professions"
import Reveal from "react-reveal/Reveal"
import Avatar from "./Avatar"
import BecomeExpert from './BecomeExpert'
import ExpertEvaluation from './ExpertEvaluation'
import OpenSensorimotor from './OpenSensorimotor'
import { Outlet } from "react-router-dom"
import CustomLink from "../components/CustomLink";
import ToLoginPage from './ToLoginPage'

export default function Header({changePage, setProof }) {

  return (
    <div style={{
      margin: "0",
      float: "left",
      width: "100%",
      height: "105px",
      paddingTop: "5px",
      backgroundColor: "white",
      boxShadow: "0 4px 2px -2px gray",
    }}>
      <Logo />
      <Reveal>
        <Main changePage={changePage} />
        <BecomeExpert changePage={changePage} />
        <ExpertEvaluation setProof={setProof} changePage={changePage} />
        <OpenSensorimotor changePage={changePage} />
        <ToLoginPage/>
      </Reveal>
      <Outlet />
    </div>
  )
}

