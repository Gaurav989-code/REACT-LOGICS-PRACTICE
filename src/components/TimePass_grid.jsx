import React from "react";
import { CiStreamOn } from "react-icons/ci";
import {
  FaBluetooth,
  FaBluetoothB,
  FaCalculator,
  FaCamera,
  FaPlane,
  FaWifi,
} from "react-icons/fa";
import { GiMaskedSpider, GiSpiderMask, GiSpiderWeb } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { IoIosAirplane, IoIosVolumeHigh, IoMdFlashlight } from "react-icons/io";
import { IoMoon, IoSunny } from "react-icons/io5";
import { MdOutlineSpeed } from "react-icons/md";
import { RiBatteryLowLine, RiHotspotFill } from "react-icons/ri";
import {
  TbPlayerStopFilled,
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";

//bg-gradient-to-b from-[#16272F] via-[#3E1E1A] to-[#620A08]

const TimePass_grid = () => {
  return (
    <div className="flex flex-col items-center h-[100%] w-[100%] ">
      <h1 className="text-3xl m-5 font-bold">TimePass_grid</h1>
      <div className=" bg-gradient-to-b from-[#395a68] via-[#3E1E1A] to-[#620A08] w-[17%] h-[65%] border-2  mt-10 rounded-2xl flex flex-col items-center gap-1 ">
        <div className=" grid grid-cols-2 gap-2 p-2 m-2 ">
          <div className="bg-[#000] border-1 h-[110px]  rounded-2xl flex gap-2 items-center justify-center   ">
            <div className="flex flex-col gap-2 ">
              <div className=" bg-[#481914] border-1 rounded-full h-[40px] w-[40px] flex items-center justify-center">
                <IoIosAirplane className=" text-xl text-[#FF1500]" />
              </div>
              <div className="bg-[#481914]  border-1 rounded-full h-[40px] w-[40px] flex items-center justify-center">
                <RiHotspotFill className=" text-xl text-[#FF1500]" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className=" bg-[#481914] border-1 rounded-full h-[40px] w-[40px] flex items-center justify-center">
                <FaWifi className=" text-xl text-[#FF1500]" />
              </div>
              <div className=" bg-[#75362F] border-1 rounded-full h-[40px] w-[40px] flex items-center justify-center">
                <FaBluetoothB className=" text-xl text-[#FF1500]" />
              </div>
            </div>
          </div>
          <div className="border-1 h-[110px] p-1 flex flex-col items-center gap-2 rounded-2xl ">
            <div className="flex items-center justify-center m-2  gap-5">
              <div className="border-1 rounded-lg h-[40px] w-[40px]"></div>
              <div className="border-1 -mt-3 rounded-full h-[30px] w-[30px] flex items-center justify-center">
                <CiStreamOn className=" text-xl text-[#FF1500]" />
              </div>
            </div>
            <div className="flex p-1 items-center -mt-4 justify-center">
              <h4 className="text-[9px] font-bold">
                30 for 30 with (with ke SZA)
              </h4>
            </div>
            <div className=" text-[14px] -mt-2 font-bold flex items-center justify-center gap-5">
              <TbPlayerTrackNextFilled />
              <TbPlayerStopFilled />
              <TbPlayerTrackPrevFilled />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className=" bg-[#FF1500] border-1 rounded-full h-[40px] w-[40px] text-2xl font-semibold italic flex items-center justify-center">
            M
          </div>
          <div className="bg-[#FF1500] border-1 rounded-full h-[40px] w-[40px] text-2xl font-semibold italic flex items-center justify-center">
            I
          </div>
          <div className=" bg-[#FF1500] border-1 rounded-full h-[40px] w-[40px] text-2xl font-semibold italic flex items-center justify-center">
            L
          </div>
          <div className="border-1 rounded-full h-[40px] w-[40px] bg-[#000] text-2xl flex items-center justify-center">
            <GiSpiderWeb className=" text-3xl text-cyan-500" />
          </div>
        </div>
        <div className=" flex items-center justify-center gap-4 mt-3">
          <div className=" bg-[#000] border-1 rounded-3xl h-[45px] w-[110px] flex items-center p-2 ">
            <div className="border-1 bg-[#75362F] rounded-full h-[35px] w-[35px] flex items-center justify-center">
              <IoMoon className=" text-xl text-[#FF1500]" />
            </div>
          </div>
          <div className="border-1 bg-[#FF1500] rounded-3xl h-[45px] w-[110px] flex items-center gap-2 p-2">
            <div className=" bg-[#000]  border-1  rounded-full h-[35px] w-[35px] flex items-center justify-center"></div>
            <h2 className="text-[8px] font-bold">have a good day</h2>
          </div>
        </div>

        <div className=" grid grid-cols-2 gap-2 p-2 m-2 ">
          <div className=" h-[110px] rounded-2xl flex gap-4 items-center justify-center   ">
            <div className="flex flex-col gap-2">
              <div className="border-1 bg-[#000] rounded-full h-[40px] w-[40px] flex items-center justify-center">
                <MdOutlineSpeed className=" text-xl text-[#FF1500]" />
              </div>
              <div className="border-1 bg-[#000] rounded-full h-[40px] w-[40px] flex items-center justify-center">
              <GiSpiderMask className=" text-3xl text-cyan-500" />

              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="border-1 bg-[#000] rounded-full h-[40px] w-[40px] flex items-center justify-center">
                <IoMdFlashlight className=" text-xl text-[#FF1500]" />
              </div>
              <div className="border-1 bg-[#FF1500] rounded-full h-[40px] w-[40px] flex items-center justify-center">
                <GrSecure className=" text-xl text-[#000]" />
              </div>
            </div>
          </div>
          <div className=" h-[110px] p-1 flex  items-center gap-5 rounded-2xl ">
            <div className=" h-[90px] w-[45px] border-1 rounded-3xl overflow-hidden flex flex-col items-center gap-5 bg-[#FF1500] ">
              <div className=" h-[25px] w-[45px] border-1 rounded bg-[#000]"></div>
              <IoSunny className=" text-xl mt-3 text-[#000]" />
            </div>
            <div className=" h-[90px] w-[45px] border-1 rounded-3xl overflow-hidden flex flex-col items-center gap-2 bg-[#FF1500]  ">
              <div className=" h-[50px] w-[45px] border-1 rounded bg-[#000]"></div>
              <IoIosVolumeHigh className=" text-2xl  text-[#000]" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="border-1 bg-[#FF1500] rounded-full h-[40px] w-[40px] text-2xl font-semibold italic flex items-center justify-center">
            <FaCalculator className=" text-xl text-[#000]" />
          </div>
          <div className="border-1 bg-[#FF1500] rounded-full h-[40px] w-[40px] text-2xl font-semibold italic flex items-center justify-center">
            <FaCamera className=" text-xl text-[#000]" />
          </div>
          <div className="border-1 bg-[#000] rounded-full h-[40px] w-[40px] text-2xl font-semibold italic flex items-center justify-center">
          <GiMaskedSpider className=" text-3xl text-cyan-500" />

          </div>
          <div className="border-1 rounded-full h-[40px] w-[40px] bg-[#FF1500] text-2xl flex items-center justify-center">
            <RiBatteryLowLine className=" text-xl text-[#000]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimePass_grid;
