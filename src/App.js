import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateQuiz from "./pages/CreateQuiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/createquiz" element={<CreateQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;
