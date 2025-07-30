
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Scope from "./pages/Scope";
import Milestones from "./pages/Milestones";
import Risks from "./pages/Risks";
import Team from "./pages/Team";
import Employee from "./pages/Employee";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scope" element={<Scope />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/risks" element={<Risks />} />
          <Route path="/team" element={<Team />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
