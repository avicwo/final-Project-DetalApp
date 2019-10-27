import React from 'react';
import './landingPage.css';
import { Carousel, CardDeck, Card, CardGroup, Form, Button } from 'react-bootstrap';
import capturecard1 from '../../images/icon1-eye.png';
import capturecard2 from '../../images/capture2.PNG';
import capturecarossel1 from '../../images/landingpage-carossel1.jpg';
import capturecarossel2 from '../../images/landingpage-carossel2.jpg';
import capturecarossel3 from '../../images/landingpage-carossel3.jpg';
import MyNavbar from '../../components/myNavbar';
import Parse from 'parse';
import Leads from '../../data-model/Leads';


class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newreferral: [],
            newMdLead: {}
        }
        this.createLead = this.createLead.bind(this)
        // this.preventDefault=this.preventDefault.bind(this)

        this.lnameInput = React.createRef();
        this.fnameInput = React.createRef();
        this.emailInput = React.createRef();
    }

    createLead() {

        const LeadsRow = Parse.Object.extend('Leads');
        const newMdLead = new LeadsRow();

        newMdLead.set('userId', Parse.User.current());
        newMdLead.set('fname', this.fnameInput.current.value);
        newMdLead.set('lname', this.lnameInput.current.value);
        newMdLead.set('email', this.emailInput.current.value);

        newMdLead.save().then(result => {

            var leads = new Leads(result);
            console.log(leads)
            // this.setState({recipes});

        },
            (error) => {
                // if (typeof document !== 'undefined') document.write(`Error while creating Recipe: ${JSON.stringify(error)}`);
                console.error('Error while creating Referral: ', error);
            })
        this.fnameInput.current.value = ""
        this.lnameInput.current.value = ""
        this.emailInput.current.value = ""

    }
    // preventDefault(e) {
    //     e.preventDefault()
    // }



    render() {


        return (
            <div>
                <div id="landingPage-main-container">
                    <MyNavbar />

                    <div className="container" id="landingPage-container-1">
                        <div id="landingPage-leads-form">
                            <Form id="form-container" className="container">

                                <Form.Text className="">
                                    <h2 id="landingpage-header">דנטלפורם - מערכת ניהול תורים </h2>
                                    מלא/י את פרטיך כאן וניצור עמך קשר בהקדם
                            </Form.Text>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control ref={this.fnameInput} type="text" placeholder="שם פרטי" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control ref={this.lnameInput} type="text" placeholder="שם משפחה" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control ref={this.emailInput} type="email" placeholder="Jhone.d@gmail.com" />
                                    <Form.Text className="text-muted">
                                        פרטיך האישיים לא ישותפו
                                 </Form.Text>
                                </Form.Group>

                                <Button onClick={this.createLead} variant="primary" type="button">
                                    שלח
                            </Button>
                            </Form>
                        </div>


                    </div>

                </div>

                <div className="container">
                    <CardDeck className="landingpage-card-topmargin">
                        <Card id="landingpage-card-noborder">
                            <Card.Img id="landingpage-img-round" variant="top" src={capturecard2} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card id="landingpage-card-noborder">
                            <Card.Img id="landingpage-img-round" variant="top" src={capturecard1} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card id="landingpage-card-noborder">
                            <Card.Img id="landingpage-img-round" variant="top" src={capturecard2} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </CardDeck>
                </div>
                <div className="container">
                    <CardGroup className="landingpage-card-topmargin">
                        <Card className="landingpage-card1 landingpage-margin">
                            <Card.Body>
                                <Card.Title>שעות פתיחה</Card.Title>
                                <Card.Text>
                                    ראשון -חמישי 08:00-17:00
                               </Card.Text>
                            </Card.Body>
                            {/* <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer> */}
                        </Card>
                        <Card className="landingpage-card2 landingpage-margin">
                            <Card.Body>
                                <Card.Title>צור קשר</Card.Title>
                                <Card.Text>
                                    אימייל:
                                       <br />
                                    dental@dental.com
                                    <br />
                                    טלפון
                                       <br />
                                    03-5591655
                                       </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className="landingpage-card3 landingpage-margin">
                            <Card.Body>
                                <Card.Title>היכן אנחנו נמצאים?</Card.Title>
                                <Card.Text>


                                </Card.Text>
                            </Card.Body>
                            {/* <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer> */}
                        </Card>

                    </CardGroup>
                </div>
                <div>
                    <Carousel className="landingpage-card-topmargin">
                        <Carousel.Item>
                            <img
                                className="d-block w-100 hight-70p"
                                src={capturecarossel1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 hight-70p"
                                src={capturecarossel2}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 hight-70p"
                                src={capturecarossel3}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>


                {/* <Card.Footer>

                    <div class="footer-copyright text-center py-3"> 2018 Copyright:
                        <a href="/"> panolight.co.il</a> <br />

                        <a href="https://www.facebook.com/pg/%D7%A4%D7%A0%D7%95%D7%9C%D7%99%D7%99%D7%98-%D7%9E%D7%9B%D7%95%D7%9F-%D7%A1%D7%99%D7%98%D7%99-%D7%95%D7%A6%D7%99%D7%9C%D7%95%D7%9E%D7%99-%D7%A9%D7%99%D7%A0%D7%99%D7%99%D7%9D-126083527415409/posts/?ref=page_internal">
                        ©Facebook
                        </a>
                        {/* Comment  adding an FB icon */}
        {/* </div> */ }
        {/* </Card.Footer> */ }

        {/* <a href="https://www.freepik.com/free-photos-vectors/logo">Logo vector created by freepik - www.freepik.com</a> */ }
            </div >

        );
    }
}


export default LandingPage;
