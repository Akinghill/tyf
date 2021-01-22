import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'

import theme from './theme/theme.js'
import HomePage from './views/HomePage/HomePage'
import BreakFreePage from './views/BreakFree/BreakFreePage.jsx'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/breakfree' component={BreakFreePage} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;