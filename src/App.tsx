import React, { FC, ChangeEvent, useState, useEffect } from "react";
import { Input, Button, Typography, Alert, Popconfirm, message } from "antd";
import "./App.css";
import "antd/dist/antd.min.css";
import { ITask } from "./Interfaces";
import TodoTask from "./Components/TodoTask";

const { Title } = Typography;

const cancel = (e?: React.MouseEvent<HTMLElement>) => {
  console.log(e);
  message.error("The task was not created");
};

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [currentPage, setCurrentPage] = useState(2);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const addTask = (): void => {
    const newTask = { taskName: task };
    setTodoList([...todoList, newTask]);
    setTask("");
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  //Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = task.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="App">
      <div className="text1">
        <Title className="text-left ... ml-10 ... mt-2 ..." level={4}>
          Create task
        </Title>
      </div>
      <div className="header">
        <div className="inputContainer">
          <Input
            type="text"
            placeholder="Add Task"
            name="task"
            value={task}
            onChange={handleChange}
          />
        </div>
        <Popconfirm
          title="Are you sure to add this task?"
          onConfirm={addTask}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary">Add</Button>
        </Popconfirm>
      </div>
      <div className="text1">
        <div className="head1">
          <Title className="text-left ... ml-5 ..." level={4}>
            To-Do List
          </Title>
        </div>
      </div>
      <div className="todoList">
        {" "}
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
