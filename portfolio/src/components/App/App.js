import React from 'react';

import './App.css';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Experience from '../Experience/Experience';
import Project from '../Project/Project';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Project/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
