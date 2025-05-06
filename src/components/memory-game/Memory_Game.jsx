import React, { useEffect } from "react";

const getNums = () => {
  const list = [];
  for (let i = 1; i <= 18; i++) {
    list.push(i);
    list.push(i);
  }
  return list;
};

const Memory_Game = () => {
  const [nums, setNums] = React.useState(getNums());
  const [stage, setStage] = React.useState("init");
  const [opened, setOpened] = React.useState([]);
  const [solvedList, setSolvedList] = React.useState([]);

  const randomNums = () => {
    const copyNums = [...nums];
    return copyNums.sort(() => Math.random() - 0.5);
  };

  const handelStart = () => {
    setStage("start");
    setNums(randomNums());
    setSolvedList([]);
  };

  const handelClick = (num, index) => {
    if (opened.length === 2) return;
    setOpened((prev) => [...prev, index]);
  };

  useEffect(() => {
    if (opened.length === 2) {
      setTimeout(() => {
        const id1 = opened[0];
        const id2 = opened[1];
        if (nums[id1] === nums[id2]) {
          setSolvedList((prev) => [...prev, nums[id1]]);
        }
        setOpened([]);
      }, 1000);
    }
  }, [opened]);

  useEffect(() => {
    if (solvedList.length === 18) {
      setStage("win");
    }
  }, [solvedList]);

  const getClassName = (num, index) => {
    if (solvedList.includes(num)) return "remove";
    if (opened.includes(index)) return "show";
    else {
      return "hide";
    }
    return "";
  };


  return (
    <div className="w-[100%]  h-[100vh]">
      <div className="flex flex-col mt-10  items-center w-screen h-[80%] ">
        <h1 className="text-2xl font-bold">Memory Game</h1>
        {stage === "init" && (
          <button
            onClick={handelStart}
            className="bg-blue-300 mt-6  border-2 rounded-2xl p-2 m-2"
          >
            Play-Game
          </button>
        )}
        {stage === "start" && (
          <div className="flex items-center justify-center h-[90%]">
            <div className="grid grid-cols-6 gap-5">
              {nums.map((num, i) => (
                <div
                  onClick={() => handelClick(num, i)}
                  className={`h-15 w-15 ${getClassName(num, i)} cursor-pointer text-xl font-medium bg-green-300 flex items-center justify-center`}
                  key={i}
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
        )}
        {stage === "win" && (
          <div className="flex  flex-col items-center gap-10 justify-center mt-5 h-[30%]">
            <h1 className="text-2xl font-bold">You won the egame</h1>
            <button onClick={handelStart}
            className="bg-blue-300 border-2 rounded-2xl px-5  mt-4rounded-2xl p-2 m-2">
              Play-Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Memory_Game;
