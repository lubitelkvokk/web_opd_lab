import React, { useEffect, useState } from 'react'
import styles from "./Styles/Profession.module.css"
import { Button, ListItem, ListItemText, List, Paper } from '@mui/material'
import Professions from '../Header/Professions';
const Profession = ({ prof}) => {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:8080/getEvaluationByProfessionId?id="+(prof.id ? prof.id : 1));
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   };
  //   fetchData();
  // }, [prof.id]);

  const [evaluations, setEvaluations] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/getEvaluationsByProfessionId?id=" + (prof.id ? prof.id : 1));
      const jsonData = await response.json();
      setEvaluations(jsonData);
    };
    fetchData();
  }, [prof]);

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
            {/* <div className={styles.expert}>
              dfshhgfhs
            </div>
            <div className={styles.competencies}>
              <ul> 
                <li>sfghsgf</li>
                <li>sfghsgf</li>
                <li>sfghsgf</li>
                </ul> 

            </div> */}




            {evaluations.map((evaluation, i) =>
            (<div className={styles.evaluationBlock}>
              <div className={styles.expert} key={i}>
                {evaluation.expert.fio}
              </div>
              <div className={styles.competencies}>
                <ul>
                  {evaluation.competencies.map((competency, j) => (
                  <li className={styles.competency} key={j}>
                    {competency.name}
                  </li>
                ))}
                </ul>
                
              </div>
          </div>))}

        </div>
          {/* <div className={styles.evaluationContent}>{data ? data[0].raiting : "Loading..."}</div> */}
    </div>
      }
    </div >
  )
}
export default Profession