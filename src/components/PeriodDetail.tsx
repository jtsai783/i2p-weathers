import React from 'react';
import WeatherIcon from './WeatherIcon'
import { Directions, Weathers } from '../interfaces/WeatherEnums'


interface PeriodDetail {
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
        flex flex-row
      ">
        <div>
          <div>
            <WeatherIcon weather={Weathers.Day} />
            {'30\u00b0'}
          </div>
          <div>
            <div>{Directions.NNW}</div>
            <div>33 mph</div>
            <div>35%</div>
          </div>  
        </div>
        <div>
          Cloudy with a chance of meatballs
        </div>
      </div>
  );
}

export default PeriodDetail;
