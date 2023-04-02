import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const CompetenciesChoice = ({ expertId }) => {
    const customOptionLabel = ({ point, raiting }) => (
        <div>
            <span>{point}</span>
            <span style={{ marginLeft: 10, color: 'grey' }}>Оценка: {raiting}</span>
        </div>
    );

    const [selectedOptions, setSelectedOptions] = useState([""]);
    let content = [];
    let competencies = [];
    const handleSelectChange = (index) => {
        console.log(content[index]);
    };

    function foo() {
        const fetchData = async () => {
            const response = await fetch("http://localhost:8080/getAllCompetencies");
            const jsonData = await response.json();
            jsonData.map((competency)=>(competencies.push({value:competency.id, label:competency.name})))
            
        };
        fetchData();
        console.log(competencies)
    }

    const colourOptions = [
        {
            value: 1,
            label: "ПВК1",

        },
        {
            value: 2,
            label: "ПВК2"
        },
        {
            value: 3,
            label: "ПВК3"
        }
    ]

    const tenRow = () => {
        for (let i = 0; i < 10; i++) {
            content.push(<Select 
                key={i}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                    ...theme.colors,
                      text: 'orangered',
                      primary25: 'hotpink',
                      primary: 'rgb(21, 158, 174)',
                    }})}
                className="basic-single"
                classNamePrefix="select"
                name="color"
                onChange={handleSelectChange(i)}
                options={competencies}
                />)
        }
        return content
    }
    return (
        <div style={{ paddingTop: "120px" }}>

        {foo()}
            {tenRow().map((element)=>(<div style={{
                    width:"700px",
                    marginTop:"10px"
            }}>
                {element}</div>))}



        </div>
    )
}

export default CompetenciesChoice;
