import React from 'react'
import styles from "./Styles/Navbar.module.css"
import { useState, useEffect } from "react"
import { Button, ListItem, ListItemText, List, Paper } from '@mui/material'



export default function Professions( {changeProf} ) {

  const [open, setOpen] = useState(false);

  const Profs = ["http://localhost:8080/get", "Front-end разработчик", "Back-end разработчик", "HR-менеджер"]

  
  const [profs, setProfs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/getProfs");
      const jsonData = await response.json();
      setProfs(jsonData);
    };
    fetchData();
  }, []);


  return (

    <div style={{
      height: "100%",
      width: "140px",
      float: 'right',
      paddingLeft: "10px",
      paddingTop: "60px"
    }}>
      <Button variant="contained" color="primary" onClick={() => (setOpen(!open))}>Профессии</Button>
      {open &&
        <div style={{ marginTop: "5px" }}>
          <Paper elevation={3} style={{ maxHeight: 230, overflow: 'auto' }}>
            <List style={{ maxHeight: '100%', overflow: 'auto' }} component="nav"
              height={100}
              width={100}
              itemSize={10}
              itemCount={profs.length}
              overscanCount={3}>
              {
                profs.map((prof, index) => (
                  <ListItem key={index} button>
                    <ListItemText onClick={() => (setOpen(!open), changeProf(prof))} primary={prof.name} />
                  </ListItem>
                ))
              }
            </List>
          </Paper>
        </div>}
    </div>
  )
}


