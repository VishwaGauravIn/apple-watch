import React from "react";

export default function Clock() {
  return (
    <div className="relative left-1/2 -translate-x-1/2 mt-[24vw] sm:mt-[22vw] md:mt-[20vw] lg:mt-[18vw] 2xl:mt-[16vw] w-max p-10 flex justify-center items-center pt-14 scale-75 sm:scale-100 z-10">
      {/* Clock outer frame */}
      <div className="w-96 aspect-[1/1.2160] shadow-lg rounded-3xl absolute">
        {/* Clock Border */}
        <div className="w-full aspect-[1/1.2160] rounded-3xl clock-border absolute shadow-2xl z-10">
          {/* Clock inner Frame */}
          <div className="w-[99%] aspect-[1/1.2160] rounded-3xl relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black clock-frame"></div>
        </div>
        {/* Clock Buttons */}
        <div className="w-2 h-8 bg-gray-100 -right-2 top-1/2 absolute rounded-r-lg -translate-y-1/2 clock-button shadow-2xl brightness-[0.85]"></div>
        {/* <div className="w-4 h-28 bg-gray-100 -right-1 top-20 absolute rounded-r-3xl clock-button shadow-2xl brightness-75"></div> */}
      </div>
      {/* Clock Inner (Display) */}
      <div className="w-[21.5rem] aspect-[1/1.2160] rounded-2xl clock z-10 relative">
        <img
          src="/wallpaper.jpg"
          className="absolute w-full h-full object-cover rounded-2xl brightness-75"
        />
        {/* Time goes here */}
        <div className="w-full h-full flex flex-col justify-center items-center">
        <p className="relative z-10 text-indigo-50 text-9xl font-semibold text-shadow-lg">11</p>
        <p className="relative z-10 text-indigo-100 text-9xl font-semibold text-shadow-lg">58</p>
        </div>
      </div>
    </div>
  );
}
