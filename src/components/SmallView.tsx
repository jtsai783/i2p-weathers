import React from 'react';
import { ReactComponent as SunLogo } from '../assets/icons/Sun.svg'

function SmallView() {
  return (
    <div className="
      bg-white/[0.4] rounded-3xl p-3
      grid grid-cols-2 grid-rows-1 gap-2 h-75
    "
    >
      <div className="
        border-slate-300 border-solid border-0 border-r-2
      ">
        <SunLogo className="h-full text-slate-50"/>
      </div>
      <div>
      night
      </div>
    </div>
  );
}

export default SmallView;