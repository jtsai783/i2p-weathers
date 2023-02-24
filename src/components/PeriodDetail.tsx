import React from 'react';
import WeatherIcon from './WeatherIcon'
import { Directions, Weathers } from '../interfaces/WeatherEnums'


interface PeriodDetailProps {
  temp: number,
  rainChance: number,
  humidity: number,
  windSpeed: number,
  direction: Directions
  shortForecast: string,
  longForecast: string
}

function PeriodDetail() {
  return (
      <div className="
        flex flex-col sm:flex-row gap-3 h-full items-center lg:items-start lg:flex-col
      ">
        <div className="
          flex flex-col items-center gap-2
        ">
          <div className="
            flex flex-row gap-3
            text-slate-50
          ">
            <div className="
              text-[3vh] font-bold
            ">5/12
            </div>
            <div className="
              text-[3vh]
            ">
              Daytime
            </div>
          </div>
          <div className="
            flex flex-row items-center
          ">
            <WeatherIcon weather={Weathers.Night} size={13}/>
            <span className="text-slate-50 text-[11vh]">{'30\u00b0'}</span>
          </div>
          <div className="
            flex flex-row justify-evenly
            text-[3vh] text-slate-50 w-full
          ">
            <div>{Directions.NNW}</div>
            <div>33 mph</div>
            <div>35%</div>
          </div>  
        </div>
        <div className="text-[4vh] text-slate-50 font-bold
        ">
          Cloudy with a chance of meatballs
        </div>
      </div>
  );
}

export default PeriodDetail;
