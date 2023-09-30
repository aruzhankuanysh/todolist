// App
import { useSelector } from 'react-redux';
import './App.css';
import AppRouter from './components/navigation/AppRouter';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import React from 'react';

export default function App() {
  const isDark = useSelector((state) => state.theme.isDark);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? 'dark' : 'light',
        },
      }),
    [isDark],
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}
