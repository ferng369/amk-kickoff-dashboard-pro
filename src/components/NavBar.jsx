
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 px-6 flex justify-center space-x-6 shadow">
      <Link to="/" className="hover:underline">🏠 Home</Link>
      <Link to="/scope" className="hover:underline">📋 Scope</Link>
      <Link to="/milestones" className="hover:underline">📌 Milestones</Link>
      <Link to="/risks" className="hover:underline">⚠️ Risks</Link>
      <Link to="/team" className="hover:underline">👥 Team</Link>
      <Link to="/employee" className="hover:underline">👨‍💼 Employee</Link>
    </nav>
  );
};

export default NavBar;
