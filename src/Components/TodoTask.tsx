import React from "react";
import { ITask } from "../Interfaces";
import { Button, message, Popconfirm } from "antd";

interface Props {
  task?: ITask;
  completeTask(taskNameToDelete: string): void;
}

const confirm = (e?: React.MouseEvent<HTMLElement>) => {
  console.log(e);
  message.success("Click on Yes");
};

const cancel = (e?: React.MouseEvent<HTMLElement>) => {
  console.log(e);
  message.error("The task was not deleted");
};

const TodoTask: React.FC<Props> = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <Popconfirm
          title="Are you sure to delete this task?"
          onConfirm={() => {
            completeTask(task?.taskName!);
          }}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <Button>To-Do : {task?.taskName}</Button>
        </Popconfirm>
      </div>
    </div>
  );
};

export default TodoTask;
