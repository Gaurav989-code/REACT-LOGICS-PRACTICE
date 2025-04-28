import React from "react";

const Task_manager = () => {
  const [value, setValue] = React.useState("");
  const [tasks, setTasks] = React.useState([]);
  const [draggedTask, setDraggedTask] = React.useState(null);
  const [updateItem, setUpdateItem] = React.useState(null);

  const TODO = "todo";
  const DOING = "doing";
  const DONE = "done";

  const handelChange = (e) => {
    setValue(e.target.value);
  };
  const handelKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (updateItem) {
        const obj = {
          title: value,
          status: updateItem.status,
          id: updateItem.id,
        };
        let copyTask = [...tasks];
        const filterList = copyTask.filter((task) => task.id !== updateItem.id);
        setTasks((prev) => [...filterList, obj]);
        setUpdateItem(null);
      } else {
        const obj = {
          title: value,
          status: "todo",
          id: Date.now(),
        };
        setTasks((prev) => [...prev, obj]);
      }

      setValue("");
    }
  };

  const handelDrag = (e, task) => {
    setDraggedTask(task);
  };

  const handelDragAndDrop = (status) => {
    let copyTask = [...tasks];
    copyTask = copyTask.map((item) => {
      if (draggedTask.id === item.id) {
        item.status = status;
      }
      return item;
    });
    setDraggedTask(null);
    setTasks(copyTask);
  };
  const handelOnDrop = (e) => {
    const status = e.target.getAttribute("data-status");
    console.log(status);
    if (status === TODO) {
      handelDragAndDrop(TODO);
    } else if (status === DOING) {
      handelDragAndDrop(DOING);
    } else if (status === DONE) {
      handelDragAndDrop(DONE);
    }
  };
  const handelOnDragOver = (e) => {
    e.preventDefault();
  };

  const handelDeleteTask = (item) => {
    let copyTask = [...tasks];
    copyTask = copyTask.filter((task) => task.id !== item.id);
    setTasks(copyTask);
  };

  const updateTask = (item) => {
    setUpdateItem(item);
    setValue(item.title);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center ">
      <h1 className="text-3xl mt-4 font-bold ">Task Manager</h1>
      <div className=" w-[60%] text-center border-2 p-4 mt-4 gap-4">
        <input
          onChange={handelChange}
          value={value}
          onKeyDown={handelKeyDown}
          className="border-2 rounded-2xl w-[50%] text-xl p-2 font-bold border-black"
          type="text"
        />
        <div className="flex justify-between mt-7  h-[500px] ">
          <div
            data-status={TODO}
            onDrop={handelOnDrop}
            onDragOver={handelOnDragOver}
            className="w-[30%] border-2 p-1 rounded-2xl "
          >
            <h1 className="text-xl rounded-2xl bg-amber-300 p-2 font-bold">
              To-Do
            </h1>
            {tasks.length > 0 &&
              tasks.map(
                (task) =>
                  task.status === TODO && (
                    <div
                      onDrag={(e) => {
                        handelDrag(e, task);
                      }}
                      draggable
                      key={task.id}
                      className=" w-[90%] h[30px] border-1 rounded-2xl cursor-grab hover:bg-cyan-100 border-gray-400 
                  flex justify-between items-center m-2 p-2"
                    >
                      <span className="font-bold text-lg">{task.title}</span>
                      <div>
                        <span
                          onClick={(e) => updateTask(task)}
                          className="w-[30px] hover:bg-blue-400 p-1 cursor-pointer "
                        >
                          ✏️
                        </span>
                        <span
                          onClick={(e) => handelDeleteTask(task)}
                          className="w-[30px] p-1 hover:bg-red-400  cursor-pointer  "
                        >
                          🪣
                        </span>
                      </div>
                    </div>
                  )
              )}
          </div>
          <div
            data-status={DOING}
            onDrop={handelOnDrop}
            onDragOver={handelOnDragOver}
            className="w-[30%] border-2 p-1 rounded-2xl "
          >
            <h1 className="text-xl rounded-2xl bg-purple-500 p-2 font-bold">
              Doing
            </h1>
            {tasks.length > 0 &&
              tasks.map(
                (task) =>
                  task.status === DOING && (
                    <div
                      onDrag={(e) => {
                        handelDrag(e, task);
                      }}
                      draggable
                      key={task.id}
                      className=" w-[90%] h[30px] border-1 rounded-2xl cursor-grab hover:bg-cyan-100 border-gray-400 
                  flex justify-between items-center m-2 p-2"
                    >
                      <span className="font-bold text-lg">{task.title}</span>
                      <div className="flex ">
                        <span
                          onClick={(e) => updateTask(task)}
                          className="w-[30px] hover:bg-blue-400 p-1 cursor-pointer "
                        >
                          ✏️
                        </span>
                        <span
                          onClick={(e) => handelDeleteTask(task)}
                          className="w-[30px] p-1 hover:bg-red-400  cursor-pointer  "
                        >
                          🪣
                        </span>
                      </div>
                    </div>
                  )
              )}
          </div>
          <div
            data-status={DONE}
            onDrop={handelOnDrop}
            onDragOver={handelOnDragOver}
            className="w-[30%] border-2 p-1 rounded-2xl "
          >
            <h1 className="text-xl rounded-2xl bg-green-500 p-2 font-bold">
              Done
            </h1>
            {tasks.length > 0 &&
              tasks.map(
                (task) =>
                  task.status === DONE && (
                    <div
                      onDrag={(e) => {
                        handelDrag(e, task);
                      }}
                      draggable
                      key={task.id}
                      className=" w-[90%] h[30px] border-1 rounded-2xl cursor-grab hover:bg-cyan-100 border-gray-400 
                  flex justify-between items-center m-2 p-2"
                    >
                      <span className="font-bold text-lg">{task.title}</span>
                      <div key={task.id} className="flex ">
                        <span
                          onClick={(e) => updateTask(task)}
                          className="w-[30px] hover:bg-blue-400 p-1 cursor-pointer "
                        >
                          ✏️
                        </span>
                        <span
                          onClick={(e) => handelDeleteTask(task)}
                          className="w-[30px] p-1 hover:bg-red-400  cursor-pointer  "
                        >
                          🪣
                        </span>
                      </div>
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task_manager;
