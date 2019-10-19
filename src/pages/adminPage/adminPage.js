import React from 'react';
import { Table,Card, Accordion, Navbar, Nav } from 'react-bootstrap'


class AdminPage extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {

        // }
    }
    // need to handle logout  - missing logout handling
    // need to add modalto addint a new doc

    render() {


        return (
            <div>

                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/">דנטלפורם</Navbar.Brand>
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#about">אודות</Nav.Link> */}
                        <Nav.Link href="/">התנתק</Nav.Link>
                    </Nav>
                </Navbar>

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
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td colSpan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
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
