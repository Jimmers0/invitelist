import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'



import Start from './Start'

import Notgoing from './Notgoing'
import Going from './Going'

export default props => {
  return (
    <Router>
    <Provider store={store}>
      <div>
        
        <Switch>
        <Route exact path="/" component={Start}/>
        <Route exact path="/notgoing" component={Notgoing}/>
        <Route exact path="/going" component={Going}/>
        </Switch>

      </div>
    </Provider>
    </Router>
  )
}