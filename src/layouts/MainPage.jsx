import { Container } from "@mui/system";
import { Card, CardMedia, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { React } from "react";
import PlayCard from '../components/PlayCard';

export const MainPage = (props) => {
  const {pexeso} = props;  
  const cardGridIdx = pexeso.chars.length > 12 ? 3 : 4;
  const theme = useTheme();
  const bigSize = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container maxWidth="md" fixed sx={{ marginTop: "80px" }}>      
        <Card>
          <CardMedia
            image="/img/cat.jpg"
            sx={{ p: 0.5 }}
          >
          <Grid container spacing={0.5}>
            {pexeso.chars.map((item, idx) => (
              <PlayCard
                key={idx}
                cardGridIdx={cardGridIdx}
                idx={idx}
                bigSize={bigSize}
                char={item}
              />
            ))}
          </Grid>
          </CardMedia>
        </Card>
    </Container>
  );
};
