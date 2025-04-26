import React, { useEffect, useRef, useState } from "react";

const Code_Input = () => {
  const emptyArr = ["", "", "", ""];
  const ref = [useRef(), useRef(), useRef(), useRef()];
  const [inputs, setInputs] = useState(emptyArr);
  const [missed, setMissed] = useState(emptyArr);
  const code = "1234";

  const handelSubmit = () => {
    const missing = inputs
      .map((item, i) => {
        if (item === "") return i;
      })
      .filter((item) => item || item === 0);
    console.log("missing", missing);
    setMissed(missing);
    if (missing.length) {
      return;
    }

    const userInput = inputs.join("");
    const isMatch = userInput === code;
    const msg = isMatch ? "Code Matched" : "Code Not Matched";
    alert(msg);
  };

  useEffect(() => {
    ref[0].current.focus();
  }, []);

  const handelInputChange = (e, index) => {
    const val = e.target.value;
    console.log(val, index);
    if (!Number(val)) return;

    if (index < inputs.length - 1) {
      ref[index + 1].current.focus();
    }

    const copyInputs = [...inputs];
    copyInputs[index] = val;
    setInputs(copyInputs);
  };

  const handelKey = (e, index) => {
    console.log(e.keyCode, index);
    if (e.keyCode === 8) {
      const copyInputs = [...inputs];
      copyInputs[index] = "";
      setInputs(copyInputs);

      if (index > 0) {
        ref[index - 1].current.focus();
      }
    }
  };

  const handelPaste = (e) => {
    const data = e.clipboardData.getData("text");
    console.log(data);
    if (!Number(data) || data.length !== inputs.length) return;

    const pestCode = data.split("");
    setInputs(pestCode);
    ref[inputs.length - 1].current.focus();
  };

  return (
    <div className="bg-cyan-500  text-2xl font-bold flex flex-col  items-center w-screen h-screen">
      <h1 className="mt-10">Two-Factor_code-Input</h1>
      <div className="flex bg-white flex-col justify-center border-2 items-center mt-20 w-[300px] h-[300px] gap-4">
        <div className="flex gap-2">
          {emptyArr.map((item, index) => {
            return (
              <input
                value={inputs[index]}
                ref={ref[index]}
                key={index}
                className={`border-2 ${
                  missed.includes(index) ? "border-red-500" : ""
                } border-gray-400  w-10 text-center  focus:outline-blue-400 `}
                type="text"
                maxLength={1}
                onChange={(e) => handelInputChange(e, index)}
                onKeyDown={(e) => handelKey(e, index)}
                onPaste={handelPaste}
              />
            );
          })}
          {/* <input className="border-2 w-10 " type="text" /> */}
          {/* <input className="border-2  w-10 " type="text" />
          <input className="border-2  w-10 " type="text" />
          <input className="border-2  w-10 " type="text" /> */}
        </div>
        <button
          onClick={handelSubmit}
          className="bg-blue-500 hover:scale-110 mt-7 text-white px-4 py-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Code_Input;
