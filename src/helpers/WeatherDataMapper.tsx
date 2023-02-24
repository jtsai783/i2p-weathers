import { PeriodData, MappedWeatherData } from '../interfaces/WeatherInterfaces'
import { Weathers } from '../interfaces/WeatherEnums'
import { getDate, getMonth, parseISO, subDays } from 'date-fns'

export function MapPeriodData(periodData: PeriodData): MappedWeatherData {
    const mappedData = {
      month: 0,
      day: 0,
      isDayTime: false,
      temp: 0,
      weatherType: Weathers.Unknown,
    }

    let date = parseISO(periodData.startTime);
    if( periodData.number === 1 && !periodData.isDaytime){
      date = subDays(date, 1);
    }
    mappedData.day = getDate(date);
    mappedData.month = getMonth(date) + 1;
    mappedData.isDayTime = periodData.isDaytime;
    mappedData.temp = periodData.temperature;
    mappedData.weatherType = mappedData.isDayTime ? Weathers.Day : Weathers.Night;
    if(periodData.shortForecast.toLowerCase().indexOf('cloud') !== -1){
      if(mappedData.isDayTime){
        mappedData.weatherType = Weathers.CloudDay;
      } else {
        mappedData.weatherType = Weathers.CloudNight;
      }
    } else if(periodData.shortForecast.toLowerCase().indexOf('rain') !== -1){
      mappedData.weatherType = Weathers.Rain;
    } else if(periodData.shortForecast.toLowerCase().indexOf('snow') !== -1){
      mappedData.weatherType = Weathers.Snow;
    }

    return mappedData;
}