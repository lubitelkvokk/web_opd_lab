import React, { Component } from 'react'
import styles from "./Styles/Button.module.css"
import { Button } from '@mui/material'
import { BrowserRouter, NavLink } from 'react-router-dom'


const Main = ({ changePage }) => {

  return (
    // <BrowserRouter>
      <div style={{
        height: "100%",
        width: "100px",
        float: 'right',
        // paddingLeft: "650px",
        paddingTop: "60px"
      }}>
        <Button variant="contained" color="primary" onClick={() => (changePage("main"))}>
          <NavLink to="/">
            Главная
          </NavLink>
        </Button>
      </div>
    // </BrowserRouter>
  )
}
export default Main
