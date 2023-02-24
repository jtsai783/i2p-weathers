import { PeriodData, MappedWeatherData } from '../interfaces/WeatherInterfaces'
import { Weathers, Directions } from '../interfaces/WeatherEnums'
import { getDate, getMonth, parseISO, subDays } from 'date-fns'

export function MapPeriodData(periodData: PeriodData): MappedWeatherData {
    const mappedData: MappedWeatherData = {
      month: 0,
      day: 0,
      isDayTime: false,
      temp: 0,
      weatherType: Weathers.Unknown,
      windSpeed: '',
      windDirection: Directions.N,
      humidity: 0,
      shortForecast: '',
      longForecast: '',
      rainChance: 0
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
    if(periodData.detailedForecast.toLowerCase().indexOf('snow') !== -1){
      mappedData.weatherType = Weathers.Snow;
    }else if(periodData.detailedForecast.toLowerCase().indexOf('rain') !== -1 ||
       periodData.detailedForecast.toLowerCase().indexOf('shower') !== -1){
      mappedData.weatherType = Weathers.Rain;
    }else if(periodData.detailedForecast.toLowerCase().indexOf('cloud') !== -1){
      if(mappedData.isDayTime){
        mappedData.weatherType = Weathers.CloudDay;
      } else {
        mappedData.weatherType = Weathers.CloudNight;
      }
    }
    mappedData.windSpeed = periodData.windSpeed;
    mappedData.windDirection = periodData.windDirection as Directions;
    mappedData.humidity = periodData.relativeHumidity.value;
    mappedData.shortForecast = periodData.shortForecast;
    mappedData.longForecast = periodData.detailedForecast;
    mappedData.rainChance = periodData.probabilityOfPrecipitation.value;

    return mappedData;
}