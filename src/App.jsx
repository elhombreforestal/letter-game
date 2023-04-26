import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { MainPage } from './layouts/MainPage';
import Navigation from "./components/Navigation";
import theme from './styles/theme';
import React, { useState, useEffect } from 'react';
import { PexesoContent, PexesoImage } from "./utils";

export default function App() {
  const defaultState = {
    selectedChar: "",
    image: false,
    chars: [],
  };
  const [pexeso, setPexeso] = useState(defaultState);
  const [size, setSize] = useState(6);
  const [diacritics, setDiacritics] = useState(true);
  const [fontFace, setFontFace] = useState(1);

  const handleDiacritics = () => {
    setDiacritics(!diacritics);
  }

  const handleFontFace = () => {
    setFontFace(fontFace === 4 ? 1 : fontFace+1);
  }

  const handleSize = () => {
    setSize(size === 10 ? 6 : size+2);
  }
  
  const makeNewGame = () => {
    setPexeso({
      selectedChar: "",
      image: PexesoImage(pexeso.image),
      chars: PexesoContent(size,diacritics),
    });
  }

  const handleCardClick = (char) => {
    if(pexeso.selectedChar === '') {
      setPexeso({
        ...pexeso,
        selectedChar: char,
      })
    } else if(pexeso.selectedChar.toUpperCase() === char.toUpperCase()) {
      setPexeso({
        ...pexeso,
        selectedChar: '',
        chars: pexeso.chars.map(item => item.toUpperCase() === char.toUpperCase() && pexeso.selectedChar !== char ? '' : item),
      })
    } else {
      setPexeso({
        ...pexeso,
        selectedChar: '',
      })
    }
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
        fontFace={fontFace}
        diacritics={diacritics}
        handleStart={makeNewGame}
        handleSize={handleSize}
        handleDiacritics={handleDiacritics}
        handleFontFace={handleFontFace}
      />
      <MainPage pexeso={pexeso} handleCardClick={handleCardClick} fontFace={fontFace}/>
    </ThemeProvider>
  );
}
