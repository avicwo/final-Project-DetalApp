import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage/landingPage';
import MdPage from './pages/mdPage/mdPage';
import AdminPage from './pages/adminPage/adminPage';
import Login from './pages/login/Login';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeUser: null,

      //   activeUser:   {
      //     "id": 1,
      //     "fname": "Avi",
      //     "lname": "Cohen",
      //     "email": "avi@avi.com",
      //     "pwd": "123"
      // },
    }
    
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

  }

  handleLogout() {
    this.setState({ activeUser: null });
  }

  handleLogin(activeUser) {
        // console.log({activeUser})

    this.setState({activeUser});
  }

  render() {
    const { activeUser } = this.state;

    // console.log({activeUser})

    return (
      <Switch>
        <Route exact path="/">
          <LandingPage activeUser={activeUser} handleLogout={this.handleLogout} />
        </Route>
        <Route path="/mdPage">
          <MdPage activeUser={activeUser} handleLogin={this.handleLogin} />
        </Route>
        <Route path="/Login">
          <Login handleLogin={this.handleLogin} />
        </Route>
        <Route path="/adminPage">
          <AdminPage activeUser={activeUser} handleLogout={this.handleLogout} />
        </Route>
      </Switch>
    );
  }
}


export default App;
