import React from 'react';
import './Login.css';
import { Alert, Nav, Navbar, Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import Parse from 'parse';
//need to amend this part to take from the datamodel
import { User } from './User-data-model';



class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            invalidLogin: false,
            successDentalAndUserLogin: false,
            deactivatedDentalDoctor: false,
            successAdminUserLogin: false,
            successLogin: false,
            // successUserTableLogin: false,
            // successDentalUserLogin: false

            //  successLogin: true


        }
        this.emailInput = React.createRef();
        this.pwdInput = React.createRef();

        this.login = this.login.bind(this);
        // this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    // handleKeyPress(e) {
    //     if (e.key === "Enter") {
    //         Parse.User.logIn(this.emailInput.current.value, this.pwdInput.current.value).then(user => {
    //             this.props.handleLogin(new User(user));
    //             this.setState({ successLogin: true });
    //         }).catch(error => {
    //             console.error('Error while logging in user', error);
    //             this.setState({ invalidLogin: true });
    //         })
    //     };
    // }



    login() {

        Parse.User.logIn(this.emailInput.current.value, this.pwdInput.current.value).then(user => {
            if (!user.attributes.isAdmin) {
                const DentalDoctor = Parse.Object.extend('DentalDoctor');
                const query = new Parse.Query(DentalDoctor);
                query.equalTo("userID", Parse.User.current());
                // query.equalTo("isActiveDoctor", true);
                query.find().then((results) => {
                    const myUser = results.map(result => new User(result));

                    if (myUser[0].isActiveDoctor) {
                        this.props.handleLogin(new User(user));
                        this.setState({ successDentalAndUserLogin: true });

                    } else if (myUser[0].isActiveDoctor === false) {
                        // this.props.handleLogout();
                        this.setState({ deactivatedDentalDoctor: true })
                    }   
                }
                ).catch(error => {
                    console.error('Error while logging in user', error);
                    this.setState({ invalidLogin: true });
                });
            } else {
                this.props.handleLogin(new User(user));
                this.setState({ successAdminUserLogin: true })
            }
            return
        })
    }


    render() {

        const { successDentalAndUserLogin, successAdminUserLogin } = this.state

        if (successAdminUserLogin) {
            console.log(this.props.activeUser)
            return <Redirect to="/adminPage" />
        } else if (successDentalAndUserLogin) {
            return <Redirect to="/MdPage" />
        }

        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/">דנטלפורם</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                </Navbar>

                <div className="container login">
                    <h1>הכנס למערכת</h1>
                    <p>או <a href="#/signup">צור משתמש חדש</a></p>
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
                        <Button className="loginbtn" variant="success" type="button" block onClick={this.login} onKeyPress={this.handleKeyPress}>
                            הכנס
                    </Button>
                    </Form>

                </div>
            </div>

        );
    }
}


export default Login;
