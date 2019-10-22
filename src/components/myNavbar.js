import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import './myNavbar.css';

class myNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToHome: false
        }

        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.handleLogout();

        if (window.location.hash !== "#/") {
            this.setState({ redirectToHome: true })
        }
    }

    render() {
        const { activeUser } = this.props;
        console.log(activeUser);
        const { redirectToHome } = this.state;

        if (redirectToHome) {
            return <Redirect to="/" />
        }

        const loginLink = !activeUser ? <Nav.Link href="#/Login">הכנס</Nav.Link> : null;
        const logoutLink = activeUser ? <Nav.Link onClick={this.logout}>התנתק</Nav.Link> : null;


        return (
            <Navbar bg="primary" expand="lg" variant="dark">
                {/* <span>{activeUser.fname}</span> */}
                <Navbar.Brand href="/">דנטלפורם</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto alight-right">
                        {/* {signupLink} */}
                        {loginLink}
                        {logoutLink}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default myNavbar;