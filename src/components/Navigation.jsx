import { React } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material/";
import FontDownloadTwoToneIcon from '@mui/icons-material/FontDownloadTwoTone';
import PlayCircleTwoToneIcon from '@mui/icons-material/PlayCircleTwoTone';
import ViewModuleTwoToneIcon from '@mui/icons-material/ViewModuleTwoTone';
import HistoryEduTwoToneIcon from '@mui/icons-material/HistoryEduTwoTone';
import { useTheme } from '@mui/material/styles';

export default function Navigation(props) {
  const {size, diacritics, fontFace, handleStart, handleSize, handleDiacritics, handleFontFace } = props
  const theme = useTheme();
  return (
    <>
      <AppBar component="nav" color="info">
        <Toolbar sx={{display: "flex", justifyContent: "flex-start"}}>
          <IconButton
            aria-label="start"
            onClick={handleStart}
          >
            <PlayCircleTwoToneIcon color="primary" />
          </IconButton>
          <IconButton
            aria-label="size"
            onClick={handleSize}
          >
            <ViewModuleTwoToneIcon color="primary" />
            <Typography variant="h3" color="warning.dark">
              {size}
            </Typography>
          </IconButton>
          <IconButton
            aria-label="start"
            onClick={handleDiacritics}
          >
            <FontDownloadTwoToneIcon color="primary" />
            <Typography variant="h3" color="warning.dark">
              {diacritics ? 'číš' : 'cis'}
            </Typography>
          </IconButton>
          <IconButton
            aria-label="font"
            onClick={handleFontFace}
          >
            <HistoryEduTwoToneIcon color="primary" />
            <Typography variant="h3" color="warning.dark" sx={{fontFamily: theme.typography[`font${fontFace}`]}}>
              {fontFace} A
            </Typography>
          </IconButton>
          <Typography color="error.dark" variant="h3" sx={{flexGrow: "1", textAlign: "right"}}>Písmenkové Pexeso</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
