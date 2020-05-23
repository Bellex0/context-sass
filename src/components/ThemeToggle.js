import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return ( <button className="btn" onClick={toggleTheme}>Change Theme</button>);
};
 
export default ThemeToggle;