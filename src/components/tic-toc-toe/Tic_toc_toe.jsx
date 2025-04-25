import React, { useEffect, useState } from "react";

const Tic_toc_toe = () => {
  const [matrix, setMatrix] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [won, setWon] = useState(null);

  const handelClick = (e) => {
    const pos = e.target.id;
    console.log(pos);
    const copyMatrix = [...matrix];
    copyMatrix[pos] = isXTurn ? "X" : "O";
    setMatrix(copyMatrix);
    setIsXTurn((prevTurn) => !prevTurn);
  };

  const decideWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (matrix[a] && matrix[a] === matrix[b] && matrix[a] === matrix[c]) {
        setWon(matrix[a]);
      }
    }
  };

  useEffect(() => {
    decideWinner();
  }, [matrix]);

  const handelReset = () => {
    setMatrix(Array(9).fill(null));
    setIsXTurn(true);
    setWon(null);
  };
  return (
    <div className="h-screen w-screen bg-cyan-500  flex items-center justify-center">
      <div className="flex flex-col bg-amber-200 border-2 w-[500px] h-[500px] text-center justify-center items-center">
        <h1 className="text-4xl font-semibold ">Tic_toc_toe</h1>
        <div
          onClick={handelClick}
          className=" text-2xl grid grid-cols-3 grid-rows-3 mt-10"
        >
          {matrix.map((item, index) => (
            <div
              key={index}
              id={index}
              className=" h-[70px] w-[70px] border-2 border-gray-900 bg-gray-400 
              flex justify-center items-center cursor-pointer hover:bg-white  "
            >
              {item}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <button onClick={handelReset} className="px-15 bg-cyan-400 hover:bg-red-400 ">
            Reset
          </button>
          <div className="text-lg mt-2 font-medium">Next player: {isXTurn ? "X" : "O"} </div>
          {won && <div className="text-lg mt-2 text-red-600 font-medium">Player {won} Won the Game</div>}
        </div>
      </div>
    </div>
  );
};

export default Tic_toc_toe;
