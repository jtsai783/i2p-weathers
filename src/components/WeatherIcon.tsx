import React from 'react';
import { ReactComponent as Sun } from '../assets/icons/Sun.svg'
import { ReactComponent as Moon } from '../assets/icons/Moon.svg'
import { ReactComponent as CloudSun } from '../assets/icons/Cloud_Sun.svg'
import { ReactComponent as CloudMoon } from '../assets/icons/Cloud_Moon.svg'
import { ReactComponent as Rain } from '../assets/icons/Rain_Medium.svg'
import { ReactComponent as Snow } from '../assets/icons/Snow_1.svg'
import { ReactComponent as Ufo } from '../assets/icons/ufo.svg'
import { Weathers } from '../interfaces/WeatherEnums'

interface IconProps {
  weather: Weathers
}

function WeatherIcon(props: IconProps) {
  return (
      <div>
        {
          props.weather === Weathers.Night ? <Moon className="h-[6.5vh] w-auto text-slate-50 mr-[1vh]"/>
          : props.weather === Weathers.Day ? <Sun className="h-[6.5vh] w-auto text-slate-50 mr-[1vh]"/>
          : props.weather === Weathers.CloudDay ? <CloudSun className="h-[6.5vh] w-auto text-slate-50 mr-[1vh]"/>
          : props.weather === Weathers.CloudNight ? <CloudMoon className="h-[6.5vh] w-auto text-slate-50 mr-[1vh]"/>
          : props.weather === Weathers.Rain ? <Rain className="h-[6.5vh] w-auto text-slate-50 mr-[1vh]"/>
          : props.weather === Weathers.Snow ? <Snow className="h-[6.5vh] w-auto text-slate-50 mr-[1vh]"/>
          : <Ufo className="h-[6.5vh] w-auto text-slate-50 mr-[1vh]"/>
        }
      </div>
  );
}

export default WeatherIcon;
