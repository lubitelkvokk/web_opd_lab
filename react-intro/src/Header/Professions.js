import React from 'react'
import styles from "./Styles/Navbar.module.css"
import {useState} from "react"
import Slide from 'react-reveal/Slide';
import Jump from 'react-reveal/Jump';

export default function Professions({changeProf}) {

  const [open, setOpen] = useState(false);

  const Profs = ["Тестировщик", "Front-end разработчик", "Back-end разработчик", "HR-менеджер"]

  

  return (
    <div style={{
      height: "100%",
      width: "180px",
      float: 'left',
      paddingLeft: "10px",
      paddingTop: "60px"
    }}>
      <text onClick={()=>(setOpen(!open))} className={styles.navbar}>Профессии</text>
      {open && 
      <div>
        <ul>
          {
            Profs.map((prof)=>(
                <Slide>
                    <li onClick = {()=>(changeProf(prof.valueOf()))} className={styles.prof}>{prof}</li>
                </Slide>
                ))
          }
        </ul>
      </div>}
    </div>
  )
}
    
    
