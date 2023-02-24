import { Weathers, Directions } from './WeatherEnums';

export interface PeriodData {
  number: number,
  startTime: string,
  isDaytime: boolean,
  temperature: number,
  shortForecast: string,
  probabilityOfPrecipitation: {
    value: number
  },
  relativeHumidity: {
    value: number
  },
  windSpeed: string,
  windDirection: string,
}

export interface MappedWeatherData {
  month: number,
  day: number,
  isDayTime: boolean,
  temp: number,
  weatherType: Weathers,
  windDirection: Directions,
  windSpeed: string,
  humidity: number,
  shortForecast: string,
  rainChance?: number,
}