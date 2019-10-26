import React from 'react';
import {Form, FormControl, InputGroup, Table, Card, Accordion } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import MyNavbar from '../../components/myNavbar';
import Parse from 'parse';
import { Forms } from '../../data-model/Forms';
import './mdPage.css';


class MdPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectToHome: false,
            mdForms: [], //will contain all the md's
            filteredmdForms: [],

            // filteredFormsList:[],
            mdForms: [],

        }

        this.logout = this.logout.bind(this);
        // this.filterInput = this.filterInput.bind(this)
    }

    componentDidMount() {
        var { mdForms } = this.state;
        // only if there is an active user we will make a call to the server
        if (this.props.activeUser) {
            // getting the active user forms
            const FormsTable = Parse.Object.extend('Forms');
            const query = new Parse.Query(FormsTable);
            query.equalTo("userId", Parse.User.current());
            // query.equalTo("isAdmin", false);
            query.find().then((results) => {
                mdForms = results.map(result => new Forms(result));
                // filteredFormsList = results.map(result => new Form(result));
                console.log('md found', mdForms);
                console.log('md found', this.props.activeUser);

                this.setState({ mdForms  });
            }, (error) => {
                // if (typeof document !== 'undefined') document.write(`Error while fetching Recipe: ${JSON.stringify(error)}`);
                console.error('Error while fetching doctor details', error);
            });
        }
    }

    // filterInput(e) {

    //     this.state.filteredFormsList = [];
    //     var filterText = e.target.value;
    //     for (let i = 0; i < this.state.mdForms.length; i++) {
    //         if (this.state.mdForms[i].fname.toLowerCase().includes(filterText.toLowerCase())
    //             || this.state.mdForms[i].lname.toLowerCase().includes(filterText.toLowerCase())
    //             || this.state.mdForms[i].mobile.toLowerCase().includes(filterText.toLowerCase())
    //         ) {
    //             this.state.filteredmdForms.push(this.state.mdForms[i])
    //         }
    //         //   else {
    //         //     this.state.mdForms
    //         //   }
    //     }
    //     this.setState(this.state)
    //     // console.log( this.state.filteredmdForms)

    // }


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
        const { redirectToHome ,mdForms} = this.state;
        // filteredmdForms = mdForms;


        if (redirectToHome || !activeUser) {
            return <Redirect to="/" />
        }
        if (activeUser.isAdmin) {

            var admin = <p>היי {activeUser.fname}, מה תרצה לעשות היום? זה יוזר אדמין דף רופאים </p>
        }
        else {
            var notAdmin = <p>היי {activeUser.fname}, מה תרצה לעשות היום? זה לא יוזר אדמין דף רופאים</p>
        }

        var mdCardsForms = mdForms.map(md => <Card>
            <Accordion.Toggle as={Card.Header} eventKey={md.id}>
                <Table striped bordered hover variant="">
                    <thead className="remove-borders">
                        <tr className="remove-borders">
                            <th>שם המטופל</th>
                            <th>טלפון נייד </th>
                            <th>סוג טיפול  </th>
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

                            </tr>
                        </thead>
                        <tbody className="remove-borders">
                            <tr>
                                <td>{md.adress}</td>
                                <td>{md.expertise}</td>
                                <td>{md.email}</td>
                          
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
                        // onChange={this.filterInput}
                        placeholder=" חפש מטופל כאן לפי שם פרטי, שם משפחה , מספר נייד או מספר טופס..."
                        // aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />

                </InputGroup>

                <Accordion defaultActiveKey="0">

                    {mdCardsForms}
                </Accordion>

            </div>
        );
    }
}


export default MdPage;
