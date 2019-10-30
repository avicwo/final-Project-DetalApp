import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage/landingPage';
import MdPage from './pages/mdPage/mdPage';
import AdminPage from './pages/adminPage/adminPage';
import Login from './pages/login/Login';
import { Parse } from 'parse';
import MdFormPage from './pages/mdFormPage/mdFormPage'

//need to logout from parse as well

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // activeUser: null, 

      activeUser: {
        "id": 1,
        "fname": "aaa",
        "lname": "aaa",
        "email": "aaa@aaa.com",
        "pwd": "qqq",
        "isAdmin": true,
        "isActiveDoctor":true
      },
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

  }

  handleLogout() {
    // console.log(this.state.activeUser);
    Parse.LiveQuery.close();

    this.setState({ activeUser: null });

  }

  handleLogin(activeUser) {
    // console.log("app handle login"+a)
    this.setState({ activeUser });
    Parse.LiveQuery.close();

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

        <Route path="/mdFormPage">
          <MdFormPage activeUser={activeUser} handleLogout={this.handleLogout} />
        </Route>

        <Route path="/mdPage">
          {/* here a user can:
          1. review the list of forms he sent
          2.create an form
          3. need to b able to search form by patiant name, id,form id, phone number


                     */}
          <MdPage activeUser={activeUser} handleLogout={this.handleLogout} handleLogin={this.handleLogin} />
        </Route>
        <Route path="/Login">
          {/* here a potential user can:
         
          1.can login to his account (as admin or not)
           */}
          <Login activeUser={activeUser} handleLogout={this.handleLogout} handleLogin={this.handleLogin} />
        </Route>
        <Route path="/adminPage">
          {/* here a potential user can:
          1. how many forms each md created
          2. see list of forms every md made
          3. create an md - need to go back to an admin user
          create another table of doc, all additional input such as is disabled will be there - it is becuse the user table of parse cant be changed
          4. send sms reminder to potential patiants on thier q 
          5. need to be able to feel a form in behalf of a doctor
          6. need to be able to search form by doc name, patiant name and id, form number 
          7. need to think on the use case - what the institute need when a user arrive? should they search for a form first? sould they search a md and then form or patiant?
          8. maybe we should show all md in a table and by pressing on md we will enter to the md page where we will see all of his forms
           */}
          <AdminPage activeUser={activeUser} handleLogout={this.handleLogout} />
        </Route>
      </Switch>
    );
  }
}

export default App;

    // open issuses
    //  2. fix thestructure of the md page - the headers shouldnt return
    //  4. how to alow only admin user to login my admin page - used conditinal render on the active user props, is this the way?
    //  6. Add confirmation massege on the leads - add validation on email
    //  10. add email after lead generation
    //  11. need to create summary from and from it update the DB
    //  12. cancel the gap in the landing page etween the bg img to the nav
    //  13. since one user cant update another user i need to create another table of users, 
    //      every log in req will check both tables, users and the new table, 
    //      and if it fail i should redirect the user to another page 
