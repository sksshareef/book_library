import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { createStore } from 'redux';

import { Provider } from 'react-redux';

// Home (Books View)
import Home from './components/Home/Home'

//Page Not Found
import NotFound from './components/elements/NotFound/NotFound'

function reducer(state = {}, action){
  switch(action.type){
    case 'actionType':
      return state
    default:
      return state
  }
}

const store = createStore(reducer)

const action = {
  type: 'changedState',
  payload: {
    newState : 'New State'
  }
}

store.dispatch(action)


function App() {
  return (
    <Provider store={store} >
      <Home />
    </Provider>
  );
}

export default App;

{/* <Router>
      <React.Fragment>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </Router> */}