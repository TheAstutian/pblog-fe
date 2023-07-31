import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Home from './Pages/Home/Home'
import Footer from './components/Footer/Footer'
import Entries from './Pages/Entries/Entries';


function App() {
  return (
    <div className="App">
      <Router>
          <Navigation />
            <Routes>
                <Route exact path='/' element ={<Home/>} />
                <Route exact path='/entries' element ={<Entries/>} />
            </Routes>
            <Footer />
      </Router>
      
      
    </div>
  );
}

export default App;
