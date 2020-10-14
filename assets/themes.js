import React from 'react';

export const themes = {
    light: {
        foreground: '#000',
        background: '#eeeeee',
        touchableGreen: '#159212'
    },
    dark: {
        foreground: '#fff',
        background: '#222222'
    }
}

const ThemeContext = React.createContext(themes.light);

// const ThemeContext = React.createContext('light');
export default ThemeContext;
