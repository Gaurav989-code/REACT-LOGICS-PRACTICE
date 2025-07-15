import React from "react";
import { data } from "../../data";

const Transfer_Files = () => {
  const [leftItems, setLeftItems] = React.useState(data);
  const [rightItems, setRightItems] = React.useState([]);

  const checkedList = (list, id, checked) => {
    return list.map((item) => {
      if (id === item.id) {
        return { ...item, checked: !checked };
      }
      return item;
    });
  };

  const handelClicked = (id, checked, direction) => {
    if (direction === "LEFT") {
      let copyList = [...leftItems];
      copyList = checkedList(copyList, id, checked);
      setLeftItems(copyList);
    } else {
      let copyList = [...rightItems];
      copyList = checkedList(copyList, id, checked);
      setRightItems(copyList);
    }
  };

  const resetItems = (list) => {
    return list.map((item) => ({ ...item, checked: false }));
  };

  const handelTransferBtn = (dir) => {
    if (dir === "Left_to_Right") {
      if (leftItems.length) {
        const copyList = [...leftItems];
        const checkedList = copyList.filter((item) => item.checked);
        const unCheckedList = copyList.filter((item) => !item.checked);
        setRightItems(resetItems([...rightItems, ...checkedList]));
        setLeftItems(unCheckedList);
      }
    } else {
      const copyList = [...rightItems];
      const checkedList = copyList.filter((item) => item.checked);
      const unCheckedList = copyList.filter((item) => !item.checked);
      setRightItems(unCheckedList);
      setLeftItems(resetItems([...leftItems, ...checkedList]));
    }
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="font-bold text-2xl mt-20">Transfer Files</h1>
      <div className="flex items-center justify-center gap-10 mt-20">
        <div className="box border-1 p-1 border-black rounded-xl w-[200px] h-[300px]">
          {leftItems.map(({ title, id, checked }) => (
            <div
              onClick={() => handelClicked(id, checked, "LEFT")}
              className="item flex flex-col gap-2 p-1 "
              key={id}
              id="id"
            >
              <h1
                className={`h-[30px] cursor-pointer ${
                  checked ? "bg-gray-900 text-white" : "bg-cyan-200"
                } bg-cyan-200 text-center rounded-xl p-1 text-xl mt-1  text-bold `}
              >
                {title}
              </h1>
            </div>
          ))}
        </div>
        <div className="actions flex flex-col items-center gap-5 ">
          <button
            onClick={() => handelTransferBtn("Left_to_Right")}
            className="text-xl bg-yellow-300 border-1 border-black rounded-2xl text-center px-8 py-1"
          >
            LEFT
          </button>
          <button
            onClick={() => handelTransferBtn("Right_to_Left")}
            className="text-xl bg-red-300 border-1 border-black rounded-2xl text-center px-6 py-1"
          >
            RIGHT
          </button>
        </div>
        <div className="box border-1 p-1 border-black rounded-xl w-[200px] h-[300px]">
          {rightItems.map(({ title, id, checked }) => (
            <div
              onClick={() => handelClicked(id, checked, "RIGHT")}
              className="item flex flex-col gap-2 p-1 "
              key={id}
              id="id"
            >
              <h1
                className={`h-[30px] cursor-pointer ${
                  checked ? "bg-gray-900 text-white" : "bg-cyan-200"
                } bg-cyan-200 text-center rounded-xl p-1 text-xl mt-1  text-bold `}
              >
                {title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transfer_Files;
