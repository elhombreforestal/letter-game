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

export default function Navigation(props) {
  const {size, diacritics, handleStart, handleSize, handleDiacritics } = props
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
          <Typography color="error.dark" variant="h3" sx={{flexGrow: "1", textAlign: "right"}}>Písmenkové Pexeso</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
