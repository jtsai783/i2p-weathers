import React from 'react';
import dayBg from '../assets/backgroundImages/day.png'
import nightBg from '../assets/backgroundImages/night.jpeg'
import { getHours } from 'date-fns'
import SmallView from '../components/SmallView'

function InformationPage() {
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
      <div className="bg-red-900 row-span-1">location</div>

        <div className="
          bg-white/[0.4] row-span-4 lg:hidden rounded-3xl mx-3 p-3
        ">
          details
        </div>
        <div className="
          h-auto row-span-5
          grid auto-rows-[25%] gap-3
          lg:hidden overflow-scroll
          mx-3
        ">
          <SmallView />
          <SmallView />
          <SmallView />
          <SmallView />
          <SmallView />
          <SmallView />
          <SmallView />
        </div>
        <div className="
          opacity-70 hidden lg:grid row-span-11 auto-cols-[30%] bg-teal-900
          grid-flow-col overflow-scroll
        ">
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
      </div>
    </div>
  );
}

export default InformationPage;