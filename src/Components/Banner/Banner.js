import React from "react";
import "./banner.css";
const Banner = () => {
  return (
    <>
      <div
        className="w-full h-[600px] p-10 rounded-[24px] flex flex-col items-center justify-center"
        id="banner"
      >
        <h1 className="text-[52px] font-bold text-[#FFFFFF]">
          Discover an exceptional cooking class 
        </h1>
        <h1 className="text-[52px] font-bold text-[#FFFFFF]">
           tailored for you!
        </h1>
        <h1 className="text-[18px] leading-3 mt-[20px] text-[#FFFFFF]">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve
        </h1>
        <h1 className="text-[18px] leading-3 mt-[20px] text-[#FFFFFF]">
          coding problems to become an exceptionally
          well world-class Programmer.
        </h1>
        <div className="flex flex-row  mt-[30px]">
          <button className="w-[187px] h-[60px] rounded-[50px] bg-[#0BE58A] text-[#150B2B]">Explore Now</button>
          <button className="w-[187px] h-[60px] ml-[20px] rounded-[50px]  text-[#FFFFFFFF] border border-white">Our Feedback</button>
        </div>
      </div>
    </>
  );
};

export default Banner;
