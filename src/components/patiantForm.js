import React from 'react'
import './patiantForm.css'
import { Redirect } from 'react-router-dom'
import { Row, Col, Button, Modal, Form, FormControl, InputGroup, Table, Card, Accordion } from 'react-bootstrap';
// import MultiStep from 'react-multistep'
const MultiStep = import from 'react-multistep'


class StepTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (

            <div>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

            </div>
        )

    }

}


class StepOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (

            <div>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            </div>
        )

    }

}

class PatiantForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // redirectToHome: false
        }

        // this.createPatiantForm = this.createPatiantForm.bind(this);
        // this.fnameInput = React.createRef();
        // this.lnameInput = React.createRef();
    }

    // createPatiantForm() {
    //     this.props.createPatiantForm(this.lnameInput.current.value, this.fnameInput.current.value)
    //     this.closeModal()
    // }

    render() {
        const { activeUser } = this.props;

        const steps = [
            { name: 'StepOne', component: <StepOne /> },
            { name: 'StepTwo', component: <StepTwo /> },
            { name: 'StepThree', component: <StepThree /> },
            { name: 'StepFour', component: <StepFour /> }
        ];
        // console.log(forms)
        // const { redirectToHome } = this.state;

        // if (redirectToHome) {
        //     return <Redirect to="/" />
        // }



        return (
            <div>

                <MultiStep showNavigation={true} steps={steps} />

            </div>


            </div >
        );
    }
}

export default PatiantForm;