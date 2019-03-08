import React from 'react'
import { HashRouter as Router,Route,Switch } from 'react-router-dom'
import App from './App'
import WrappedFormLogin from './pages/Form/Login'
import WrappedFormRegister from './pages/Form/Register'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import ModalPage from './pages/ui/modal'
import Rotate from './pages/ui/spin'
import Notificate from './pages/ui/notification'
import Message from './pages/ui/messages'
import Tab from './pages/ui/Tab'
import BaseTable from './pages/Table/base'
import NoMatch from './pages/noMatch'
import Category from './pages/Category'

class IRouter extends React.Component {
  render() {
    return (
      <Router>
        <App>
          <Route path='/login' component={Message}/>
          <Route path='/admin' render={()=> 
            <Admin>
              <Switch>
                <Route path="/admin/ui/buttons" component={Buttons} />
                <Route path="/admin/ui/modals" component={ModalPage} />
                <Route path="/admin/ui/loadings" component={Rotate}></Route>
                <Route path="/admin/ui/notification" component={Notificate}></Route>
                <Route path="/admin/ui/messages" component={Message}></Route>
                <Route path="/admin/ui/tabs" component={Tab}></Route>
                <Route path="/admin/form/login" component={WrappedFormLogin}></Route>
                <Route path="/admin/form/reg" component={WrappedFormRegister}></Route>
                <Route path="/admin/table/basic" component={BaseTable}></Route>
                <Route path="/admin/category" component={Category}></Route>
                <Route component={NoMatch} />
              </Switch>
            </Admin>
          }/>
          <Route path='/order/detail' component={Message}/>
        </App>
      </Router>
    ) 
  }
}

export default IRouter