import React from 'react';
import { Table, Card, Accordion } from 'react-bootstrap'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { Redirect } from 'react-router-dom'
import MyNavbar from '../../components/myNavbar'



class AdminPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // isAdminUser: null,
            redirectToHome: false
        }
        // console.log(this.props.activeUser)
        this.logout = this.logout.bind(this);

    }

    logout() {
        this.props.handleLogout();
        console.log(window.location.hash)

        if (window.location.hash !== "/") {
            console.log(window.location.hash)
            this.setState({ redirectToHome: true })
            // console.log(this.state.redirectToHome)
            // console.log(this.state.redirectToHome)
        }
    }
    // need to handle logout  - missing logout handling
    // need to add modal to addint a new dental doctor
    render() {
        const { activeUser, handleLogout } = this.props;
        const { redirectToHome } = this.state;


        if (redirectToHome || !activeUser) {
            return <Redirect to="/" />
        }
        // const logoutLink = activeUser ? <Nav.Link onClick={this.logout}>התנתק</Nav.Link> : null;

        if (activeUser.isAdmin) {
            var admin = <p>היי {activeUser.fname}, מה תרצה לעשות היום? זה יוזר אדמין </p>

        }
        else {
            var notAdmin = <p>היי {activeUser.fname}, מה תרצה לעשות היום? זה לא יוזר אדמין</p>

        }


        return (
            <div>

                <MyNavbar activeUser={activeUser} handleLogout={handleLogout} />
                {notAdmin}
                {admin}

                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <Table striped bordered hover variant="">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>

                                <Table striped bordered hover variant="">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th> שם הרופא</th>
                                            <th>נייד </th>
                                            <th>מספר טפסים שנשלחו</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>שם הרופא</td>
                                            <td>נייד</td>
                                            <td>אימייל</td>
                                            <td>כתובת המרפאה</td>
                                        </tr>
                                        <BootstrapSwitchButton
                                            checked={false}
                                            onlabel='On'
                                            offlabel='Off'
                                            onChange={(checked) => {
                                                // debugger;
                                                this.setState({ isAdminUser: checked })
                                            }}
                                        />
                                    </tbody>
                                </Table>

                                Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Click me!
                       </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

            </div>
        );
    }
}


export default AdminPage;
