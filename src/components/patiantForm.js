import React from 'react'
import { Redirect } from 'react-router-dom'
import {Row,Col,Button, Modal, Form, FormControl, InputGroup, Table, Card, Accordion } from 'react-bootstrap';


class PatiantForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // redirectToHome: false
        }

        this.closeModal = this.closeModal.bind(this);
    }

    // logout() {
    //     this.props.handleLogout();

    //     if (window.location.hash !== "#/") {
    //         this.setState({ redirectToHome: true })
    //     }
    // }

    closeModal(){
        this.props.closeModal()

    }

    render() {
        const { showModal } = this.props;
        // console.log(activeUser);
        // const { redirectToHome } = this.state;

        // if (redirectToHome) {
        //     return <Redirect to="/" />
        // }

  

        return (
   <div>
        <Modal show={showModal} onHide={this.closeModal} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>  הפנייה חדשה לדנטלפורם</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    שם
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.fnameInput} type="text" placeholder="השם הפרטי של המטופל" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    שם משפחה
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.lnameInput} type="text" placeholder="שם המשפחה של המטופל" />
                                </Col>
                            </Form.Group>



                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.createPatiantForm}>
                            צור טופס הפנייה חדש
                            </Button>
                    </Modal.Footer>
                </Modal>

   </div>
        );
    }
}

export default PatiantForm;