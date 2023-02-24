import React from 'react';
import { ReactComponent as SunLogo } from '../assets/icons/Sun.svg'
import { ReactComponent as MoonLogo } from '../assets/icons/Moon.svg'

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
        <SunLogo className="
          h-full w-auto
          text-slate-50
        "/>
      </div>
      <div>
        <MoonLogo className="
          h-full w-auto
          text-slate-50
        "/>
      </div>
    </div>
  );
}

export default SmallView;