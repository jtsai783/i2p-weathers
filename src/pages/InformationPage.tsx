import React, {useState, useEffect} from 'react';
import dayBg from '../assets/backgroundImages/day.png'
import nightBg from '../assets/backgroundImages/night.jpeg'
import { getHours } from 'date-fns'
import PeriodSimple from '../components/PeriodSimple'
import { Link } from 'react-router-dom'
import PeriodDetail from '../components/PeriodDetail'
import axios from 'axios'



function InformationPage() {
  const [weathers, setWeathers] = useState({});

  useEffect(()=>{
    axios.get('https://api.weather.gov/gridpoints/TOP/31,80/forecast')
    .then((resp)=>{
      setWeathers(resp.data.properties.periods);
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

        <div className="row-span-4 mx-3 lg:hidden bg-white/[0.4] rounded-3xl p-6">
          <PeriodDetail />
        </div>
        <div className="
          h-auto row-span-5
          grid auto-rows-[25%] gap-3 grid-cols-2
          lg:hidden overflow-scroll
          mx-3
        ">
          <PeriodSimple />
          <PeriodSimple />
          <PeriodSimple />
          <PeriodSimple />
          <PeriodSimple />
          <PeriodSimple />
          <PeriodSimple />
          <PeriodSimple />
          <PeriodSimple />
          <PeriodSimple />
          <PeriodSimple />
          <PeriodSimple />
          <PeriodSimple />
          <PeriodSimple />
        </div>
        <div className="
          hidden lg:grid row-span-11 auto-cols-[30%]
          grid-flow-col overflow-scroll gap-3
        ">
          <div className="
            bg-white/[0.4] rounded-3xl p-3
            grid grid-rows-2
          ">
            <PeriodDetail />
            <PeriodDetail />
          </div>
          <div className="
            bg-white/[0.4] rounded-3xl p-3">
            <PeriodDetail />
            <PeriodDetail />
          </div>
          <div className="
            bg-white/[0.4] rounded-3xl p-3">
            <PeriodDetail />
            <PeriodDetail />
          </div>
          <div className="
            bg-white/[0.4] rounded-3xl p-3">
            <PeriodDetail />
            <PeriodDetail />
          </div>
          <div className="
            bg-white/[0.4] rounded-3xl p-3">
            <PeriodDetail />
            <PeriodDetail />
          </div>
          <div className="
            bg-white/[0.4] rounded-3xl p-3">
            <PeriodDetail />
            <PeriodDetail />
          </div>
          <div className="
            bg-white/[0.4] rounded-3xl">
            <PeriodDetail />
            <PeriodDetail />
          </div>
      </div>
    </div>
  );
}

export default InformationPage;