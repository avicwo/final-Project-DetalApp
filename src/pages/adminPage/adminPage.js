import React from 'react';
import { FormControl, InputGroup, Table, Card, Accordion } from 'react-bootstrap';
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
            mdList: [], //will contain all the md's
            filteredMdList: []
        }

        this.logout = this.logout.bind(this);
        this.filterInput = this.filterInput.bind(this)
        this.toggleDoctorStatus = this.toggleDoctorStatus.bind(this)
    }

    toggleDoctorStatus() {
        const isActiveDoctor = !this.state.isActiveDoctor
        this.setState({ isActiveDoctor: isActiveDoctor })
    }

    componentDidMount() {
        var { mdList, filteredMdList } = this.state;
        // only if there is an active user we will make a call to the server
        if (this.props.activeUser) {
            // getting the active user recipes
            const MdTable = Parse.Object.extend('User');
            const query = new Parse.Query(MdTable);
            query.equalTo("isAdmin", false);
            query.find().then((results) => {
                mdList = results.map(result => new UserMd(result));
                filteredMdList = results.map(result => new UserMd(result));
                // console.log('md found', mdList);

                this.setState({ mdList, filteredMdList });
            }, (error) => {
                // if (typeof document !== 'undefined') document.write(`Error while fetching Recipe: ${JSON.stringify(error)}`);
                console.error('Error while fetching doctor details', error);
            });
        }
    }

    filterInput(e) {
        var filteredMdList = this.state.filteredMdList
        filteredMdList = []
        // this.state.filteredMdList =
        var filterText = e.target.value;
        for (let i = 0; i < this.state.mdList.length; i++) {
            if (this.state.mdList[i].fname.toLowerCase().includes(filterText.toLowerCase())
                || this.state.mdList[i].lname.toLowerCase().includes(filterText.toLowerCase())
                || this.state.mdList[i].mobile.toLowerCase().includes(filterText.toLowerCase())
            ) {
                filteredMdList.push(this.state.mdList[i])
            }
            //   else {
            //     this.state.mdList
            //   }
        }
        this.setState(this.state)
        // console.log( this.state.filteredMdList)

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
                            <td>{md.forms.length}</td>
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

                </InputGroup>

                <Accordion defaultActiveKey="0">

                    {mdCards}
                </Accordion>

            </div>
        );
    }
}


export default AdminPage;
