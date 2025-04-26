import React from "react";

const Simple_Calculator = () => {
  const [value, setValue] = React.useState("");
  const arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "=",
    ".",
    "clear",
  ];

  const handelChange = (e) => {
    setValue(e.target.value);
  };

  const handelClick = (e) => {
    const id = e.target.id;
    if (id === "clear") {
      setValue("");
    } else if (id === "=") {
      handelSubmit();
    } else {
      setValue((value) => value + id);
    }
  };

  const handelSubmit = (e) => {
    e?.preventDefault();
    try {
      const ans = eval(value);
      setValue(ans);
    } catch (error) {
      alert("Invalid Input");
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col  items-center ">
      <h1 className="text-3xl mt-10 font-bold">Calculator</h1>
      <div className="w-[300px] h-[500px] border-2 mt-10 rounded-xl border-black flex gap-10 flex-col p-4 items-center">
        <form
          onSubmit={handelSubmit}
          className="w-[100px] h-[50px] mt-3 flex justify-center items-center"
          action=""
        >
          <input
            value={value}
            onChange={handelChange}
            className="w-[200px] h-[50px] border-2 p-2 rounded-lg text-2xl border-black"
            type="text"
          />
        </form>
        <div onClick={handelClick} className="grid grid-cols-3 gap-5 mt-2">
          {arr.map((item, i) => {
            return (
              <button id={item} className="p-1 hover:bg-cyan-500" key={i}>
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Simple_Calculator;
