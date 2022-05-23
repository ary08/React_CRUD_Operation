// import "./styles.css";
import "./App.css";
import React from "react";
import Create from "./components/create/Create";
import Read from "./components/read/Read";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Update from "./components/update/Update";
import Delete from "./components/delete/Delete";

export default function App() {
  const [play, setPlay] = React.useState(false);

  const playButton = () => {
    setPlay(true);
  };
  return (
    <div className="main">
      {play ? (
        <Router>
          <Routes>
            <Route path="/" element={<Create />} />

            <Route path="/read" element={<Read />} />

            <Route path="/update" element={<Update />} />
            <Route path="/delete" element={<Delete />} />
          </Routes>
        </Router>
      ) : (
        <div>
          <h1>React CRUD Operation</h1>
          <button className="ui button" type="submit" onClick={playButton}>
            Let's Play With CRUD Operation
          </button>
        </div>
      )}
    </div>
  );
}
