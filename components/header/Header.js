import React from "react";

export default function Header() {
  return (
    <div className="flex w-full justify-center relative">
      <div className="w-[24vw] aspect-square rounded-full -translate-y-1/2 shadow-lg absolute z-20 header-day1" />
      <div className="w-[28vw] aspect-square rounded-full -translate-y-1/2 shadow-lg absolute z-10 header-day2" />
      <div className="w-[32vw] aspect-square rounded-full -translate-y-1/2 shadow-lg absolute" />
    </div>
  );
}
