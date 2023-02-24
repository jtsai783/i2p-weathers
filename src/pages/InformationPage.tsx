import React, {useState, useEffect} from 'react';
import dayBg from '../assets/backgroundImages/day.png'
import nightBg from '../assets/backgroundImages/night.jpeg'
import { getHours } from 'date-fns'
import PeriodSimple from '../components/PeriodSimple'
import { Link } from 'react-router-dom'
import PeriodDetail from '../components/PeriodDetail'
import axios from 'axios'
import { MappedWeatherData } from '../interfaces/WeatherInterfaces'
import { MapPeriodData } from '../helpers/WeatherDataMapper'

function InformationPage() {
  const [weathers, setWeathers] = useState([]);
  const [periodSelected, setPeriodSelected] = useState(0);

  useEffect(()=>{
    axios.get('https://api.weather.gov/gridpoints/TOP/31,80/forecast')
    .then((resp)=>{
      setWeathers(resp.data.properties.periods.map(MapPeriodData));
    })
  }, [])

  return (
    <div className="
      h-screen relative grid grid-rows-10 lg:grid-rows-12
      bg-no-repeat bg-cover bg-center gap-3 lg:gap-0
    "
      style={{
        backgroundImage: `url(${
          getHours(Date.now()) >= 6 && getHours(Date.now()) < 18 ? dayBg : nightBg 
        })`
      }}
    >
      <Link to={`/bleh`} className="row-span-1"><div className="bg-red-900 ">location test bleh</div></Link>

        <div className="row-span-4 mx-3 lg:hidden bg-black/[0.4] rounded-3xl p-6">
          { weathers.length ? <PeriodDetail weather={weathers[periodSelected]} key="cta"/> : null }
        </div>
        <div className="
          h-auto row-span-5
          lg:hidden overflow-scroll p-3
        "
          style={{
            boxShadow: '0px 10px 5px -5px rgb(0 0 0 / 69%) inset',
          }}
        >
        <div className="
          grid auto-rows-[25%] gap-3 sm:grid-cols-2
          my-3 h-full
        ">
          {
            weathers.map((weather: MappedWeatherData, i: number)=>{
              return(<PeriodSimple weather={weather} key={i} onClick={()=>{setPeriodSelected(i)}}/>)
            })
          }
        </div>
        </div>
        <div className="
          hidden lg:grid row-span-11 auto-cols-[30%] grid-rows-2
          grid-flow-col overflow-scroll gap-3
        ">
        {
          weathers.map((weather: MappedWeatherData, i: number)=>{
            return(
              <div className="bg-black/[0.4] rounded-3xl p-6" key={`detail-${i}`}>
                <PeriodDetail weather={weathers[i]} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default InformationPage;