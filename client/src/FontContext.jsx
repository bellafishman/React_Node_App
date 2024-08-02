// FontContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const FontContext = createContext();

export const useFont = () => useContext(FontContext);

export const FontProvider = ({ children }) => {
    // defaults font style and size
  const [fontSize, setFontSize] = useState('16px'); 
  const [fontStyle, setFontStyle] = useState('serif');

  const changeFontSize = (size) => {
    if (size === 'default') {
      setFontSize('16px');
    } else if (size === 'increase') {
      setFontSize('20px');
    } else if (size === 'decrease') {
      setFontSize('12px');
    }
  };

  const changeFontStyle = (style) => {
    setFontStyle(style);
  };

  return (
    <FontContext.Provider value={{ fontSize, fontStyle, changeFontSize, changeFontStyle }}>
      {children}
    </FontContext.Provider>
  );
};
