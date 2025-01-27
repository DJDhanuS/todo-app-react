import React from "react";

export const Footer = ({ setNewTask }) => {
  return (
    <footer className="text-white text-center py-5 mt-auto">
      <button className="btn-add" onClick={() => setNewTask(true)}>
        <b>+</b>
      </button>
    </footer>
  );
};
