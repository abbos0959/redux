import React from "react";
import "./App.css";
import { Navbar } from "./component/Navbar";
import { NewsAddForm } from "./component/NewsAddForm";
import { NewsFilter } from "./component/NewsFilter";
import { NewsList } from "./component/NewsList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <NewsList />
        <div className="content-page">
          <NewsAddForm />
          <NewsFilter />
        </div>
      </div>
    </div>
  );
}

export default App;
