
import React from "react";
import { motion } from "framer-motion";

const Employee = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto mt-10"
    >
      <h1 className="text-3xl font-bold mb-4">👨‍💼 Employee Page</h1>
      <p className="text-lg text-gray-700 mb-4">
        This page lists the key employees assigned to this project.
      </p>
      <ul className="space-y-4">
        <li className="p-4 border rounded shadow bg-white">
          <strong>Employee 1:</strong> John Doe — Project Manager
        </li>
        <li className="p-4 border rounded shadow bg-white">
          <strong>Employee 2:</strong> Jane Smith — Software Engineer
        </li>
        <li className="p-4 border rounded shadow bg-white">
          <strong>Employee 3:</strong> Michael Lee — UI/UX Designer
        </li>
      </ul>
    </motion.div>
  );
};

export default Employee;
