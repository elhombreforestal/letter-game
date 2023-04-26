import { React, useEffect, useState } from "react";
import {
  Card,
  Grow,
  Typography,
} from "@mui/material/";
import { keyframes } from '@mui/system';
import { useTheme } from '@mui/material/styles';

export default function PlayCard(props) {
  const {char, idx, bigSize, handleClick, isSelected, fontFace } = props
  const [isNewChar, setIsNewChar] = useState(false);
  const theme = useTheme();
  
  const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(20deg);
  }
  70% {
    transform: rotate(-15deg);
  }
  85% {
    transform: rotate(10deg);
  }
  95% {
    transform: rotate(-5deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

  useEffect(() => {
    setIsNewChar(false);
  }, [char]);

  useEffect(() => {
    setIsNewChar(true);
  }, []);

  const endTransition = () => {    
    if(!isNewChar) {
      const timer = setTimeout(() => {
        setIsNewChar(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }

  const handleCardClick = (char) => {
    //play some animation
    handleClick(char);
  }
  
  return (
    <Grow in={isNewChar} addEndListener={endTransition} timeout={{enter: idx*200, exit: 1}} >
      <Card onClick={() => handleCardClick(char)} sx={{ 
          p: 0.5,
          height: bigSize ? 180 : 110,
          backgroundColor: char === char.toUpperCase() ? theme.palette.secondary[isSelected ? 'dark' : 'main'] : theme.palette.error[isSelected ? 'dark' : 'main'],
          boxShadow: isSelected ? `inset 0 0 10px ${theme.palette.warning.dark}`: '',
          '&:hover': {
            boxShadow: `inset 0 0 10px ${theme.palette.warning.dark}`,
            animation: `${spin} 200ms ${theme.transitions.easing.easeInOut}`,
          },
          cursor: 'pointer',
        }}>
        <Typography component={'div'} variant="game" sx={{fontFamily: theme.typography[`font${fontFace}`]}} color={char === char.toUpperCase() ? "error" : "secondary"}>{char}</Typography>
      </Card>
    </Grow>
  );
}
