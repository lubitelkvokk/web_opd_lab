import React from 'react'
import { Button, ListItem, ListItemText, List, Paper } from '@mui/material'

const OpenSensorimotor = ({changePage}) => {
  return (
    <div style={{
            height: "100%",
            width: "250px",
            float: 'right',
            // paddingLeft: "650px",
            paddingTop: "60px",
        }}>
            <Button variant="contained" color="primary" onClick={() => (changePage("SensorimotorReactions"))} > Пройти тестирование</Button>
    </div>
  )
}

export default OpenSensorimotor
