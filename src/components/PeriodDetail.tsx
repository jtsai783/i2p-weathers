import React from 'react';
import WeatherIcon from './WeatherIcon'
import { Directions, Weathers } from '../interfaces/WeatherEnums'
import { MappedWeatherData } from '../interfaces/WeatherInterfaces'

function PeriodDetail({weather: {shortForecast, windDirection, weatherType, day, month, isDayTime, temp = 99, rainChance = 99, humidity = 99, windSpeed = ''}}: {weather: MappedWeatherData}) {
  return (
      <div className="
        flex flex-col sm:flex-row gap-3 h-full items-center lg:items-start lg:flex-col justify-evenly
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
            ">
            {`${month}/${day}`}
            </div>
            <div className="
              text-[3vh]
            ">
              {isDayTime ? 'Day' : 'Night'}
            </div>
          </div>
          <div className="
            flex flex-row items-center
          ">
            <WeatherIcon weather={weatherType} size={13}/>
            <span className="text-slate-50 text-[11vh]">{`${temp}\u00b0`}</span>
          </div>
          <div className="
            flex flex-row justify-evenly
            text-[3vh] text-slate-50 w-full
          ">
            <div>{ windDirection }</div>
            <div>{ windSpeed }</div>
            <div>{humidity}%</div>
          </div>  
        </div>
        <div className="text-[4vh] text-slate-50 font-bold
        ">
          {shortForecast}
        </div>
      </div>
  );
}

export default PeriodDetail;
