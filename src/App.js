import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import HomePage from './containers/HomePage'

function App() {
  return (
    <div className="App">
        <Navbar />
        <HomePage />
    </div>
  );
}

export default App;
