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
        dark: '#eeb100',
      },
      background: {
        default: '#BBDEF0',
      },
      info: {
        main: '#AEE239',
      },
      error: {
        main: '#F08700',
        dark: '#ea7900',
      },
      success: {
        main: '#8FBE00',
      },
      text: {
        primary: '#00A8C6',
        secondary: '#EFCA08',
      },
      divider: '#F49F0A',
       contrastThreshold: 3,
       tonalOffset: 0.2,
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
      game: {
        fontSize: 75,
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
          fontSize: 125,
        },        
      },
      font1: {
        fontFamily: 'Roboto Slab',
      },
      font2: {
        fontFamily: 'Fira Sans',        
      },
      font3: {
        fontFamily: 'Playfair Display',        
      },
      font4: {
        fontFamily: 'Parisienne',        
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
