import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Setup from './tutorial/12-memo-useMemo-useCallback/setup'
import { Product, Dashboard } from './pages'

function App() {
    // <Router>
    //   <Switch>
    //     <Route path="./dashboard" component={}>

    //     </Route>
    //   </Switch>
    // </Router>
    return(
      <div>
        <Setup/>
      </div>
    )
}

export default App
