import React from 'react'
import styles from "./Styles/Content.module.css"
import Profession from './Profession'

const Content = ({profHref}) => {
  return (
    <div >
      <Profession profHref={profHref}/>
    </div>
  )
}

export default Content
