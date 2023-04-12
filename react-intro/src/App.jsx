
import Header from "./Header/Header"
import Content from "./Content/Content"
import React from 'react';
import './App.css'
import CompetenciesChoiceS from "./ChoiceOfCompetencies/CompetenciesChoiceS"
import { ReactGoogleForms } from 'react-google-forms'
import AllTests from './Content/SensorimotorTests/AllTests'
import { BrowserRouter, Route, Routes, NavLink, Outlet } from "react-router-dom";

function App() {
  const [prof, changeProf] = React.useState("None")
  const [main, changePage] = React.useState("main")
  const [isExpert, setProof] = React.useState([false, ""])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header changePage={changePage} setProof={setProof} />} >
            <Route index element={
              <div>
                <Content prof={prof} changeProf={changeProf}/>
              </div>} />

            <Route path="/becomeExpert" element={
              <div>
                <iframe style={{ marginTop: "5px", marginLeft: "auto", marginRight: "auto" }}
                  src="https://docs.google.com/forms/d/e/1FAIpQLSe4qFWxagD-16iaoWrzRpVd2GsAympGqRarAB8CmC62FxjbxQ/viewform?embedded=true" width="100%" height="600px" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
              </div>} />

            <Route path="SensorimotorReactions" element={
              <div>
                <AllTests />
              </div>} />

            <Route path="expertEvaluation" element={
              <div>
                <CompetenciesChoiceS expertId={isExpert[1]} />
              </div>
            } />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
