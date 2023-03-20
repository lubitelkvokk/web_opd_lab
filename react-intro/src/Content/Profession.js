import React, { useEffect, useState } from 'react'
import styles from "./Styles/Profession.module.css"
import { Button, ListItem, ListItemText, List, Paper } from '@mui/material'
const Profession = ({ prof }) => {
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
    <div className={styles.container}>
      <div className={styles.block}>{prof.name ? prof.name : "Loading..."}</div>

      {swch == "left" ?
        <div>
          <div className={styles.switcher}>
            <div className={styles.selected}>Описание</div>
            <div onClick={() => (setClick("right"))} className={styles.evaluation}>Оценка</div>
          </div>
          <div className={styles.overviewContent}>{prof.description ? prof.description : "Loading..."}</div>
        </div> :
        <div>
          <div className={styles.switcher}>
            <div onClick={() => (setClick("left"))} className={styles.overview}>Описание</div>
            <div className={styles.selected}>Оценка</div>
          </div >
          <div className={styles.evaluationContent}>

            {evaluations.map((evaluation, i) =>
            (<div>
              <div className={styles.expert} key={i}>
                {evaluation.expert.fio}
              </div>

              {evaluation.competencies.map((competency, j) => (
                <div key={j} className={styles.competency}>
                  {competency.name}
                </div>
              ))}

            </div>))}

          </div>
          {/* <div className={styles.evaluationContent}>{data ? data[0].raiting : "Loading..."}</div> */}
        </div>
      }
    </div>
  )
}
export default Profession