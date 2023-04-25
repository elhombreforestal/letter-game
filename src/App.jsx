import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { MainPage } from './layouts/MainPage';
import Navigation from "./components/Navigation";
import theme from './styles/theme';
import React, { useState, useEffect } from 'react';
import { PexesoContent } from "./utils";

export default function App() {
  const defaultState = {
    openChar: "",
    chars: [],
  };
  const [pexeso, setPexeso] = useState(defaultState);
  const [size, setSize] = useState(6);
  const [diacritics, setDiacritics] = useState(true);

  const handleDiacritics = () => {
    setDiacritics(!diacritics);
  }

  const handleSize = () => {
    setSize(size === 10 ? 6 : size+2);
  }
  
  const makeNewGame = () => {
    setPexeso({
      openChar: "",
      chars: PexesoContent(size,diacritics),
    });
  }

  useEffect(() => {
    makeNewGame();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return (    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation 
        size={size} 
        diacritics={diacritics}
        handleStart={makeNewGame}
        handleSize={handleSize}
        handleDiacritics={handleDiacritics}
      />
      <MainPage pexeso={pexeso} />
    </ThemeProvider>
  );
}
