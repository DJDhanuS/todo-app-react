import { ArrowLeft } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = ({ newTask, setNewTask, updateTask, setUpdateTask }) => { 
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#034EA2" }}
    >
      <Container style={{ backgroundColor: "#034EA2", color: "white" }}>
        <Navbar.Brand href="/" style={{ color: "white" }}>
          {newTask ? (
            <span>
              <ArrowLeft onClick={() => setNewTask(false)} /> Add Task
            </span>
          ) : updateTask? (
            <span>
              <ArrowLeft onClick={() => setUpdateTask(false)} /> Edit Task
            </span>
          ) : (
            "To-Do App"
          )}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
