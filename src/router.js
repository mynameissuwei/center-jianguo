import React from 'react'
import { HashRouter as Router,Route,Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import ModalPage from './pages/ui/modal'
import Rotate from './pages/ui/spin'
import Notificate from './pages/ui/notification'
import Message from './pages/ui/messages'
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
                <Route path="/admin/ui/loadings" component={Rotate}></Route>
                <Route path="/admin/ui/notification" component={Notificate}></Route>
                <Route path="/admin/ui/messages" component={Message}></Route>
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