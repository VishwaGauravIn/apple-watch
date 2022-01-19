import React from "react";

export default function Header() {
  return (
    <div className="flex w-full justify-center relative">
      <div className="w-[40vw] sm:w-[36vw] md:w-[32vw] lg:w-[28vw] 2xl:w-[24vw] aspect-square rounded-full -translate-y-1/2 shadow-lg absolute z-20 header-day1" />
      <div className="w-[44vw] sm:w-[40vw] md:w-[36vw] lg:w-[32vw] 2xl:w-[28vw] aspect-square rounded-full -translate-y-1/2 shadow-lg absolute z-10 header-day2" />
      <div className="w-[48vw] sm:w-[44vw] md:w-[40vw] lg:w-[36vw] 2xl:w-[32vw] aspect-square rounded-full -translate-y-1/2 shadow-lg absolute" />
    </div>
  );
}
