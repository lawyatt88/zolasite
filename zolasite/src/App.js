import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { Main, UserGrid, WeddingSite } from './components'
import history from './history'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Main>
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route path="/users" component={ UserGrid } />
            <Route path="/wedding" component={ WeddingSite } />
            
            {/* Displays our Login component as a fallback */}
            <Route component={ UserGrid } />
          </Switch>
        </Main>
      </Router>
    );
  }
}

export default App
