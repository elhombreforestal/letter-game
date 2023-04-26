import { Container } from "@mui/system";
import { Box, Card, CardMedia, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { React, useEffect, useState, } from "react";
import PlayCard from '../components/PlayCard';

export const MainPage = (props) => {
  const {pexeso, handleCardClick, fontFace} = props;  
  const cardGridIdx = pexeso.chars.length > 12 ? 3 : 4;
  const theme = useTheme();
  const bigSize = useMediaQuery(theme.breakpoints.up('md'));
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {    
    setBgImage('');
    const id = setTimeout(() => setBgImage(pexeso.image), 1000);
    return () => clearTimeout(id);
  }, [pexeso.image]);

  return (
    <Container maxWidth="md" fixed sx={{ marginTop: "80px" }}>      
        <Card>          
          <CardMedia 
            image={`/img/${bgImage}`}
            sx={{ p: 0.5, backgroundColor: theme.palette.success.main }}
          >
          <Grid container spacing={0.5}>
            {pexeso.chars.map((item, idx) => (
              <Grid item xs={cardGridIdx} key={idx}>
                {item > '' ? (
                  <PlayCard
                  key={idx}
                  idx={idx}
                  bigSize={bigSize}
                  char={item}
                  fontFace={fontFace}
                  handleClick={handleCardClick}
                  isSelected={pexeso.selectedChar === item}
                />
                ):(
                  <Box sx={{height: bigSize ? 180 : 110,}}></Box>
                )}
              </Grid>
            ))}
          </Grid>
          </CardMedia>
        </Card>
    </Container>
  );
};
