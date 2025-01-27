import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import { statusOptions } from '../utils';
 

const CustomDropdown = ({ status, setStatus}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(status);

  const options = ["Pending", "Progress", "Completed"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelected(option);
    setStatus(option)
    setIsOpen(false);
  };
 
  return (
    <div style={styles.dropdown}>
      <div style={styles.header} onClick={toggleDropdown}>
        <div
          style={{
            ...styles.status,
            backgroundColor: statusOptions[selected],
          }}
        ></div>
        {selected}
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      {isOpen && (
        <div style={styles.options}>
          {options.map((option, index) => (
            <div
              key={index}
              style={styles.option}
              onClick={() => handleOptionClick(option)}
            >
              <div
                style={{
                  ...styles.status,
                  backgroundColor: statusOptions[option],
                }}
              ></div>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  dropdown: {
    width: "100%",
    position: "relative",
  },
  header: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  status: {
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    display: "inline-block",
    marginRight: "5px",
  },
  arrow: {
    marginLeft: "10px",
    fontSize: "12px",
  },
  options: {
    marginTop: "5px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#fff",
    position: "absolute",
    width: "100%",
    zIndex: 1000,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    padding: "10px",
  },
  option: {
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #eee",
    backgroundColor: "#fff",
  },
  optionHover: {
    backgroundColor: "#f0f0f0",
  },
};

export default CustomDropdown;
