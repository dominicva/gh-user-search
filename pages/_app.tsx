import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/space-mono';

import 'reset-css';

const theme = extendTheme({
  colors: {
    light: {
      blueCrayola: '#0079FF',
      gray: '#697C9A',
      queenBlue: '#4B6A9B',
      gunmetal: '#2B3442',
      skyBlue: '#60ABFF',
      ghostWhite: '#F6F8FF',
      white: '#FEFEFE',
      tartOrange: '#F74646',
    },
    dark: {
      blueCrayola: '#0079FF',
      white: '#FFFFFF',
      skyBlue: '#60ABFF',
      oxfordBlue: '#141D2F',
      spaceCadet: '#1E2A47',
      tartOrange: '#F74646',
    },
  },
  fonts: {
    heading: `Space Mono, monospace`,
    body: `Space Mono, monospace`,
  },
  typography: {
    h1: {
      fontFamily: 'Space Mono, monospace',
      fontSize: '26px',
      fontWeight: 700,
      lineHeight: '38px',
    },
    h2: {
      fontFamily: 'Space Mono, monospace',
      fontSize: '22px',
      fontWeight: 700,
      lineHeight: '33px',
    },
    h3: {
      fontFamily: 'Space Mono, monospace',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
    },
    h4: {
      fontFamily: 'Space Mono, monospace',
      fontSize: '13px',
      fontWeight: 400,
      lineHeight: '20px',
    },
    body: {
      fontFamily: 'Space Mono, monospace',
      fontSize: '15px',
      fontWeight: 400,
      lineHeight: '25px',
    },
  },
  interactiveElements: {
    light: {
      searchBar: {
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  // console.log('theme:', theme);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
