import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App h-screen relative grid grid-rows-10 lg:grid-rows-10">
{/*      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      {/*<div className="text-3xl font-bold underline">
        Hello world!
      </div>*/}
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
      <div className="bg-red-900 row-span-1">location</div>
    </div>
  );
}

export default App;
