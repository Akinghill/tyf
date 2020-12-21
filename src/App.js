import React from 'react'
import { ThemeProvider } from '@material-ui/core'

import theme from './theme.js'
import HomePage from './views/HomePage/HomePage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HomePage/>
      </div>
    </ThemeProvider>
  );
}

export default App;
