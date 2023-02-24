import React from 'react';
import WeatherIcon from './WeatherIcon'
import { Weathers } from '../interfaces/WeatherEnums'
import { MappedWeatherData } from '../interfaces/WeatherInterfaces'

function PeriodSimple({weather: {month = 1, day = 1, isDayTime = true, temp = 99, weatherType = Weathers.Unknown}, onClick}: {weather: Partial<MappedWeatherData>, onClick: ()=>void}) {
  return (
      <div className="
        flex items-center justify-evenly bg-black/[0.4] rounded-3xl
      "
      onClick={onClick}
      >
          <div className="
          text-slate-50 text-[3vh]
          flex flex-col justify-center items-center
          col-span-1
          
        ">
          <div className="
            text-[3vh] font-bold
          ">
          {`${month}/${day}`}
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
          <WeatherIcon weather={weatherType} />
          <span className="text-slate-50 text-[5vh] font-bold">{`${temp}\u00b0`}</span>
        </div>
        
      </div>
  );
}

export default PeriodSimple;