import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/index';
import home from "./pages/home/home";
import login from "./pages/auth/login/login";
import register from "./pages/auth/register/register";
import account from "./pages/account/account";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router forceRefresh={true}>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/login" component={login} />
          <Route path="/register" component={register} />
          <Route path="/account" component={account} />
        </Switch>
      </Router>
    );
  }
}

export default App;
