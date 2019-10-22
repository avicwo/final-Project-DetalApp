import React from 'react';
import './Login.css';
import { Alert, Nav, Navbar, Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import Parse from 'parse';
// import { User } from '../../data-model/user-md';
//need to amend this part to take from the datamodel
import { User } from './User-data-model';



class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            invalidLogin: false,
            successLogin: false,           
            //  successLogin: true


        }
        this.emailInput = React.createRef();
        this.pwdInput = React.createRef();
        this.login = this.login.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    handleKeyPress(e) {
        if (e.key === "Enter") {
            Parse.User.logIn(this.emailInput.current.value, this.pwdInput.current.value).then(user => {
                // Do stuff after successful login
                console.log('Logged in user', user);

                // calling App's callback function
                // this.props.handleLogin(new User(user));
                this.props.handleLogin(new User(user));
                this.setState({ successLogin: true });
                console.log(this.state.successLogin)

            }).catch(error => {
                console.error('Error while logging in user', error);
                this.setState({ invalidLogin: true });
            })
        };
    }
    
    login() {

        Parse.User.logIn(this.emailInput.current.value, this.pwdInput.current.value).then(user => {
            // Do stuff after successful login
            console.log('Logged in user', user);

            // calling App's callback function
            // this.props.handleLogin(new User(user));
            this.props.handleLogin(new User(user));
            this.setState({ successLogin: true });
            console.log(this.state.successLogin)

        }).catch(error => {
            console.error('Error while logging in user', error);
            this.setState({ invalidLogin: true });
        });
    }


    render() {
        if (this.state.successLogin) {
            return <Redirect to="/adminPage" />
        }

        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/">דנטלפורם</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                </Navbar>

                <div className="login">
                    <h1>הכנס למערכת</h1>
                    <p>or <a href="#/signup">צור משתמש חדש</a></p>
                    <Alert variant="danger" show={this.state.invalidLogin}>
                        Invalid email or password!
                </Alert>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>כתובת אימייל</Form.Label>
                            <Form.Control ref={this.emailInput} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>סיסמא   </Form.Label>
                            <Form.Control ref={this.pwdInput} type="password" placeholder="Password" onKeyPress={this.handleKeyPress} />
                        </Form.Group>
                        <Button variant="success" type="button" block onClick={this.login} onKeyPress={this.handleKeyPress}>
                            Login
                    </Button>
                    </Form>

                </div>
            </div>

        );
    }
}


export default Login;
