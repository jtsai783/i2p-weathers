import React from 'react';

function InformationPage() {
  return (
    <div className="App h-screen relative grid grid-rows-10 lg:grid-rows-10">
      <div className="bg-red-900 row-span-1">location</div>
      <div className="bg-blue-900 row-span-4 lg:hidden">details</div>
      <div className="h-auto bg-green-900 row-span-5 grid auto-rows-[25%] lg:hidden overflow-scroll">
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </div>
      <div className="hidden lg:grid row-span-9 auto-cols-[30%] bg-teal-900 grid-flow-col overflow-scroll">
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