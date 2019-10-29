import React from 'react';
import { Row, Col, Button, Modal, Form, FormControl, InputGroup, Table, Card, Accordion } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import MyNavbar from '../../components/myNavbar';
import Parse from 'parse';
import { Forms } from '../../data-model/Forms';
import PatiantForm from '../../components/patiantForm'

class MdFormPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectToHome: false,
            mdForms: [], //will contain all the md'sformid
            filteredmdForms: [],

            // filteredFormsList:[],
            mdForms: [],
            forms:[],
            redirectTomdFormPage: false

        }
        this.logout = this.logout.bind(this);

    }



    logout() {
        this.props.handleLogout();
        console.log(window.location.hash)

        if (window.location.hash !== "/") {
            console.log(window.location.hash)
            this.setState({ redirectToHome: true })
        }

    }


    render() {
        const { activeUser, handleLogout } = this.props;
        const { redirectToHome } = this.state;
        // filteredmdForms = mdForms;


        if (redirectToHome || !activeUser) {
            return <Redirect to="/" />
        }
        
        // props.match.param.id
        if (activeUser.isAdmin) {

            var admin = <p>היי {activeUser.fname}, מה תרצה לעשות היום? זה יוזר אדמין דף רופאים </p>
        } else if (!activeUser.isAdmin) {
            var notAdmin = <p>היי {activeUser.fname}, מה תרצה לעשות היום? זה לא יוזר אדמין דף רופאים</p>
        }

        return (
            <div>
                <MyNavbar activeUser={activeUser} handleLogout={handleLogout} />
                {notAdmin}
                {admin}

                <PatiantForm activeUser={activeUser}/>



            </div>
        );
    }
}


export default MdFormPage;
