import React from "react";

const CustomModel = ({ handelClose, handelOffer }) => {
  const handelOutSideClick = (e) => {
    console.log(e.target.className);
    if (
      e.target.className ===
      "main bg-radial from-transparent- from-10% to-fuchsia-300 fixed z-1 w-[100%] h-[100%] top-0 left-0 grid items-center justify-center "
    ) {
      handelClose();
    }
  };

  return (
    <div
      onClick={handelOutSideClick}
      className="main bg-radial from-transparent- from-10% to-fuchsia-300 fixed z-1 w-[100%] h-[100%] top-0 left-0 grid items-center justify-center "
    >
      <div className="bg-gray-200 border-2 rounded-2xl w-[300px] h-[350px] relative flex flex-col items-center gap-4 p-4 ">
        <button
          onClick={handelClose}
          className="absolute top-0 left-0  bg-amber-300 rounded-lg px-5 m-4 text-sm   "
        >
          X
        </button>
        <div className="mt-20 mx-5 text-lg font-bold text-center">
          Click the button bellow to accept our amazing offer !
        </div>
        <button
          onClick={handelOffer}
          className="bg-amber-300 mt-14 px-5 py-2 border-2  rounded-lg"
        >
          Accept-Offer
        </button>
      </div>
    </div>
  );
};

export default CustomModel;
