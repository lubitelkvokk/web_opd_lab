import React from 'react'
import { useState, useEffect } from "react"
import { Button, ListItem, ListItemText, List, Paper } from '@mui/material'
import { json } from 'react-router-dom';
import zIndex from '@mui/material/styles/zIndex';

const CompetenciesChoiceS = (expertId) => {

    const [selected, select] = useState(false);
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState([{ id: 1, name: 'ПВК1', raiting: 0 }, { id: 2, name: 'ПВК2', raiting: 0 },
    { id: 3, name: 'ПВК3', raiting: 0 }, { id: 4, name: 'ПВК4', raiting: 0 },
    { id: 5, name: 'ПВК5', raiting: 0 }, { id: 6, name: 'ПВК6', raiting: 0 },
    { id: 7, name: 'ПВК7', raiting: 0 }, { id: 8, name: 'ПВК8', raiting: 0 },
    { id: 9, name: 'ПВК9', raiting: 0 }, { id: 10, name: 'ПВК10', raiting: 0 }])
    const [condition, setCondition] = useState([false, false, false, false, false, false, false, false, false, false]);
    const [competencies, setCompetencies] = useState([1, 2, 3, 4, 5]);
    const [confirm, setConfirm] = useState([false])
    const [state, updateState] = useState(false)
    const [profs, updateProfs] = useState([])
    const [selectedProf, selectProf] = useState({ name: "Выберите профессию" });
    const [profIsOpen, changeProfState] = useState(false)


    const checkAbsencePVK = (pvk) => {
        try {
            console.log(expertId);
            if (pvk.name.indexOf("ПВК") >= 0) return false;
            return true;
        } catch {
            console.log("ПВК ERROR")
        }

    }

    const getCountOfSelectedPVK = (competencies) => {
        let count = 0;
        for (let i = 0; i < competencies.length; i++) {
            if (competencies[i].name.indexOf("ПВК") === -1) {
                if (competencies[i].raiting <= 0) {
                    count -= 10000;
                }
                count++;
            }

        }
        return count;
    }

    const pushEvaluation = (expertId, professionId, competencies) => {
        console.log(getCountOfSelectedPVK(competencies));
        if (getCountOfSelectedPVK(competencies) < 5) {
            alert("Нужно выбрать и оценить хотя бы 5 ПВК")
        }
        else {
            const data = {
                "expertId": expertId.expertId,
                "professionId": professionId[0],
                "competencies": competencies
            }
            console.log(JSON.stringify(data));
            const doIt = async () => {
                const response = await fetch("http://localhost:8080/put_evaluations", {
                    method: "post",
                    headers: {
                        'Accept': '*/*',
                        'Content-Type': 'application/json'
                    },
                    
                    body: JSON.stringify(data)
                })
                    .then((response) => {
                        console.log(response);
                    });
            };
            doIt();
            alert("Ваша оценка учтена!!!");
            setCondition([false, false, false, false, false, false, false, false, false, false]);
            setContent([{ id: 1, name: 'ПВК1', raiting: 0 }, { id: 2, name: 'ПВК2', raiting: 0 },
            { id: 3, name: 'ПВК3', raiting: 0 }, { id: 4, name: 'ПВК4', raiting: 0 },
            { id: 5, name: 'ПВК5', raiting: 0 }, { id: 6, name: 'ПВК6', raiting: 0 },
            { id: 7, name: 'ПВК7', raiting: 0 }, { id: 8, name: 'ПВК8', raiting: 0 },
            { id: 9, name: 'ПВК9', raiting: 0 }, { id: 10, name: 'ПВК10', raiting: 0 }]);
            selectProf({ name: "Выберите профессию" })
            fetchData();
        }
    }

    const fetchData = async () => {
        const prof_response = await fetch("http://localhost:8080/getProfs");
        const response = await fetch("http://localhost:8080/getAllCompetencies");
        const temp_prof = await prof_response.json();
        const jsonData = await response.json();
        updateProfs(temp_prof);
        setCompetencies(jsonData)
    };



    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div style={{ width: "100%", justifyContent: "center", display: "flex", flexDirection: "column" }}>
            <div style={{ marginTop: "10px", marginLeft: "480px" }}>
                <Button style={{ width: "500px", height: "30px" }}
                    variant="contained"
                    color="primary"
                    onClick={() => (changeProfState(!profIsOpen))}>
                    {selectedProf.name}
                </Button>
                {
                    profIsOpen && <div>{profs.map((profession, j) => (
                        <div>
                            <ListItem key={j * 13}>
                                <ListItemText onClick={() => (selectProf(profession),
                                    changeProfState(!profIsOpen))} primary={profession.name} />
                            </ListItem>
                        </div>
                    ))}
                    </div>
                }
            </div>
            {
                content.map((element, index) => (
                    <div style={{ marginLeft: "480px", display: "flex", marginTop: "10px" }}>
                        <div key={index} style={{ width: "500px", display: "flex", flexDirection: "column" }}>
                            <div style={{ margin: "auto" }}>
                                <Button style={{ width: "500px", height: "50px" }} variant="contained" color="primary" onClick={() => (condition[index] = !condition[index], setOpen(!open))}>{element.name}</Button>
                                <div style={{ display: "flex" }}>
                                    {condition[index] && <Paper elevation={3} style={{ margin: "auto", maxHeight: 200, overflow: 'auto', width: "500px" }}>
                                        <List style={{ maxHeight: '100%', overflow: 'auto' }} component="nav"
                                            height={200}
                                            width={200}
                                            itemSize={10}
                                            itemCount={competencies.length}
                                            overscanCount={3}>
                                            {
                                                competencies.map((competency, j) => (
                                                    <div>
                                                        <ListItem key={j * 10}>
                                                            <ListItemText onClick={() => (competencies.splice(j, 1), content[index] = competency, condition[index] = !condition[index],
                                                                checkAbsencePVK(element) ? competencies.push(element) : console.log(competencies), setOpen(!open))} primary={competency.name} />
                                                        </ListItem>
                                                    </div>
                                                ))
                                            }
                                        </List>
                                    </Paper>}
                                </div>
                            </div>
                        </div>
                        <div style={{ float: "left" }}>
                            <input key={index} style={{ height: "20px", width: "70px" }} type="text" name='Оценить' onChange={(e) => (content[index].raiting = e.target.value)} />
                            <Button variant="contained" color="primary" style={{ height: "20px", width: "10px" }}
                                onClick={() => (condition[index] = !condition[index],
                                    checkAbsencePVK(element) ? competencies.push(element) : console.log(competencies), content[index] = [index, "ПВК".concat(index + 1), 0],
                                    console.log(content), updateState(!state))}>x</Button>
                        </div>


                    </div>
                ))
            }
            <div style={{ margin: "auto", marginTop: "20px", display: "flex" }}>
                <Button variant="contained" color="success" style={{ height: "50px", width: "130px" }}
                    onClick={() => (pushEvaluation(expertId, selectedProf.id, content))}>Подтвердить выбор</Button>
            </div>
        </div>
    )
}

export default CompetenciesChoiceS
