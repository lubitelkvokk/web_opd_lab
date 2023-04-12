import React from 'react'
import styles from "./Styles/Content.module.css"
import Profession from './Profession'
import Professions from '../Header/Professions'

const Content = ({ prof, changeProf }) => {
  return (
    <div className={styles.content}>
      <div style={{width:"200px", marginTop:"5px"}}><Professions changeProf={changeProf}/></div>
      <Profession prof={prof} changeProf={changeProf}/>
    </div>
  )
}

export default Content


