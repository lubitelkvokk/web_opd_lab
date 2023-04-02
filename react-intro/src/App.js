
import Header from "./Header/Header"
import Content from "./Content/Content"
import React from 'react';
import { useEffect } from "react"
import './App.css'
import { Router, Route, Routes } from "react-router-dom"
import CompetenciesChoiceS from "./ChoiceOfCompetencies/CompetenciesChoiceS"
import { ReactGoogleForms } from 'react-google-forms'

function App() {
  const [prof, changeProf] = React.useState("None")
  const [main, changePage] = React.useState("main")
  const [isExpert, setProof] = React.useState([false, ""])
  // useEffect(() => {
  //   console.log(123);
  //   if (isExpert[0] == true) {
  //     console.log(321);
  //     changePage("ExpertEvaluation");
  //   }
  // }, [])

  return (
    <div className="App">
      <Header changeProf={changeProf} changePage={changePage} setProof={setProof} />
      { 
        
        main === "becomeExpert" ?
          <div>
            <iframe style={{ marginTop: "5px", marginLeft: "auto", marginRight: "auto" }}
              src="https://docs.google.com/forms/d/e/1FAIpQLSe4qFWxagD-16iaoWrzRpVd2GsAympGqRarAB8CmC62FxjbxQ/viewform?embedded=true" width="100%" height="600px" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
          </div>
          :
          main === "ExpertEvaluation" ?
            <div>
              <CompetenciesChoiceS expertId = {isExpert[1]}/>
              
            </div> :
            <div>
              <Content prof={prof} />

            </div>
      }
    </div>
  );
}

export default App;
