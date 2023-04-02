import React from 'react'
import { Button, ListItem, ListItemText, List, Paper } from '@mui/material'
const ExpertEvaluation = ({setProof, changePage}) => {

    function foo() {
        var k = prompt("Введите ключ эксперта");
        const fetchData = async () => {
            const response = await fetch("http://localhost:8080/getDataAboutExpert?expertId=" + k);
            const jsonData = await response.json();
            
            setProof([jsonData, k]);
            if (jsonData){
                changePage("ExpertEvaluation");
            }
            
          };
        fetchData();
    }

    return (
        <div style={{
            height: "100%",
            width: "180px",
            float: 'right',
            // paddingLeft: "650px",
            paddingTop: "60px",
        }}>
            <Button variant="contained" color="primary" onClick={() => (foo())} > Сделать оценку</Button>
        </div>
    )
}

export default ExpertEvaluation
