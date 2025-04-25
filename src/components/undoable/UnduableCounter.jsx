import React, { useState } from "react";

const UndoableCounter = () => {
  
    const [value, setValue] = useState(0);
    const [redoList, setRedoList] = useState([]);
    const [history, setHistory] = useState([]);
    const [undoCount, setUndoCount] = useState(0);
  
    const maintainHistory = (key, prev, curr) => {
      console.log(key, prev, curr);
      const obj = {
        action: key,
        prev,
        curr
      }
      const copyHistory = [...history];
      copyHistory.unshift(obj);//
      setHistory(copyHistory);
    }
  
    const handleClick = (key) => {
      const val = parseInt(key);
      console.log(key);
      maintainHistory(key, value, val + value);
      setValue((existingValue) => existingValue + val);
    }
  
    const handleUndo = () => {
      //stack LIFO
      //histor [ +10, +1]  redolist [-1]
      if (history.length) {
        if (undoCount + 1 > 5) {
          alert('You cant undo beyond limit=5');
          return;
        }
        const copyHist = [...history];
        const firstItem = copyHist.shift();
        setHistory(copyHist);
  
        setValue(firstItem.prev);
  
        const copyRedoList = [...redoList];
        copyRedoList.push(firstItem);
        setRedoList(copyRedoList);
      }
    }
  
    console.log(redoList);
  
    const handleRedo = () => {
      if (redoList.length) {
        const copyRedoList = [...redoList];
        const poppedValue = copyRedoList.pop();
        setRedoList(copyRedoList);
        const { action, prev, curr } = poppedValue;
        setValue(curr);
        maintainHistory(action, prev, curr);
        // [+100,+10,+1]
      }
    }

  return (
    <div className="flex flex-col justify-center items-center w-full m-5 mt-10">
      <h1 className="text-3xl font-bold">Undoable Counter</h1>
      <div className="flex gap-10 mt-10">
        <button onClick={handleUndo } className="text-2xl bg-purple-300 ">
          Undo
        </button>
        <button onClick={handleRedo} className="text-2xl bg-purple-300 ">
          Redo
        </button>
      </div>
      <div className="flex w-[100%] justify-center gap-10 mt-10 items-center ">
        {[-100, -10, -1].map((e, index) => (
          <button
            onClick={() => {
              handleClick(e);
            }}
            className=" bg-purple-600 text-white m-2"
            key={index}
          >
            {e}
          </button>
        ))}
        <div className="m-2 text-5xl font-bold">{value}</div>

        {["+1", " +10", "+100"].map((e, index) => (
          <button
            onClick={() => {
              handleClick(e);
            }}
            className=" bg-purple-600 text-white m-2"
            key={index}
          >
            {e}
          </button>
        ))}
      </div>
      <div className="flex justify-center w-[300px] h-[400px] overflow-y-auto border-2 mt-10">
        <h1 className="text-lg mt-5 text-center font-bold">
          {" "}
          <span>History</span>
          {history.map((e, index) => (
            <div
              className="text-md flex  justify-around gap-20 w-full p-5"
              key={index}
            >
              <div> {e.action}</div>
              <div>{`[${e.prev} ➡️ ${e.curr}]`}</div>
            </div>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default UndoableCounter;
