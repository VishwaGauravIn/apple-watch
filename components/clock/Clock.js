import React from "react";

export default function Clock() {
  return (
    <div className="relative left-1/2 -translate-x-1/2 mt-[24vw] sm:mt-[22vw] md:mt-[20vw] lg:mt-[18vw] 2xl:mt-[16vw] w-max p-10 flex justify-center items-center pt-14 scale-75 sm:scale-100">
      {/* Clock outer frame */}
      <div className="w-96 aspect-[1/1.2160] shadow-lg rounded-3xl absolute">
        {/* Clock Border */}
        <div className="w-full aspect-[1/1.2160] rounded-3xl clock-border absolute shadow-2xl">
          {/* Clock inner Frame */}
          <div className="w-[99%] aspect-[1/1.2160] rounded-3xl relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black clock-frame"></div>
        </div>
      </div>
      {/* Clock Inner (Display) */}
      <div className="w-[21.5rem] aspect-[1/1.2160] rounded-3xl clock z-10 relative">
        <img
          src="/wallpaper.jpg"
          className="absolute w-full h-full object-cover rounded-3xl brightness-75"
        />
      </div>
    </div>
  );
}
