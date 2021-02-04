import React, { useState } from "react";
import { ToastProvider } from "react-toast-notifications";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from 'react-redux'
import Store from './component/redux/store'
import Home from './component/pages/index'
import Buy from './component/pages/buy'
import Account from './component/pages/account'
import Cart from './component/pages/cart'
import Login from './component/pages/Login'
import Create from './component/pages/create_account'
import Errors from './component/pages/Errors'
import Men from './component/pages/men'
import Kids from './component/pages/kids'
import HomePage from './component/pages/homepage'
import Game from './component/pages/game'
import Electronics from './component/pages/electronics'
import Improvement from './component/pages/improvement'
export const UserContext = React.createContext([]);
function App() {
  const [user, setUser] = useState({});
  return (
    <ToastProvider
  >
    <UserContext.Provider value={[user, setUser]}>
      <Provider store={Store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/buy" component={Buy}></Route>
        <Route exact path="/men" component={Men}></Route>
        <Route exact path="/home" component={HomePage}></Route>
        <Route exact path="/kids" component={Kids}></Route>
        <Route exact path="/game" component={Game}></Route>
        <Route exact path="/electronics" component={Electronics}></Route>
        <Route exact path="/home_improvement" component={Improvement}></Route>
        <Route exact path="/account/:name" component={Account}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/create_account" component={Create}></Route>
        <Route exact path="/404" component={Errors}></Route>
        <Redirect to="/404" />
      </Switch>
    </Router>
    </Provider>
    </UserContext.Provider>
    </ToastProvider>
  );
}

export default App;
