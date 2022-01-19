import React from "react";

export default function UpwardStrap() {
  return (
    <div className="w-[20rem] aspect-[1/1.5] relative left-1/2 -translate-x-1/2 shadow-2xl">
      <div className="absolute left-0 w-2 h-full strap brightness-90 shadow-2xl z-10"></div>
      <div className="absolute right-0 w-2 h-full strap brightness-90 shadow-2xl z-10"></div>
      <div className="w-full h-full strap shadow-2xl"></div>
    </div>
  );
}