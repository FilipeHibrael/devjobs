import React from 'react';
import Header from './Components/Header';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JobPage from './Components/JobPage/JobPage';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div id="app" className={darkMode ? 'darkMode' : ''}>
      <BrowserRouter>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="job/:id/:position" element={<JobPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
