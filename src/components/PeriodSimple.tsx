import React from 'react';
import WeatherIcon from './WeatherIcon'
import { Weathers } from '../interfaces/WeatherEnums'

function PeriodSimple() {
  return (
      <div className="
        border-slate-300 border-solid border-0 border-r-2 last:border-0
        col-span-2
        flex items-center justify-center
      ">
        <WeatherIcon weather={Weathers.Day} />
        <span className="text-slate-50 text-[5vh] font-bold">{'30\u00b0'}</span>
      </div>
  );
}

export default PeriodSimple;