import { createTheme } from '@mui/material';

let theme = createTheme();
theme = createTheme(theme, {
    //disable first server side rendering, using MQ only on client side
    components: {
      MuiUseMediaQuery: {
        defaultProps: {
          noSsr: true,
        },
      },
    },
    palette: {
      mode: 'light',
      primary: {
        main: '#00A6A6',
        contrastText: '#F9F2E7',
      },
      secondary: {
        main: '#EFCA08',
      },
      background: {
        default: '#BBDEF0',
      },
      info: {
        main: '#AEE239',
      },
      error: {
        main: '#F08700',
      },
      success: {
        main: '#8FBE00',
      },
      text: {
        primary: '#00A8C6',
        secondary: '#EFCA08',
      },
      divider: '#F49F0A',
      contrastThreshold: 4.5,
      tonalOffset: 0.3,
    },
    typography: {      
      h1: {
        fontFamily: 'Sigmar',
        fontSize: 48,
      },
      h2: {
        fontFamily: 'Sigmar',
        fontSize: 36,
      },
      h3: {
        fontFamily: 'Sigmar',
        fontSize: 18,
        [theme.breakpoints.up('sm')]: {
          fontSize: 24,
        },
      },
      p: {
        fontFamily: 'Roboto',
      },
      button: {
        fontFamily: 'Sigmar',
      },
    },
    shape: {
      borderRadius: 10,
    },
    props: {
      MuiTooltip: {
        arrow: true,
      },
    },
  });

export default theme;