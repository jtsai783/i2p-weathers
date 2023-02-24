import React from 'react';
import WeatherIcon from './WeatherIcon'
import { Weathers } from '../interfaces/WeatherEnums'

function PeriodSimple() {
  return (
      <div className="
        flex items-center justify-evenly
      ">
          <div className="
          text-slate-50 text-[3vh]
          flex flex-col justify-center items-center
          col-span-1
          
        ">
          <div className="
            text-[3vh] font-bold
          ">5/12
          </div>
          <div className="
            text-[2vh]
          ">
            Day
          </div>
        </div>
        <div className="
          flex flex-row items-center
        ">
          <WeatherIcon weather={Weathers.Day} />
          <span className="text-slate-50 text-[5vh] font-bold">{'30\u00b0'}</span>
        </div>
        
      </div>
  );
}

export default PeriodSimple;