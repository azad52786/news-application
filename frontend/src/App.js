import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import NewsPage from './component/BodyCompnent/NewsPage';
import { useState } from 'react';

function App() {
  // lifting up 
  const [ isSearch , setIsSearch ] = useState(false);
  return (
    <div className=" font-inter w-full min-h-screen text-pure-greys-5 bg-richblack-800">
      <Navbar setIsSearch = {setIsSearch}/>
      <NewsPage isSearch ={isSearch} setIsSearch = {setIsSearch}/>
    </div>
  );
}

export default App;
