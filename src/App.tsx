import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import InformationPage from './pages/InformationPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path={`/forecast`} element={<InformationPage />} />
        <Route path={`/`} element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
