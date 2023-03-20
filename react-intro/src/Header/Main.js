import React, { Component } from 'react'
import styles from "./Styles/Button.module.css"
import { Button } from '@mui/material'
export default class Main extends Component {



  render() {

    return (
      <div style={{
        height: "100%",
        width: "100px",
        float: 'right',
        // paddingLeft: "650px",
        paddingTop: "60px"
      }}>
        <Button variant="contained" color="primary" ><a href="http://localhost:3000/">Главная</a></Button>
      </div>
    )
  }
}
