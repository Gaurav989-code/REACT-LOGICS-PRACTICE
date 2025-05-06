import React, { useEffect, useState } from "react";

const Selectable_Grid = () => {
  const [twoDMatrix, setTwoDMatrix] = React.useState([]);
  const [start, setStart] = React.useState([]);
  const [end, setEnd] = useState([]);

  const prepareMatrix = () => {
    const matrix = [];
    for (let i = 0; i <= 9; i++) {
      for (let j = 0; j <= 9; j++) {
        const obj = {
          pos: [i, j],
          isColor: false,
        };
        matrix.push(obj);
      }
    }
    setTwoDMatrix(matrix);
  };

  useEffect(() => {
    prepareMatrix();
  }, []);

  const handelDrag = (e, pos) => {
    setStart(pos);
    prepareMatrix();
  };
  const handelOnDragOver = (e, pos) => {
    setEnd(pos);
  };

  const fillColor = (startPos, endPos) => {
    const [startRow, startCol] = startPos;
    const [endRow, endCol] = endPos;
    const selectedGrid = [];
    for (let i = startRow; i <= endRow; i++) {
      for (let j = startCol; j <= endCol; j++) {
        selectedGrid.push([i, j].join(""));
      }
    }
    let copyMatrix = [...twoDMatrix];
    copyMatrix = copyMatrix.map((item) => {
      const { pos } = item;
      const stringPos = pos.join("");
      if (selectedGrid.includes(stringPos)) {
        item.isColor = true;
      }
      return item;
    });
    setTwoDMatrix(copyMatrix);
  };
  useEffect(() => {
    if (start.length > 1 && end.length > 1) {
      fillColor(start, end);
    }
  }, [start, end]);

  return (
    <div className="">
      <h1 className="m-5 text-2xl font-bold">
        Selectable_Grid Selectable_Grid
      </h1>
      <div className="flex justify-center  items-center h-[500px]">
        <div className="grid grid-cols-10 mt-15 grid-rows-10">
          {twoDMatrix.map((item, index) => (
            <div
              draggable
              onDragOver={(e) => handelOnDragOver(e, item.pos)}
              onDrag={(e) => handelDrag(e, item.pos)}
              key={index}
              className={`cell ${
                item.isColor ? "bg-blue-500" : ""
              } w-10 h-10 border-2 cursor-pointer border-gray-600 flex justify-center items-center `}
            >
              {item.pos}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Selectable_Grid;
