import React, { useEffect, useState } from "react";

const ProgressBar = ({ color }) => {
  const [progress, setProgress] = useState(0);

  const styleObj = {
    width: `${progress}%`,
    backgroundColor: color || "green",
    height: "40px",
  };

  useEffect(() => {
    const time = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      }
    }, 20);
    return () => clearInterval(time);
  }, [progress]);

  return (

    <div className="w-[100vw] flex flex-col items-center  ">
        <h1 className="text-3xl mt-10 font-bold "> Progress-Bar</h1>
        <div className="w-[40%] relative h-[40px] bg-gray-300 rounded-full mt-10">
            <div className=" bg-gray-300 flex items-center justify-center px-4 rounded-full absolute " style={styleObj}>
                <div>{`${progress}%`}</div>

            </div>
        </div>

    </div>



    // <div className="w-[100vw] h-[100vh] flex justify-center items-center ">
    //   <div className="w-[40%] h-[100%] flex flex-col items-center  ">
    //     <h1 className="text-3xl mt-10 font-bold "> Progress-Bar</h1>
    //     <div className="w-[100%] relative h-[40px] bg-gray-300 rounded-full mt-10">
    //       <div className=" absolute  mt-20 flex p-2 items-center  " style={styleObj}>
    //         <div className=" absolute flex justify-center  items-center text-white font-bold">{`${progress}%`}</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProgressBar;
