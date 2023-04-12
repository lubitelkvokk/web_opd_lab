import React from 'react'
import { Button, ListItem, ListItemText, List, Paper } from '@mui/material'
import { Link } from 'react-router-dom'

const OpenSensorimotor = ({changePage}) => {
  return (
    <div style={{
            height: "100%",
            width: "250px",
            float: 'right',
            // paddingLeft: "650px",
            paddingTop: "60px",
        }}>
            <Button variant="contained" color="primary" onClick={() => (changePage("SensorimotorReactions"))}>
              <Link to="SensorimotorReactions">
                Пройти тестирование
              </Link>
               </Button>
    </div>
  )
}

export default OpenSensorimotor
