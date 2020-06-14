import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import Routes from './routes';
import usePresistedState from './utils/usePresistedState';

import GlobalStyles from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  const [theme, setTheme] = usePresistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
