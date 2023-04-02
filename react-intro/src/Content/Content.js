import React from 'react'
import styles from "./Styles/Content.module.css"
import Profession from './Profession'

const Content = ({ prof }) => {
  return (
    <div className={styles.content}>
      <Profession prof={prof} />
    </div>
  )
}

export default Content


raa