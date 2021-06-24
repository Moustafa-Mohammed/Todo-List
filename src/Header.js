import React from "react";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div className="header">
      <h1>Todo App</h1>
      <div>
        <span className="dark-toggler"></span>
        <input
        className="dark-input"
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </div>
    </div>
  );
};

export default Header;
