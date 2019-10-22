import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage/landingPage';
import MdPage from './pages/mdPage/mdPage';
import AdminPage from './pages/adminPage/adminPage';
import Login from './pages/login/Login';

//need to logout from parse as well

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeUser: null,

      // activeUser: {
      //   "id": 1,
      //   "fname": "אבי",
      //   "lname": "כהן",
      //   "email": "avi@avi.com",
      //   "pwd": "qqq",
      //   "isAdmin": true
      // },
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

  }

  handleLogout() {
    console.log(this.state.activeUser);
    this.setState({ activeUser: null });
  }

  handleLogin(activeUser) {
    var a =activeUser
    console.log("app handle login"+a)
    this.setState({ activeUser });
  }

  render() {
    const { activeUser } = this.state;

    return (
      <Switch>
        <Route exact path="/">
          {/* here a potential user can:
          1. review the service 
          2.send lead to the admin
          3.can login to his account (as admin or not)
           */}
          <LandingPage activeUser={activeUser} handleLogout={this.handleLogout} />
        </Route>
        <Route path="/mdPage">
          {/* here a user can:
          1. review the list of forms he sent
          2.create ew form
                     */}
          <MdPage activeUser={activeUser} handleLogin={this.handleLogin} />
        </Route>
        <Route path="/Login">
          {/* here a potential user can:
         
          1.can login to his account (as admin or not)
           */}
          <Login handleLogin={this.handleLogin} />
        </Route>
        <Route path="/adminPage">
          {/* here a potential user can:
          1. how many forms each md created
          2. see list of forms every md made
          3. create an md - need to go back to an admin user
          create another table of doc, all additional input such as is disabled will be there - it is becuse the user table of parse cant be changed
          4. send sms reminder to potential patiants on thier q 
          5. need to be able to feel a form in behalf of a doctor
           */}
          <AdminPage activeUser={activeUser} handleLogout={this.handleLogout} />
        </Route>
      </Switch>
    );
  }
}

export default App;
