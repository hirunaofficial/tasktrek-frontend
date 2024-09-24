import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NotesApp from './components/NotesApp';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1c1c1e',
      paper: '#2c2c2e',
    },
    primary: {
      main: '#f1c40f',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NotesApp />
    </ThemeProvider>
  );
}

export default App;