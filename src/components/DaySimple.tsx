import React from 'react';
import PeriodSimple from './PeriodSimple'

function DaySimple() {
  return (
    <div className="
      bg-white/[0.4] rounded-3xl p-3
      grid grid-cols-5 grid-rows-1 gap-2 h-75
    "
    >
      <div className="
        text-slate-50 text-[3vh]
        flex flex-col justify-end items-start
        col-span-1
        border-slate-300 border-solid border-0 border-r-2
      ">
        <div className="
          text-[4vh]
        ">5/12
        </div>
        <div className="
          text-[2.5vh]
        ">
          2023
        </div>
      </div>
      <PeriodSimple />
      <PeriodSimple />
    </div>
  );
}

export default DaySimple;