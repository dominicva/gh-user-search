import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import theme from '../lib/theme';
import '@fontsource/space-mono';
import 'reset-css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
