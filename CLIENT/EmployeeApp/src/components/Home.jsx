import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='navbar-above'>
                <nav className='navbar'>
                    <ul>
                        <li>
                            <Link to="/gl-employee-form">
                                <i className="fas fa-user-plus"></i> Add Employee
                            </Link>
                        </li>
                        <li>
                            <Link to="/employee-details">
                                <i className="fas fa-list"></i> Employee Details
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Container>
                <Row>
                    <Col>
                        <Card className='card'>
                            <Card.Img variant="top" src="https://cdn3.vectorstock.com/i/1000x1000/51/27/business-woman-standing-cartoon-employee-vector-15325127.jpg" alt="Image 1"
                                style={{ width: '180px', height: '340px' }}
                            />
                            <Card.Body>
                                <Card.Title>Employee Details</Card.Title>
                                <Card.Text>Name : Shanu Kumar</Card.Text>
                                <Card.Text>Email : shanu.kumar@globallogic.com</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card'>
                            <Card.Img variant="top" src="https://cdn3.vectorstock.com/i/1000x1000/51/27/business-woman-standing-cartoon-employee-vector-15325127.jpg" alt="Image 2"
                                style={{ width: '180px', height: '340px' }}
                            />
                            <Card.Body>
                                <Card.Title>Employee Details</Card.Title>
                                <Card.Text>Name : ChiragRaju S</Card.Text>
                                <Card.Text>Email : chiragraju@globallogic.com</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card'>
                            <Card.Img variant="top" src="https://cdn3.vectorstock.com/i/1000x1000/51/27/business-woman-standing-cartoon-employee-vector-15325127.jpg" alt="Image 2"
                                style={{ width: '180px', height: '340px' }}
                            />
                            <Card.Body>
                                <Card.Title>Employee Details</Card.Title>
                                <Card.Text>Name : Siddhant Kashyap</Card.Text>
                                <Card.Text>Email : siddhant@globallogic.com</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card'>
                            <Card.Img variant="top" src="https://cdn3.vectorstock.com/i/1000x1000/51/27/business-woman-standing-cartoon-employee-vector-15325127.jpg" alt="Image 2"
                                style={{ width: '180px', height: '340px' }}
                            />
                            <Card.Body>
                                <Card.Title>Employee Details</Card.Title>
                                <Card.Text>Name : Aditya Singh</Card.Text>
                                <Card.Text>Email : Aditya@globallogic.com</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div>
                <h2>About Our Website</h2>
                <p>Your website description goes here. Provide information about your website and its purpose.</p>
            </div>

            {/* Footer */}
            <footer className='footer'>
                <p>&copy; 2023 GlobalLogic, A Hitachi Group Company</p>
            </footer>
        </div>
    );
}

export default Home;






// import React from 'react'
// import { Card, Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom'

// const Home = () => {
//     return (
//         <div>
//             <div>
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="/gl-employee-form">Add Employee</Link>
//                         </li>
//                         <li>
//                             <Link to="/employee-details">Employee Details</Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//             <Container>
//                 <Row>
//                     <Col>
//                         <Card>
//                             <Card.Img variant="top" src="image1.jpg" alt="Image 1" />
//                             <Card.Body>
//                                 <Card.Title>Card Title 1</Card.Title>
//                                 <Card.Text>
//                                     Description for card 1 goes here.
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col>
//                         <Card>
//                             <Card.Img variant="top" src="image2.jpg" alt="Image 2" />
//                             <Card.Body>
//                                 <Card.Title>Card Title 2</Card.Title>
//                                 <Card.Text>
//                                     Description for card 2 goes here.
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>
//             <div>
//                 <h2>About Our Website</h2>
//                 <p>
//                     Your website description goes here. Provide information about your website and its purpose.
//                 </p>
//             </div>

//             {/* Footer */}
//             <footer>
//                 <p>&copy; 2023 Your Company Name</p>
//             </footer>


//         </div>
//     )
// }

// export default Home
