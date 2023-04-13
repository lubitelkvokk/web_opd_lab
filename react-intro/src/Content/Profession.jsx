import React, { useEffect, useState } from 'react'
import styles from "./Styles/Profession.module.css"
import { Button, ListItem, ListItemText, List, Paper } from '@mui/material'
import Professions from '../Header/Professions';
const Profession = ({ prof }) => {





  const [evaluations, setEvaluations] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/getEvaluationsByProfessionsId?id=" + (prof.id ? prof.id : 1));
      const jsonData = await response.json();
      console.log(jsonData);
      setEvaluations(jsonData);
    };
    fetchData();

  }, [prof]);


  //TODO 
  // const getCompetencyById = async (competency_id) => {
  //   const response = await fetch("http://localhost:8080/getCompetencyById?id=" + (competency_id ? competency_id : 10));
  //   const jsonData = await response.json();
  //   console.log(jsonData.name);
  //   return jsonData.name;
  // }

  const [swch, setClick] = useState("left");

  return (
    <div className={styles.content}>

      <div className={styles.professionName}>{prof.name ? prof.name : "Выберите профессию"}</div>

      {swch == "left" ?
        <div>
          <div className={styles.switcher}>
            <div className={styles.selected}>Описание</div>
            <div onClick={() => (setClick("right"))} className={styles.evaluation}>Оценка</div>
          </div>
          <div className={styles.overviewContent}>{prof.description ? prof.description : "つ ◕_◕ ༽つ"}</div>
        </div> :
        <div>
          <div className={styles.switcher}>
            <div onClick={() => (setClick("left"))} className={styles.overview}>Описание</div>
            <div className={styles.selected}>Оценка</div>
          </div >

          <div>
            {evaluations.map((evaluation, i) =>
            (<div className={styles.evaluationBlock}>
              <div className={styles.expert} key={i}>
                {evaluation.name +"                                    " +evaluation.raiting}
              </div>
 
              {/* <div className={styles.competencies}>
                <ul>
                  {evaluation.competencies.map((competency, j) => (
                  <li className={styles.competency} key={j}>
                    {competency.name}
                  </li>
                ))}
                </ul>
                
              </div> */}
            </div>))}
          </div>
        </div>
      }
    </div >
  )
}
export default Profession