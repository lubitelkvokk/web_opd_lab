import logo from './logo.svg';
import styles from "./App.module.css"
import Header from "./Header/Header"
import Content from "./Content/Content"
import React from "react"


function App() {
  const [prof, changeProf] = React.useState("None")

  return (
    <div className={styles.App}>
      <Header changeProf={changeProf} />
      <div style={{ backgroundColor: "rgb(0, 174, 239)" }}></div>
      <Content prof={prof} />
    </div>
  );
}

export default App;
