import React from 'react'
import { Forms } from '../data-model/Forms';
import './patiantForm.css'
import Parse from 'parse'
import emailsuccess from '../images/emailsuccess.png'
// import { Redirect } from 'react-router-dom'
import { Row, Col, Accordion, Image, Button, Modal, Card, Form } from 'react-bootstrap';


class PatiantForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToHome: false,
            moveStepUp: 0,
            moveStepDown: 0,
            currentStep: 1,
            formDetails: {},
            showModal: false

        }
        this.moveStepUp = this.moveStepUp.bind(this);
        this.moveStepDown = this.moveStepDown.bind(this);
        this.toggleAllTeath = this.toggleAllTeath.bind(this)
        this.createForm = this.createForm.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.openModal = this.openModal.bind(this)

        this.allTeath = React.createRef();
        this.t28 = React.createRef();
        this.t27 = React.createRef();
        this.t28 = React.createRef();
        this.t27 = React.createRef();
        this.t26 = React.createRef();
        this.t25 = React.createRef();
        this.t24 = React.createRef();
        this.t23 = React.createRef();
        this.t22 = React.createRef();
        this.t21 = React.createRef();
        this.t38 = React.createRef();
        this.t37 = React.createRef();
        this.t36 = React.createRef();
        this.t35 = React.createRef();
        this.t34 = React.createRef();
        this.t33 = React.createRef();
        this.t32 = React.createRef();
        this.t31 = React.createRef();
        this.t11 = React.createRef();
        this.t12 = React.createRef();
        this.t13 = React.createRef();
        this.t14 = React.createRef();
        this.t15 = React.createRef();
        this.t16 = React.createRef();
        this.t17 = React.createRef();
        this.t18 = React.createRef();
        this.t41 = React.createRef();
        this.t42 = React.createRef();
        this.t43 = React.createRef();
        this.t44 = React.createRef();
        this.t45 = React.createRef();
        this.t46 = React.createRef();
        this.t47 = React.createRef();
        this.t48 = React.createRef();
        this.fname = React.createRef();
        this.lname = React.createRef();
        this.mobile = React.createRef();
        this.email = React.createRef();
        this.ctType_isPanoramic = React.createRef();
        this.ctType_isStatus = React.createRef();
        this.ctType_isStatusParallel = React.createRef();
        this.ortho_cephalometric_side = React.createRef();
        this.ortho_computerized_tomography = React.createRef();
        this.ortho_diagnostic_setup = React.createRef();
        this.orth_facial_type = React.createRef();
        this.ct_implant = React.createRef();
        this.ct_trap_tooth = React.createRef();
        this.ct_endo = React.createRef();
        this.ct_other = React.createRef();
    }

    closeModal() {
        this.setState({ showModal: false })
    }
    openModal() {
        this.setState({ showModal: true })
    }

    createForm() {
        const formDetailst = {
            fname: this.fname.current.value,
            lname: this.lname.current.value,
            mobile: this.mobile.current.value,
            email: this.email.current.value,
            ctType_isPanoramic: this.ctType_isPanoramic.current.checked,
            ctType_isStatus: this.ctType_isStatus.current.checked,
            ctType_isStatusParallel: this.ctType_isStatusParallel.current.checked,
            ortho_cephalometric_side: this.ortho_cephalometric_side.current.checked,
            ortho_computerized_tomography: this.ortho_computerized_tomography.current.checked,
            ortho_diagnostic_setup: this.ortho_diagnostic_setup.current.checked,
            orth_facial_type: this.orth_facial_type.current.checked,
            ct_implant: this.ct_implant.current.checked,
            ct_trap_tooth: this.ct_trap_tooth.current.checked,
            ct_endo: this.ct_endo.current.checked,
            ct_other: this.ct_other.current.value,
            allTeath: this.allTeath.current.checked,
            t28: this.t28.current.checked,
            t27: this.t27.current.checked,
            t26: this.t26.current.checked,
            t25: this.t25.current.checked,
            t24: this.t24.current.checked,
            t23: this.t23.current.checked,
            t22: this.t22.current.checked,
            t21: this.t21.current.checked,
            t38: this.t38.current.checked,
            t37: this.t37.current.checked,
            t36: this.t36.current.checked,
            t35: this.t35.current.checked,
            t34: this.t34.current.checked,
            t33: this.t33.current.checked,
            t32: this.t32.current.checked,
            t31: this.t31.current.checked,
            t11: this.t11.current.checked,
            t12: this.t12.current.checked,
            t13: this.t13.current.checked,
            t14: this.t14.current.checked,
            t15: this.t15.current.checked,
            t16: this.t16.current.checked,
            t17: this.t17.current.checked,
            t18: this.t18.current.checked,
            t41: this.t41.current.checked,
            t42: this.t42.current.checked,
            t43: this.t43.current.checked,
            t44: this.t44.current.checked,
            t45: this.t45.current.checked,
            t46: this.t46.current.checked,
            t47: this.t47.current.checked,
            t48: this.t48.current.checked

        }
        const FormTable = Parse.Object.extend('Forms');
        const newPatiantForm = new FormTable();

        newPatiantForm.set('userId', Parse.User.current());
        newPatiantForm.set('fname', this.fname.current.value);
        newPatiantForm.set('lname', this.lname.current.value);
        newPatiantForm.set('email', this.email.current.value);

        newPatiantForm.set('ctType_isPanoramic', this.ctType_isPanoramic.current.checked);
        newPatiantForm.set('ctType_isStatus', this.ctType_isStatus.current.checked);
        newPatiantForm.set('ctType_isStatusParallel', this.ctType_isStatusParallel.current.checked);

        newPatiantForm.set('ortho_cephalometric_side', this.ortho_cephalometric_side.current.checked);
        newPatiantForm.set('ortho_computerized_tomography', this.ortho_computerized_tomography.current.checked);
        newPatiantForm.set('ortho_diagnostic_setup', this.ortho_diagnostic_setup.current.checked);
        newPatiantForm.set('orth_facial_type', this.orth_facial_type.current.checked);

        newPatiantForm.save().then(result => {

            var forms = new Forms(result);
            console.log(forms)
            // this.setState({recipes});
            this.openModal()

        },
            (error) => {
                // if (typeof document !== 'undefined') document.write(`Error while creating Recipe: ${JSON.stringify(error)}`);
                console.error('Error while creating Referral: ', error);
            })
        this.setState({ formDetailst: formDetailst })


    }

    toggleAllTeath() {
        if (this.allTeath.current.checked) {
            this.t28.current.checked = true
            this.t27.current.checked = true
            this.t26.current.checked = true
            this.t25.current.checked = true
            this.t24.current.checked = true
            this.t23.current.checked = true
            this.t22.current.checked = true
            this.t21.current.checked = true
            this.t38.current.checked = true
            this.t37.current.checked = true
            this.t36.current.checked = true
            this.t35.current.checked = true
            this.t34.current.checked = true
            this.t33.current.checked = true
            this.t32.current.checked = true
            this.t31.current.checked = true
            this.t11.current.checked = true
            this.t12.current.checked = true
            this.t13.current.checked = true
            this.t14.current.checked = true
            this.t15.current.checked = true
            this.t16.current.checked = true
            this.t17.current.checked = true
            this.t18.current.checked = true
            this.t41.current.checked = true
            this.t42.current.checked = true
            this.t43.current.checked = true
            this.t44.current.checked = true
            this.t45.current.checked = true
            this.t46.current.checked = true
            this.t47.current.checked = true
            this.t48.current.checked = true
        } else {
            this.t27.current.checked = false
            this.t28.current.checked = false
            this.t26.current.checked = false
            this.t25.current.checked = false
            this.t24.current.checked = false
            this.t23.current.checked = false
            this.t22.current.checked = false
            this.t21.current.checked = false
            this.t38.current.checked = false
            this.t37.current.checked = false
            this.t36.current.checked = false
            this.t35.current.checked = false
            this.t34.current.checked = false
            this.t33.current.checked = false
            this.t32.current.checked = false
            this.t31.current.checked = false
            this.t11.current.checked = false
            this.t12.current.checked = false
            this.t13.current.checked = false
            this.t14.current.checked = false
            this.t15.current.checked = false
            this.t16.current.checked = false
            this.t17.current.checked = false
            this.t18.current.checked = false
            this.t41.current.checked = false
            this.t42.current.checked = false
            this.t43.current.checked = false
            this.t44.current.checked = false
            this.t45.current.checked = false
            this.t46.current.checked = false
            this.t47.current.checked = false
            this.t48.current.checked = false
        }
    }

    moveStepUp() {


        const currentStep = this.state.currentStep + 1;
        this.setState({ currentStep: currentStep })
        console.log(this.state.currentStep)
    }

    moveStepDown() {
        const previosStep = this.state.currentStep - 1;
        this.setState({ currentStep: previosStep })
        // console.log(this.state.currentStep)
    }

    // componentDidUpdate(){
    //     if(this.state.currentStep===1){
    //     this.setState({ currentStep: this.state.currentStep++ })
    //     }
    // }

    // createPatiantForm() {
    //     this.props.createPatiantForm(this.lnameInput.current.value, this.fnameInput.current.value)
    //     this.closeModal()
    // }



    render() {
        // const { activeUser } = this.props;
        const { currentStep } = this.state;

        var step1, step2, step3, nextBtn, previosBtn, createFormBtn, sendFormBtn
        if (currentStep === 1) {
            step1 = "showStep bgcolor"
            step2 = "hideStep bgcolor"
            step3 = "hideStep bgcolor"
            // step4 = "hideStep bgcolor"
            nextBtn = "showStep buttonwidth"
            previosBtn = "hideStep "
            createFormBtn = "hideStep "
            sendFormBtn = "hideStep"


        } else if (currentStep === 2) {
            step1 = "hideStep bgcolor"
            step2 = "showStep bgcolor"
            step3 = "hideStep bgcolor"
            // step4 = "hideStep bgcolor"
            nextBtn = "showStep buttonwidth"
            previosBtn = "showStep buttonwidth"
            createFormBtn = "hideStep "
            sendFormBtn = "hideStep"


        } else if (currentStep === 3) {
            step1 = "hideStep bgcolor"
            step2 = "hideStep bgcolor"
            step3 = "showStep bgcolor"
            // step4 = "hideStep bgcolor"
            nextBtn = "hideStep "
            previosBtn = "showStep buttonwidth"
            createFormBtn = "showStep buttonwidth"
            sendFormBtn = "hideStep"
        }
        else if (currentStep === 4) {
            step1 = "hideStep bgcolor"
            step2 = "hideStep bgcolor"
            step3 = "hideStep bgcolor"
            // step4 = "showStep bgcolor"
        } else if (currentStep > 4) {
            step1 = "showStep bgcolor"
            step2 = "hideStep bgcolor"
            step3 = "hideStep bgcolor"
            // step4 = "hideStep bgcolor"
        }
        // console.log(forms)
        // const { redirectToHome } = this.state;

        // if (redirectToHome) {
        //     return <Redirect to="/" />
        // }



        return (
            <div className="container">

                <h4>
                    טופס מטופל
                </h4>


                <div className="patiantDetailsForm">

                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <span>+</span>

                                פרטי מטופל
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <div className="patiantDetails">
                                        <h4>פרטי המטופל</h4>
                                        <div>

                                            <Form className="basicFormStructure">
                                                <Row>
                                                    <Col>
                                                        <Form.Group className=".d-inline" controlId="formBasic">
                                                            <Form.Label>שם פרטי </Form.Label>
                                                            <Form.Control ref={this.fname} type="text" placeholder=" שדה חובה " />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col>
                                                        <Form.Group className=".d-inline" controlId="formBasic">
                                                            <Form.Label>שם משפחה </Form.Label>
                                                            <Form.Control ref={this.lname} type="text" placeholder=" שדה חובה" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col>
                                                        <Form.Group controlId="formBasic">
                                                            <Form.Label>ת.ז  </Form.Label>
                                                            <Form.Control ref={this.lname} type="text" placeholder=" שדה אופציונאלי" />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Group controlId="formBasic">
                                                            <Form.Label>טלפון נייד  </Form.Label>
                                                            <Form.Control ref={this.mobile} type="text" placeholder=" שדה חובה " />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col>
                                                        <Form.Group controlId="formBasicEmail">
                                                            <Form.Label>אימייל  </Form.Label>
                                                            <Form.Control ref={this.email} type="email" placeholder=" שדה אופציונאלי" />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </div>


                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                <span>+</span>
                                צילומי שיניים
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                <span>+</span>

                                אורתודנטיה
                                    </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                                <span>+</span>

                                צילומים פריאפיקליים
                                    </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="4">
                                <span>+</span>

                                CT
                                     </Accordion.Toggle>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="5">
                                <span>+</span>

                                הערות כלליות
                                  </Accordion.Toggle>
                            <Accordion.Collapse eventKey="5">
                                <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                </div>

                {/* <div className={step1}>
                    <h4>פרטי המטופל</h4>
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
                        </Form>
                    </div>


                </div>

                <div className={step2}>
                    <h4>  סוגי צילומי שיניים</h4>
                    <div>
                        <Form className="basicFormStructure">
                            <div key={`inline-checkbox`} className="mb-3 ctTypestep2">
                                <div>
                                    <Form.Check ref={this.ctType_isPanoramic} label="פנורמי" type="checkbox" id={`inline-checkbox-1`} />
                                    <Form.Check ref={this.ctType_isStatus} label="סטטוס" type="checkbox" id={`inline-checkbox-2`} />
                                    <Form.Check ref={this.ctType_isStatusParallel} label="סטטוס מקבילית" type="checkbox" id={`inline-checkbox-3`} />
                                </div>

                            </div>
                            <div>

                                <h4>    צילומי אורתודנטריה</h4>
                                <div>
                                    <Form.Check ref={this.ortho_cephalometric_side} label=" צפלומטרי צדדי" type="checkbox" id={`inline-checkbox-1`} />
                                    <Form.Check ref={this.ortho_computerized_tomography} label="שרטוט ואנליזה ממוחשבת" type="checkbox" id={`inline-checkbox-2`} />
                                    <Form.Check ref={this.ortho_diagnostic_setup} label=" מטבעי לימוד אבחנתיים" type="checkbox" id={`inline-checkbox-3`} />
                                    <Form.Check ref={this.orth_facial_type} label=" תמונות פנים ושיניים  " type="checkbox" id={`inline-checkbox-3`} />
                                </div>
                            </div>
                        </Form>
                    </div>

                </div>


                <div className={step3}>
                    <h4>פרפיקלי </h4>
                    <div className="">
                        <input ref={this.allTeath} onChange={this.toggleAllTeath} type="checkbox"></input>
                        <lable>בחר את כל השיניים</lable>
                    </div>
                    <div className="allTeathSelection" >

                        <div className="leftSide">
                            <div className="displayFlex">
                                <div className="alignTeathNum">
                                    <input ref={this.t28} type="checkbox"></input>
                                    <lable>28</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t27} type="checkbox"></input>
                                    <lable>27</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t26} type="checkbox"></input>
                                    <lable>26</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t25} type="checkbox"></input>
                                    <lable>25</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t24} type="checkbox"></input>
                                    <lable>24</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t23} type="checkbox"></input>
                                    <lable>23</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t22} type="checkbox"></input>
                                    <lable>22</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t21} type="checkbox"></input>
                                    <lable>21</lable>
                                </div>

                            </div>

                            <div className="displayFlex">
                                <div className="alignTeathNum">
                                    <input ref={this.t38} type="checkbox"></input>
                                    <lable>38</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t37} type="checkbox"></input>
                                    <lable>37</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t36} type="checkbox"></input>
                                    <lable>36</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t35} type="checkbox"></input>
                                    <lable>35</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t34} type="checkbox"></input>
                                    <lable>34</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t33} type="checkbox"></input>
                                    <lable>33</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t32} type="checkbox"></input>
                                    <lable>32</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t31} type="checkbox"></input>
                                    <lable>31</lable>
                                </div>
                            </div>
                        </div>
                        <div className="rightSide">
                            <div className="displayFlex">
                                <div className="alignTeathNum">
                                    <input ref={this.t11} type="checkbox"></input>
                                    <lable>11</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t12} type="checkbox"></input>
                                    <lable>12</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t13} type="checkbox"></input>
                                    <lable>13</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t14} type="checkbox"></input>
                                    <lable>14</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t15} type="checkbox"></input>
                                    <lable>15</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t16} type="checkbox"></input>
                                    <lable>16</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t17} type="checkbox"></input>
                                    <lable>17</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t18} type="checkbox"></input>
                                    <lable>18</lable>
                                </div>
                            </div>
                            <div className="displayFlex">
                                <div className="alignTeathNum">
                                    <input ref={this.t41} type="checkbox"></input>
                                    <lable>41</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t42} type="checkbox"></input>
                                    <lable>42</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t43} type="checkbox"></input>
                                    <lable>43</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t44} type="checkbox"></input>
                                    <lable>44</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t45} type="checkbox"></input>
                                    <lable>45</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t46} type="checkbox"></input>
                                    <lable>46</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t47} type="checkbox"></input>
                                    <lable>47</lable>
                                </div>
                                <div className="alignTeathNum">
                                    <input ref={this.t48} type="checkbox"></input>
                                    <lable>48</lable>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6>   מטרת ההדמייה </h6>

                        <Form.Check ref={this.ct_implant} label="השתלה" type="checkbox" id={`inline-checkbox-1`} />
                        <Form.Check ref={this.ct_trap_tooth} label="  שן כלואה" type="checkbox" id={`inline-checkbox-1`} />
                        <Form.Check ref={this.ct_endo} label="  אנדו" type="checkbox" id={`inline-checkbox-1`} />
                        <Form.Check ref={this.ct_other} label="  אחר" type="text" id={`inline-checkbox-1`} />
                    </div>

                </div>
                <div>
                    <Button className={previosBtn} onClick={this.moveStepDown} variant="primary" type="button">
                        הקודם
                    </Button>
                    <Button className={nextBtn} onClick={this.moveStepUp} variant="primary" type="button">
                        הבא
                    </Button>
                    <Button className={createFormBtn} onClick={this.createForm} variant="primary" type="button">
                        צור טופס
                    </Button>
                    <Button className={sendFormBtn} onClick={this.sendForm} variant="primary" type="button">
                        שלח טופס
                    </Button>
                </div> */}

                <Modal show={this.state.showModal} onHide={this.closeModal} size="md">

                    <Modal.Body className="text-center">
                        <h3>
                            טופס חדש נוצר, המטופל ודנטלפורם קיבלו העתק למייל!                        </h3>
                        <Image src={emailsuccess} rounded />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            סגור
                        </Button>

                    </Modal.Footer>

                </Modal>



                {/* 
                <div className={step4}>
                    <h4> 2פרטי המטופל</h4>
                    <Form.Group controlId="formBasic">
                        <Form.Label>שם פרטי </Form.Label>
                        <Form.Control type="text" placeholtextder=" שם פרטי" />
                    </Form.Group>
                    <Form.Group controlId="formBasic">
                        <Form.Label>שם משפחה </Form.Label>
                        <Form.Control type="text" placeholtextder=" שם משפחה" />
                    </Form.Group>
                    <Form.Group controlId="formBasic">
                        <Form.Label>נייד </Form.Label>
                        <Form.Control type="text" placeholtextder=" נייד " />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>אימייל  </Form.Label>
                        <Form.Control type="email" placeholtextder=" אימייל" />
                    </Form.Group>
                    <Button onClick={this.moveStepDown} variant="primary" type="button">
                        הקודם
                    </Button>
                    <Button onClick={this.moveStepUp} variant="primary" type="button">
                        הבא
                    </Button>
                </div> */}
            </div >
        );
    }
}

export default PatiantForm;