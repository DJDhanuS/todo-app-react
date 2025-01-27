import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { formatDate, getRandomNumber } from "../utils";
import CustomDropdown from './dropdown';

export const AddOrUpdateTodo = ({ newTask, dispatch, todoList = [], setUpdateTask, setNewTask }) => {  
  const isEditMode = todoList.length > 0;
  const [title, setTitle] = useState(isEditMode ? todoList[0].name : "");
  const [des, setDes] = useState(isEditMode ? todoList[0].des : "");
  const [status, setStatus] = useState(isEditMode ? todoList[0].status : "Pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = isEditMode
      ? {
          ...todoList[0], 
          name: title,
          des,
          status,
        }
      : {
          id: getRandomNumber(), 
          name: title,
          des,
          status: "Pending",
          date: formatDate(new Date()),
        };

    dispatch({
      type: isEditMode ? "UPDATE_TODO" : "ADD_TODO",
      payload,
    });

    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDes("");
    setStatus("Pending");    
    setUpdateTask('');
    setNewTask(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          value={title}
          placeholder="Enter the title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <Form.Control
          as="textarea"
          value={des}
          placeholder="Enter the description"
          onChange={(e) => setDes(e.target.value)}
          required
        />
      </Form.Group>
      {!newTask && (
        <CustomDropdown
          status={status}
          setStatus={setStatus}         
        />
      )}
      <br />
      <Button variant="outline-secondary" onClick={resetForm}>
        Cancel
      </Button>
      <Button
        style={{ backgroundColor: "#034EA2", float: "right" }}
        type="submit"
      >
        {isEditMode ? "Update" : "Add"}
      </Button>
    </Form>
  );
};
