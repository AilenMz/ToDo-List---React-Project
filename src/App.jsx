import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { generate as id } from "shortid";

//archivos
import allColors from "./styles/colors.js";
import FormTask from "./components/formTask.jsx";
import Task from "./components/task.jsx";
import Footer from "./components/Footer.jsx";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: sans-serif;
    background-color: #222;
    color: ${allColors.mainColor};
    text-align: center;
    margin:0;
    padding-top: 30px;
    height: 100%;

    .contenedor{
      max-width: 850px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 40px;
      padding-right: 40px;
      min-height: calc(100vh - 27.5rem);
    }
  }
`;

const App = () => {
  const [colorSelected, setColorSelected] = useState(allColors.colors[0]);
  const [task, setTask] = useState([
    // {
    //   title: "Aprender React",
    //   color: allColors.colors[0],
    //   done: false,
    // },
  ]);

  const createNewTask = (title) => {
    const newTask = {
      id: id(),
      title,
      color: colorSelected,
      done: false,
    };
    const AllTasks = [...task, newTask];
    setTask(AllTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value !== "") {
      createNewTask(e.target.title.value);
      e.target.title.value = "";
    }
  };

  const handleChangeColor = (color) => {
    setColorSelected(color);
  };

  const handleCompleteTask = (id) => {
    const currentTask = [...task];
    const tarea = currentTask.find((tarea) => tarea.id === id);
    const index = currentTask.indexOf(tarea);

    currentTask[index].done = !currentTask[index].done;

    setTask(currentTask);
  };

  const handleDeleteTask = (id) => {
    let currentTask = [...task];
    currentTask = currentTask.filter((task) => task.id !== id);

    setTask(currentTask);
  };

  return (
    <>
      <GlobalStyle />
      <header>
        <h1>To Do List</h1>
        <FormTask
          handleChangeColor={handleChangeColor}
          handleSubmit={handleSubmit}
          colorSelected={colorSelected}
        />
      </header>

      <div className="contenedor">
        {task.length === 0 && (
          <div>
            <p>Not tasks yet</p>
          </div>
        )}
        {task.map((task) => (
          <Task
            key={id()}
            title={task.title}
            color={task.color}
            done={task.done}
            //handleCompleteTask={this.handleCompleteTask}
            handleCompleteTask={() => handleCompleteTask(task.id)}
            handleDeleteTask={() => handleDeleteTask(task.id)}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default App;
