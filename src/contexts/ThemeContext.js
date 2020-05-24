import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
      isPink: true,
      pink: { text: '#32cd32', bg: '#ffb6c1' },
      mint: { text: '#00fa9a', bg: '#000'}
    }

    toggleTheme= () => {
        console.log("hello")
      this.setState({ isPink: !this.state.isPink });
    }

    render() { 
      return (
        <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
          {this.props.children}
        </ThemeContext.Provider>
      );
    }
  }
   
  export default ThemeContextProvider;
