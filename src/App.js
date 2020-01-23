import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Sections/Hero';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <HeroSection />
      </div>
    );
  }
}

export default App;
