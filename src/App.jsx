import Header from './Components/Header';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JobPage from './Components/JobPage/JobPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="job/:id/:position" element={<JobPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
