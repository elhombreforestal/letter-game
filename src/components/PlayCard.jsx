import { React, useEffect, useState } from "react";
import {
  Card,
  Grid,
  Grow,
  Typography,
} from "@mui/material/";
import { useTheme } from '@mui/material/styles';

export default function PlayCard(props) {
  const {char, cardGridIdx, idx, bigSize } = props
  const [isNewChar, setIsNewChar] = useState(false);
  const theme = useTheme();
  
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

  return (
    <Grid item xs={cardGridIdx} key={idx}>
      {char > '' &&
        (<Grow in={isNewChar} addEndListener={endTransition} timeout={{enter: idx*200, exit: 200}} >
          <Card sx={{ p: 0.5, height: bigSize ? 180 : 110, backgroundColor: char === char.toUpperCase() ? theme.palette.secondary.main : theme.palette.error.main}}>
            <Typography variant="h4" color={char === char.toUpperCase() ? "error" : "secondary"}>{char}</Typography>
          </Card>
        </Grow>)
      }
    </Grid>
  );
}
