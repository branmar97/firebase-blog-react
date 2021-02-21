import React from 'react';
import './App.css';

// Component Imports
import Header from './components/header/Header';
import Home from './containers/home/Home';

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
    </div>
  );
}

export default App;
