import React from 'react'
import { useState, useEffect } from "react"
import { Button, ListItem, ListItemText, List, Paper } from '@mui/material'
import { json } from 'react-router-dom';

const CompetenciesChoiceS = (expertId) => {

    const [selected, select] = useState(false);
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState(['ПВК1', 'ПВК2', 'ПВК3', 'ПВК4', 'ПВК5', 'ПВК6', 'ПВК7', 'ПВК8', 'ПВК9', 'ПВК10']);
    const [condition, setCondition] = useState([false, false, false, false, false, false, false, false, false, false]);
    const [competencies, setCompetencies] = useState([1, 2, 3, 4, 5]);
    const [confirm, setConfirm] = useState([false])


    // const [profs, setProfs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:8080/getAllCompetencies");
            const jsonData = await response.json();
            setCompetencies(jsonData)
        };
        fetchData();

        const fetchCompetency = async () => {
            const response = await fetch("http://localhost:8080/getAllCompetencies");
            const jsonData = await response.json();
        }
        if (confirm) {

        }
    }, []);

    return (
        <div>
            {/* <div style={{paddingLeft:"450px"}}>
                 <Button style={{ width: "500px" }} variant="contained" color="primary" onClick={() => (setOpen(!open))}>ПВК</Button>
            {open && <Paper elevation={3} style={{ maxHeight: 200, overflow: 'auto', width: "500px" }}>
                            <List style={{ maxHeight: '100%', overflow: 'auto'}} component="nav"
                                height={200}
                                width={200}
                                itemSize={10}
                                itemCount={competencies.length}
                                overscanCount={3}>
                                {
                                    competencies.map((competency, j) => (
                                        <ListItem key={j}>
                                            <ListItemText onClick={() => (setOpen(!open))} primary={j+"."+competency.name}/>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </Paper>}
            </div>
           
            <iframe style={{ marginTop: "5px", marginLeft: "auto", marginRight: "auto" }}
              src="https://docs.google.com/forms/d/e/1FAIpQLScYFc3mi9Qe8z3BehWDHEhAUBT2TsDPwaajlDfbXPsevOAtMQ/viewform?usp=sf_link" width="100%" height="600px" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe> */}

            {
                content.map((element, index) => (
                    <div key={index} style={{marginTop:"10px"}}>
                        <Button style={{ width: "500px" }} variant="contained" color="primary" onClick={() => (condition[index]=!condition[index], setOpen(!open))}>{element}</Button>
                        {condition[index] && <Paper elevation={3} style={{ maxHeight: 200, overflow: 'auto', width: "500px" }}>
                            <List style={{ maxHeight: '100%', overflow: 'auto'}} component="nav"
                                height={200}
                                width={200}
                                itemSize={10}
                                itemCount={competencies.length}
                                overscanCount={3}>
                                {
                                    competencies.map((competency, j) => (
                                        <ListItem key={j*10}>
                                            <ListItemText onClick={() => (content[index]=competency.name, condition[index]=!condition[index], setOpen(!open))} primary={competency.name} />
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </Paper>}
                    </div>
                ))
            }
        </div>
    )
}

export default CompetenciesChoiceS
