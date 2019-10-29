import React from 'react'
import './patiantForm.css'
import { Redirect } from 'react-router-dom'
import { Row, Col, Button, Modal, Form, FormControl, InputGroup, Table, Card, Accordion } from 'react-bootstrap';


class PatiantForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToHome: false,
            moveStepUp: 0,
            moveStepDown: 0,
            currentStep: 1

        }
        this.moveStepUp = this.moveStepUp.bind(this);
        this.moveStepDown = this.moveStepDown.bind(this);
        this.toggleAllTeath = this.toggleAllTeath.bind(this)
        this.createForm = this.createForm.bind(this)
        this.createForm = this.createForm.bind(this)

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
    }


    createForm() {

        console.log("test")
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
        const { activeUser } = this.props;
        const { currentStep } = this.state;

        var step1, step2, step3, step4, nextBtn, previosBtn, createFormBtn, sendFormBtn
        if (currentStep == 1) {
            step1 = "showStep bgcolor"
            step2 = "hideStep bgcolor"
            step3 = "hideStep bgcolor"
            step4 = "hideStep bgcolor"
            nextBtn = "showStep buttonwidth"
            previosBtn = "hideStep "
            createFormBtn = "hideStep "
            sendFormBtn = "hideStep"


        } else if (currentStep == 2) {
            step1 = "hideStep bgcolor"
            step2 = "showStep bgcolor"
            step3 = "hideStep bgcolor"
            step4 = "hideStep bgcolor"
            nextBtn = "showStep buttonwidth"
            previosBtn = "showStep buttonwidth"
            createFormBtn = "hideStep "
            sendFormBtn = "hideStep"


        } else if (currentStep == 3) {
            step1 = "hideStep bgcolor"
            step2 = "hideStep bgcolor"
            step3 = "showStep bgcolor"
            step4 = "hideStep bgcolor"
            nextBtn = "hideStep "
            previosBtn = "showStep buttonwidth"
            createFormBtn = "showStep buttonwidth"
            sendFormBtn = "hideStep"
        }
        else if (currentStep == 4) {
            step1 = "hideStep bgcolor"
            step2 = "hideStep bgcolor"
            step3 = "hideStep bgcolor"
            step4 = "showStep bgcolor"
        } else if (currentStep > 4) {
            step1 = "showStep bgcolor"
            step2 = "hideStep bgcolor"
            step3 = "hideStep bgcolor"
            step4 = "hideStep bgcolor"
        }
        // console.log(forms)
        // const { redirectToHome } = this.state;

        // if (redirectToHome) {
        //     return <Redirect to="/" />
        // }



        return (
            <div className="container">

                <div className={step1}>
                    <h3>פרטי המטופל</h3>
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
                    <h3>  סוגי צילומי שיניים</h3>
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

                                <h3>    צילומי אורתודנטריה</h3>
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
                    <h3>פרפיקלי </h3>
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
                </div>
                {/* 
                <div className={step4}>
                    <h3> 2פרטי המטופל</h3>
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