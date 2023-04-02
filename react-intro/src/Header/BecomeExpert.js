import React from 'react'
import { Button, ListItem, ListItemText, List, Paper } from '@mui/material'

const BecomeExpert = ({changePage}) => {

  

  return (
    <div style={{
      height: "100%",
      width: "180px",
      float: 'right',
      // paddingLeft: "650px",
      paddingTop: "60px",
    }}>
      <Button variant="contained" color="primary" onClick={() => (changePage("becomeExpert"))}>Стать экспертом</Button>
    </div>
  )
}

export default BecomeExpert
