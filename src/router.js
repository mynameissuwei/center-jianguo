import React from 'react'
import { HashRouter as Router,Route,Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import ModalPage from './pages/ui/modal'
import NoMatch from './pages/noMatch'

class IRouter extends React.Component {
  render() {
    return (
      <Router>
        <App>
          <Route path='/login' component={Login}/>
          <Route path='/admin' render={()=> 
            <Admin>
              <Switch>
                <Route path="/admin/ui/buttons" component={Buttons} />
                <Route path="/admin/ui/modals" component={ModalPage} />
                <Route component={NoMatch} />
              </Switch>
            </Admin>
          }/>
          <Route path='/order/detail' component={Login}/>
        </App>
      </Router>
    ) 
  }
}

export default IRouter