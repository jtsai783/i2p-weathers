import React from 'react';
import WeatherIcon from './WeatherIcon'
import { Weathers } from '../interfaces/WeatherEnums'

function PeriodSimple() {
  return (
      <div className="
        border-slate-300 border-solid border-0 border-r-2 last:border-0
        col-span-2
        flex items-center
      ">
        <WeatherIcon weather={Weathers.Unknown} />
        <span className="text-slate-50 text-[6vh] align-middle">{'30\u00b0'}</span>
      </div>
  );
}

export default PeriodSimple;