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
  weather: Weathers,
  size?: number
}

function WeatherIcon({weather, size = 6.5}: IconProps) {
  return (
      <div>
        {
          weather === Weathers.Night ? <Moon className="w-auto text-slate-50 mr-[1vh]" style={{height: `${size}vh`}}/>
          : weather === Weathers.Day ? <Sun className="w-auto text-slate-50 mr-[1vh]" style={{height: `${size}vh`}}/>
          : weather === Weathers.CloudDay ? <CloudSun className="w-auto text-slate-50 mr-[1vh]" style={{height: `${size}vh`}}/>
          : weather === Weathers.CloudNight ? <CloudMoon className="w-auto text-slate-50 mr-[1vh]" style={{height: `${size}vh`}}/>
          : weather === Weathers.Rain ? <Rain className="w-auto text-slate-50 mr-[1vh]" style={{height: `${size}vh`}}/>
          : weather === Weathers.Snow ? <Snow className="w-auto text-slate-50 mr-[1vh]" style={{height: `${size}vh`}}/>
          : <Ufo className="w-auto text-slate-50 mr-[1vh]" style={{height: `${size}vh`}}/>
        }
      </div>
  );
}

export default WeatherIcon;
