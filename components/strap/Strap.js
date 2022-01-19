import React from "react";

export default function Strap() {
  return (
    <div className="w-[20rem] aspect-[1/1.5] relative left-1/2 -translate-x-1/2 -mt-10 shadow-2xl">
      <div className="absolute left-0 w-2 h-full strap brightness-75 shadow-2xl z-10"></div>
      <div className="absolute right-0 w-2 h-full strap brightness-75 shadow-2xl z-10"></div>
      <div className="w-full h-full strap shadow-2xl brightness-[0.8]"></div>
      {/* Strap Hole */}
      <div className="w-6 h-10 rounded-full strap-hole absolute bottom-[1rem] left-1/2 shadow-2xl"></div>
      <div className="w-6 h-10 rounded-full strap-hole absolute bottom-[6rem] left-1/2 shadow-2xl"></div>
      <div className="w-6 h-10 rounded-full strap-hole absolute bottom-[11rem] left-1/2 shadow-2xl"></div>
    </div>
  );
}
