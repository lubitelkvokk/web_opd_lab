import React from 'react'
import styles from "./Styles/Profession.module.css"
import {useState} from "react"
const Profession = ({profHref}) => {  //Передает ссылку на профессию, откуда будут доставаться данные
    


 return (
        fetch(
        'http://localhost:7777/task',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'text/plain'
          }
        }
      ).then(resp => resp.text()).then(console.log),
      
    <div className={styles}>
        <div className={styles.block}> {profHref}</div>
    </div>
  )
}

export default Profession
