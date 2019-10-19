import React from 'react';
import './landingPage.css';
import { Image, Carousel, CardDeck, Card, CardGroup, Nav, Navbar, Form, Button } from 'react-bootstrap';
import capturecard1 from './icon1-eye.png';
import capturecard2 from './capture2.PNG';
import capturecarossel1 from './landingpage-carossel1.jpg'
import capturecarossel2 from './landingpage-carossel2.jpg'
import capturecarossel3 from './landingpage-carossel3.jpg'
// import Footer_fb_icon from './footer_fb_icon.jpg'






class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {

        // }
    }


    render() {


        return (
            <div>
                <div id="landingPage-main-container">
                    <Navbar bg="primary" variant="dark">
                        <Navbar.Brand href="/">דנטלפורם</Navbar.Brand>
                        <Nav className="mr-auto">
                            {/* <Nav.Link href="#about">אודות</Nav.Link> */}
                            <Nav.Link href="#Login">הכנס</Nav.Link>
                        </Nav>
                    </Navbar>
                    <div className="container" id="landingPage-container-1">
                        <div id="landingPage-leads-form">
                            <Form id="form-container" className="container">

                                <Form.Text className="">
                                    <h2 id="landingpage-header">דנטלפורם - מערכת ניהול תורים </h2>
                                    מלא/י את פרטיך כאן וניצור עמך קשר בהקדם
                            </Form.Text>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="text" placeholder="שם פרטי" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="text" placeholder="שם משפחה" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Jhone.d@gmail.com" />
                                    <Form.Text className="text-muted">
                                        פרטיך האישיים לא ישותפו
                                 </Form.Text>
                                </Form.Group>

                                <Button variant="primary" type="submit">
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
                    {/* </div> */}
                {/* </Card.Footer> */} 
                
                {/* <a href="https://www.freepik.com/free-photos-vectors/logo">Logo vector created by freepik - www.freepik.com</a> */}
            </div>

        );
    }
}


export default LandingPage;
