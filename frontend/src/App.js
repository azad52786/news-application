import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import NewsPage from './component/BodyCompnent/NewsPage';
import { useState } from 'react';

function App() {
  // lifting up 
  const [filterCountry , setFilterCountry ] = useState('in');
  const [filterLanguage , setFilterLanguage ] = useState('en');
  return (
    <div className=" font-inter w-full min-h-screen text-pure-greys-5 bg-richblack-800">
      <Navbar filterCountry={filterCountry} filterLanguage={filterLanguage} setFilterCountry={setFilterCountry} setFilterLanguage={setFilterLanguage}/>
      <NewsPage  filterCountry={filterCountry} filterLanguage ={filterLanguage}/>
    </div>
  );
}

export default App;
