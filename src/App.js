import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useReducer, useState } from "react";
import { Container } from "react-bootstrap";
import { AddOrUpdateTodo } from "./components/addOrUpdateTodo";
import { SearchBox } from "./components/search";
import { TodoList } from "./components/todoList";
import { Footer } from "./layouts/footer";
import Header from "./layouts/header";
import TodoReducer from "./reducers/todoReducer";
import "./styles.css";

export default function App() {
  const [state, dispatch] = useReducer(TodoReducer, {
    todos: [
      {
        id: 1,
        name: "Reading book",
        des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        status: "Pending",
        date: "Mon 27, January 2025",
      },
      {
        id: 2,
        name: "Checking Note",
        des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        status: "Progress",
        date: "Mon 27, January 2025",
      },
      {
        id: 3,
        name: "Playing Chess",
        des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        status: "Completed",
        date: "Mon 27, January 2025",
      },
    ],
  });
  const [data, setData] = useState(state.todos)
  const [newTask, setNewTask] = useState(false);
  const [updateTask, setUpdateTask] = useState(false);
  const [searchText, setSearchText] = useState('')

  const statuses = ["Pending", "Progress", "Completed"];
  const searchData = (value) => {
    setSearchText(value);
    const filterData = value
      ? state.todos.filter((todo) =>
          todo.name.toLowerCase().includes(value.toLowerCase())
        )
      : state.todos;
    setData(filterData);
  };

  useEffect(()=> {
    setData(state.todos);
  }, [state])
  
  return (
    <Container fluid>
      <Header newTask={newTask} setNewTask={setNewTask} setUpdateTask={setUpdateTask} updateTask={updateTask}/>
      {newTask || updateTask ? (
        <Container style={{ marginTop: "20px" }}>         
          <AddOrUpdateTodo
          todoList={updateTask? state.todos.filter((todo) => todo.id === updateTask): []}
          newTask={newTask}         
          setUpdateTask={setUpdateTask}
          setNewTask={setNewTask}
          dispatch={dispatch}
        />
        </Container>
      ) : (
        <Container>
          <SearchBox searchData={searchData} value={searchText}/>
          {statuses.map((status) => (            
            <TodoList
              key={status}
              todoList={data.filter((todo) => todo.status === status)}
              count={data.filter((todo) => todo.status === status).length}
              status={status}
              dispatch={dispatch}
              setUpdateTask={setUpdateTask}
            />
          ))}
        </Container>
      )}
      {!newTask &&  <Footer setNewTask={setNewTask} />}
      
    </Container>
  );
}
