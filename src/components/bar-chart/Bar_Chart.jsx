import React, { useEffect, useState } from "react";

const Bar_Chart = () => {
  const [freq, setFreq] = React.useState(undefined);
  const [yAxis, setYAxis] = useState([]);

  const fetchApi = async () => {
    const url =
      "https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new";
    const res = await fetch(url);
    let data = await res.text();
    data = data.split("\n").filter(Boolean);
    const map = {};
    data?.forEach((item) => {
      if (map[item]) {
        map[item] = map[item] + 1;
      } else {
        map[item] = 1;
      }
    });
    setFreq(map);
  };
  console.log(freq);

  //preparing y-axis data
  // [30,20,10,0]
  useEffect(() => {
    if (freq) {
      const max = Math.max(...Object.values(freq));
      const maxVal = Math.ceil(max / 10) * 10;
      let arr = [];
      for (let i = maxVal / 10; i >= 0; i--) {
        //3,2,1,0
        arr.push(i * 10); //30,20,10,0
      }
      setYAxis(arr);
    }
  }, [freq]);
  console.log("yAxis ", yAxis);

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="w-screen h-[100vh]">
      <div className="container w-[100%] h-[100%] flex flex-col items-center justify-center">
        <div className="box flex border-l-2 border-b-2  w-[70%] h-[70%] relative  ">
          <div
            className="box-y-axis flex flex-col justify-between items-center absolute bottom-0 -left-6"
            style={{
              height: `${yAxis && yAxis[0]}%`,
            }}
          >
            {yAxis?.map((val, idx) => (
              <div key={idx}>
                <span>{val}</span>
              </div>
            ))}
          </div>

          {freq &&
            Object.entries(freq)?.map(([key, val]) => (
              <div className="box-x-axis  flex-1 flex align-center relative left-4  "> 
                <div
                  style={{
                    height: `${val}%`,
                  }}
                  className="graph w-[20px] bg-cyan-400 transform translate-x-[-50%]  absolute  left-4 bottom-0 "
                ></div>
                <div className="index absolute  -bottom-7 align-center left-4">{key}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Bar_Chart;
