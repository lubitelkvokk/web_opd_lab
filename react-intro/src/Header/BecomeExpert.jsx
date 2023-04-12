import React from 'react'
import { Button, ListItem, ListItemText, List, Paper } from '@mui/material'
import { BrowserRouter, Link } from 'react-router-dom'


const BecomeExpert = ({ changePage }) => {



  return (
    // <BrowserRouter>

      <div style={{
        height: "100%",
        width: "180px",
        float: 'right',
        // paddingLeft: "650px",
        paddingTop: "60px",
      }}>

        {/* <Link to="/becomeExpert"> */}



        <Button variant="contained" color="primary" onClick={() => (changePage("becomeExpert"))}>
          <Link  to="/becomeExpert" >
            Стать экспертом
          </Link>
        </Button>
        {/* </Link> */}

      </div>

    //  </BrowserRouter>

  )
}

export default BecomeExpert
