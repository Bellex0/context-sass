import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <ThemeToggle />
      </ThemeContextProvider>
      
    </div>
  );
}

export default App;
