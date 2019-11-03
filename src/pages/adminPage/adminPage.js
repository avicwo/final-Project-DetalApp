import React from 'react';
import { Form, Modal, Button, FormControl, InputGroup, Table, Card, Accordion } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { Redirect } from 'react-router-dom';
import MyNavbar from '../../components/myNavbar';
import Parse from 'parse';
import { UserMd } from '../../data-model/UserMd';
import './adminPage.css';

class AdminPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isActiveDoctor: true,
            redirectToHome: false,
            mdList: [], 
            filteredMdList: [],
            showModal: false
        }

        this.logout = this.logout.bind(this);
        this.filterInput = this.filterInput.bind(this)
        this.toggleDoctorStatus = this.toggleDoctorStatus.bind(this)
        this.createDoctor = this.createDoctor.bind(this)
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)

        this.fname = React.createRef();
        this.lname = React.createRef();
        this.mobile = React.createRef();
        this.email = React.createRef();
        this.adress = React.createRef();
        this.expertise = React.createRef();
    }

    openModal() {
        this.setState({ showModal: true })
    }


    closeModal() {
        this.setState({ showModal: false })
    }

    createDoctor() {

        const mdList = {
            fname: this.fname.current.value,
            lname: this.lname.current.value,
            mobile: this.mobile.current.value,
            adress: this.adress.current.value,
            mobile: this.mobile.current.value,
            expertise: this.expertise.current.value,
        }
        const user = new Parse.User()
        user.set('username', this.lname.current.value);
        user.set('email', this.email.current.value);
        user.set('lname', this.lname.current.value);
        user.set('fname', this.fname.current.value);
        user.set('adress', this.adress.current.value);
        user.set('expertise', this.expertise.current.value);
        user.set('mobile', this.mobile.current.value);
        user.set('isActiveDoctor', true);
        user.set('password', '#newpass');

        user.signUp().then((user) => {
            if (typeof document !== 'undefined') document.write(`User signed up: ${JSON.stringify(user)}`);
            console.log('User signed up', user);
        }).catch(error => {
            if (typeof document !== 'undefined') document.write(`Error while signing up user: ${JSON.stringify(error)}`);
            console.error('Error while signing up user', error);
        }); 
        this.setState({ mdList: mdList })
    }


    toggleDoctorStatus() {
        const isActiveDoctor = !this.state.isActiveDoctor
        this.setState({ isActiveDoctor: isActiveDoctor })
    }

    componentDidMount() {
        var { mdList, filteredMdList } = this.state;
         mdList  =[];
         filteredMdList=[];
        if (this.props.activeUser) {
            const MdTable = Parse.Object.extend('User');
            const query = new Parse.Query(MdTable);
            // query.equalTo("isAdmin", false)             
            query.find().then((results) => {
                mdList = results.map(result => new UserMd(result));
                filteredMdList = results.map(result => new UserMd(result));
                this.setState({ mdList, filteredMdList });
                console.log(filteredMdList)
            }, (error) => {
                console.error('Error while fetching doctor details', error);
            });
        }
    }

    filterInput(e) {

        this.state.filteredMdList = [];
        var filterText = e.target.value;
        for (let i = 0; i < this.state.mdList.length; i++) {
            if (this.state.mdList[i].fname.toLowerCase().includes(filterText.toLowerCase())
                || this.state.mdList[i].lname.toLowerCase().includes(filterText.toLowerCase())
                || this.state.mdList[i].mobile.toLowerCase().includes(filterText.toLowerCase())
            ) {
                this.state.filteredMdList.push(this.state.mdList[i])
            }
            //   else {
            //     this.state.mdList
            //   }
        }
        this.setState(this.state)

    }

    logout() {
        this.props.handleLogout();
        console.log(window.location.hash)

        if (window.location.hash !== "/") {
            console.log(window.location.hash)
            this.setState({ redirectToHome: true })
        }
    }

    // need to add modal to addint a new dental doctor
    render() {
        const { activeUser, handleLogout } = this.props;
        const { redirectToHome, filteredMdList } = this.state;
        // filteredMdList = mdList;


        if (redirectToHome || !activeUser) {
            return <Redirect to="/" />
        }
        if (activeUser.isAdmin) {
            var admin = <p>היי {activeUser.fname}, מה תרצה לעשות היום? זה יוזר אדמין </p>
        } else {
            var notAdmin = <p>היי {activeUser.fname}, מה תרצה לעשות היום? זה לא יוזר אדמין</p>
        }

        var mdCards = filteredMdList.map(md => <Card>
            <Accordion.Toggle as={Card.Header} eventKey={md.id}>
                <Table striped bordered hover variant="">
                    <thead className="remove-borders">
                        <tr className="remove-borders">
                            <th>שם הרופא</th>
                            <th>טלפון נייד </th>
                            <th>מספר הטפסים שנשלחו</th>
                        </tr>
                    </thead>
                    <tbody className="remove-borders">
                        <tr className="remove-borders">
                            <td>{md.fname + " " + md.lname}</td>
                            <td>{md.mobile}</td>
                            {/* <td>{md.forms.length}</td> */}
                        </tr>
                    </tbody>
                </Table>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={md.id}>
                <Card.Body>
                    <Table striped bordered hover variant="">
                        <thead className="remove-borders">
                            <tr >
                                <th>כתובת המרפאה</th>
                                <th>מומחיות</th>
                                <th>אימייל </th>
                                <th> </th>

                            </tr>
                        </thead>
                        <tbody className="remove-borders">
                            <tr>
                                <td>{md.adress}</td>
                                <td>{md.expertise}</td>
                                <td>{md.email}</td>
                                <td> <BootstrapSwitchButton
                                    checked={true}
                                    onlabel='On'
                                    offlabel='Off'
                                    onChange={this.toggleDoctorStatus}
                                /></td>
                            </tr>

                        </tbody>
                    </Table>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        )





        return (
            <div>

                <MyNavbar activeUser={activeUser} handleLogout={handleLogout} />
                {notAdmin}
                {admin}

                <InputGroup className="mb-3">
                    <FormControl
                        onChange={this.filterInput}
                        placeholder="חפש רופא כאן לפי שם פרטי, שם משפחה או מספר נייד..."
                        // aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button onClick={this.openModal} variant="primary" type="button">
                        צור רופא חדש
                    </Button>
                </InputGroup>

                <Accordion defaultActiveKey="0">

                    {mdCards}
                </Accordion>

                <Modal show={this.state.showModal} onHide={this.closeModal} size="lg">

                    <Modal.Body className="text-center">
                        <div className="">
                            <h4>פרטי הרופא</h4>
                            <div>

                                <Form className="basicFormStructure">
                                    <Form.Group controlId="formBasic">
                                        <Form.Label>שם פרטי </Form.Label>
                                        <Form.Control ref={this.fname} type="text" placeholtextder=" שם פרטי" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasic">
                                        <Form.Label>שם משפחה </Form.Label>
                                        <Form.Control ref={this.lname} type="text" placeholtextder=" שם משפחה" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasic">
                                        <Form.Label>נייד </Form.Label>
                                        <Form.Control ref={this.mobile} type="text" placeholtextder=" נייד " />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>אימייל  </Form.Label>
                                        <Form.Control ref={this.email} type="email" placeholtextder=" אימייל" />
                                    </Form.Group>

                                    <Form.Group controlId="">
                                        <Form.Label>כתובת  </Form.Label>
                                        <Form.Control ref={this.adress} type="text" placeholtextder=" כתובת" />
                                    </Form.Group>

                                    <Form.Group controlId="">
                                        <Form.Label>מומחיות  </Form.Label>
                                        <Form.Control ref={this.expertise} type="text" placeholtextder="מומחיות" />
                                    </Form.Group>
                                </Form>
                            </div>


                        </div>
                        <Button className="" onClick={this.createDoctor} variant="primary" type="button">
                            צור רופא
                    </Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            סגור
                        </Button>

                    </Modal.Footer>

                </Modal>

            </div>
        );
    }
}


export default AdminPage;
