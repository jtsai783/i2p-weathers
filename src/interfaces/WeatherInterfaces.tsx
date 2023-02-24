import { Weathers, Directions } from './WeatherEnums';

export interface PeriodData {
  number: number,
  startTime: string,
  isDaytime: boolean,
  temperature: number,
  shortForecast: string
}

export interface MappedWeatherData {
  month: number,
  day: number,
  isDayTime: boolean,
  temp: number,
  weatherType: Weathers,
  windDirection?: Directions,
  windSpeed?: number,
  humidity?: number
}