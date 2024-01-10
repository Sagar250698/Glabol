import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Home from './components/home/Home';
import Booking from './components/booking/Booking';
import TripDetails from './components/tripDetails/TripDetails';
import Backpacking from './components/backpacking/Backpacking';

function App() {
  return (
    <div className="App">
      
       {/* <Home/> */}
       {/* <Booking/> */}
       {/* <TripDetails/> */}
       <Backpacking/>
       
       <Footer/>
    </div>
  );
}

export default App;
