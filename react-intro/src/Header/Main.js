import React, { Component } from 'react'
import styles from "./Styles/Button.module.css"
import { Button } from '@mui/material'


const Main = ({changePage}) => {

    return (
      <div style={{
        height: "100%",
        width: "100px",
        float: 'right',
        // paddingLeft: "650px",
        paddingTop: "60px"
      }}>
        <Button variant="contained" color="primary" onClick={()=> (changePage("main"))}>Главная</Button>
      </div>
    )
}
export default Main
