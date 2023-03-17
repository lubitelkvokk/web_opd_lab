import React, { Component } from 'react'
import styles from "./Styles/Button.module.css"
export default class Main extends Component {



  render() { 

    return (
      <div style={{
        height: "100%",
        width: "160px",
        float: 'left',
        paddingLeft: "600px",
        paddingTop: "60px"
      }}>
        <button className={styles.button} ><a href="http://localhost:3000/">Главная</a></button>
      </div>
    )
  }
}
