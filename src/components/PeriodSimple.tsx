import React from 'react';
import WeatherIcon from './WeatherIcon'
import { Weathers } from '../interfaces/WeatherEnums'

interface PeriodSimpleProps {
  day?: string,
  isDayTime?: boolean,
  temp?: number,
  weather?: Weathers
}


function PeriodSimple({day = '1/1', isDayTime = true, temp = 99, weather = Weathers.Unknown}: PeriodSimpleProps) {
  return (
      <div className="
        flex items-center justify-evenly bg-white/[0.4] rounded-3xl
      ">
          <div className="
          text-slate-50 text-[3vh]
          flex flex-col justify-center items-center
          col-span-1
          
        ">
          <div className="
            text-[3vh] font-bold
          ">
          {day}
          </div>
          <div className="
            text-[2vh]
          ">
            {isDayTime ? 'Day' : 'Night'}
          </div>
        </div>
        <div className="
          flex flex-row items-center
        ">
          <WeatherIcon weather={weather} />
          <span className="text-slate-50 text-[5vh] font-bold">{`${temp}\u00b0`}</span>
        </div>
        
      </div>
  );
}

export default PeriodSimple;