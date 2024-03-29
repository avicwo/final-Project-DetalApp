import React from 'react';
import {  Button, FormControl, InputGroup, Table, Card, Accordion } from 'react-bootstrap';
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
            filteredmdForms: [],
            mdForms: [],
            formId: [],
            redirectTomdFormPage: false

        }

        this.logout = this.logout.bind(this);
        this.redirectTomdFormPage = this.redirectTomdFormPage.bind(this);

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
                console.log(results)
                mdForms = results.map(result => new Forms(result));
                console.log('md found', mdForms[0]);
                this.setState({ mdForms });
            }, (error) => {
                console.error('Error while fetching doctor details', error);
            });
        }

    }


    // createFormId(){


    //         const PatiantFormRow = Parse.Object.extend('Forms');
    //         const newPatiantForm = new PatiantFormRow();

    //         newPatiantForm.set('userId', Parse.User.current());
    //         newPatiantForm.save().then(result => {
    //             console.log('form created', result);

    //             const form = new PatiantForm(result);
    //             const forms = this.state.mdForms.concat(form);
    //             this.setState({ forms });
    //         },
    //             (error) => {
    //                 console.error('Error while creating Recipe: ', error);
    //             }
    //         );
    //     }

    // createPatiantForm(lnameValue, fnameValue) {


    //     const PatiantFormRow = Parse.Object.extend('Forms');
    //     const newPatiantForm = new PatiantFormRow();

    //     newPatiantForm.set('lname', lnameValue);
    //     newPatiantForm.set('fname', fnameValue);
    //     newPatiantForm.set('userId', Parse.User.current());
    //     newPatiantForm.save().then(result => {
    //         console.log('form created', result);

    //         const form = new PatiantForm(result);
    //         const forms = this.state.mdForms.concat(form);
    //         this.setState({ forms });
    //     },
    //         (error) => {
    //             console.error('Error while creating Recipe: ', error);
    //         }
    //     );
    // }


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
        // console.log(window.location.hash)

        if (window.location.hash !== "/") {
            console.log(window.location.hash)
            this.setState({ redirectToHome: true })
        }

    }


    // need to add modal to addint a new dental doctor

    redirectTomdFormPage() {
        this.setState({ redirectTomdFormPage: true })
        console.log(this.state.redirectTomdFormPage)
        return
    }



    render() {
        const { activeUser, handleLogout } = this.props;
        const { redirectToHome, mdForms, redirectTomdFormPage } = this.state;
        // filteredmdForms = mdForms;

        console.log(mdForms[0]);



        if (redirectToHome || !activeUser) {
            return <Redirect to="/" />
        }
        if (redirectTomdFormPage && activeUser) {
            return <Redirect to="/mdFormPage" />
        }

        // props.match.param.id
        if (activeUser.isAdmin) {

            var admin = <h5 className="container">היי {activeUser.fname}, מה תרצה לעשות היום?      </h5>
        } else if (!activeUser.isAdmin) {
            var notAdmin = <h5 className="container">היי {activeUser.fname}, מה תרצה לעשות היום? </h5>
        }

        var mdCardsForms = mdForms.map(md => <Card>

            <Accordion.Toggle as={Card.Header} eventKey={md.formId}>
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
                            <td>{md.orth_facial_type}</td>
                        </tr>
                    </tbody>
                </Table>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={md.formId}>
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
            <div >

                <MyNavbar activeUser={activeUser} handleLogout={handleLogout} />
                {notAdmin}
                {admin}

                <div className="container">
                    <InputGroup className="mb-3 ">
                        <FormControl
                            // onChange={this.filterInput}
                            placeholder=" חפש מטופל כאן לפי שם פרטי, שם משפחה , מספר נייד או מספר טופס..."
                            // aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                    <Button className="mb-1" variant="primary" onClick={this.redirectTomdFormPage}>טופס חדש</Button>

                    </InputGroup>

                    <Accordion defaultActiveKey="0">

                        {mdCardsForms}
                    </Accordion>

                    </div>


                </div>
                );
            }
        }
        
        
        export default MdPage;
