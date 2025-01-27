import React from "react";
import { PencilFill, Trash3 } from "react-bootstrap-icons";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { statusOptions } from "../utils";

export const TodoList = ({ todoList, status, count, dispatch, setUpdateTask}) => { 

  const handleUpdateClick = (id) => {   
    console.log(id)
    setUpdateTask(id)
  }
  const handleDeleteClick = (id) =>
    dispatch({ type: "DELETE_TODO", payload: id });

  return (    
        <Accordion defaultActiveKey="1" className="mb-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {status} (<b>{count}</b>)
            </Accordion.Header>
            <Accordion.Body>
              {todoList?.map((todo) => (
                <Container key={todo.id} className="mb-3">
                  <Row className="align-items-center">
                    <Col>
                      <div className="d-flex align-items-center">
                        <div
                          className="todo-initial-circle"
                          title={todo.name.charAt(0)}
                        >
                          <b>{todo.name.charAt(0)}</b>
                        </div>
                        <span className="todo-name">{todo.name}</span>
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex justify-content-end align-items-center">
                        <div
                          className="status-circle"
                          style={{
                            backgroundColor: statusOptions[todo.status],
                          }}
                        ></div>
                        <span>{todo.status}</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="todo-description">
                        {todo.des}
                        <br />
                        <span className="todo-date">{todo.date}</span>
                      </div>
                      {
                        todo.status!=='Completed'&&<div className="todo-actions d-flex justify-content-end">
                        <PencilFill
                          onClick={() => handleUpdateClick(todo.id)}
                          className="icon-action"
                        />
                        <Trash3
                          onClick={() => handleDeleteClick(todo.id)}
                          className="icon-action delete-icon"
                        />
                      </div>
                      }
                      
                    </Col>
                  </Row>
                  <hr />
                </Container>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>   
  );
};
