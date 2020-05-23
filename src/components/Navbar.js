import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Navbar() {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark;

    return (
        <nav className="nav" style={{ background: theme.ui, color: theme.syntax }}>
        <h1 className="nav__h1">Big Cat Refuge</h1>
        <ul className="nav__ul">
          <li className="nav__li">Home</li>
          <li className="nav__li">About</li>
          <li className="nav__li">Contact</li>
        </ul>
      </nav>
    )
}

export default Navbar
