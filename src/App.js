import React from "react";
import "./App.scss";
import Main from "./components/Main";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="App">
      <Main>
        <h1 className="App_title">React Calendar & Scheduler</h1>
        <Calendar />
      </Main>
    </div>
  );
}

export default App;
