//@nd
// // EmployeeDetails.jsx

import React, { useState, useEffect, Fragment } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import ProductCard from './TableReusibilty';
import './form.css';

const EmployeeDetails = () => {
    const [employees, setEmployees] = useState([]);
    const [showProductDetails, setShowProductDetails] = useState(false);
    const [showEmployeeDetails, setShowEmployeeDetails] = useState(true);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        setEmployeeData({
            FirstName: '',
            LastName: '',
            Email: '',
            Salary: '',
            PhoneNumber: '',
        });
    };

    const [employeeData, setEmployeeData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Salary: '',
        PhoneNumber: '',
    });

    const [editEmployeeData, setEditEmployeeData] = useState({
        EmpId: '',
        FirstName: '',
        LastName: '',
        Email: '',
        Salary: '',
        PhoneNumber: '',
    });

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await axios.get('https://localhost:7020/api/Employee');
            setEmployees(response.data.result);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = (employee) => {
        setEditEmployeeData({
            EmpId: employee.empId,
            FirstName: employee.firstName,
            LastName: employee.lastName,
            Email: employee.email,
            Salary: employee.salary,
            PhoneNumber: employee.phoneNumber,
        });
        handleShow();
    };

    const handleSaveChanges = async () => {
        try {
            const response = await axios.put(
                `https://localhost:7020/api/Employee?id=${editEmployeeData.EmpId}`,
                editEmployeeData
            );
            getData();
            handleClose();
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (employee) => {
        if (window.confirm('Are you sure you want to delete this employee?')) {
            try {
                const response = await axios.delete(
                    `https://localhost:7020/api/Employee/${employee.empId}`
                );
                getData();
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div>
            <Fragment>
                <Button
                    variant="secondary"
                    style={{ marginRight: '10px' }}
                    onClick={() => {
                        setShowProductDetails(true);
                        setShowEmployeeDetails(false);
                    }}
                >
                    Product
                </Button>
                <Button
                    variant="secondary"
                    onClick={() => {
                        setShowEmployeeDetails(true);
                        setShowProductDetails(false);
                    }}
                >
                    Employee
                </Button>

                {showEmployeeDetails && (
                    <Fragment>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Emp Id</th>
                                    <th>FirstName</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Salary</th>
                                    <th>PhoneNumber</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees && employees.length > 0 ? (
                                    employees.map((employee, index) => (
                                        <tr key={employee.empId}>
                                            <td>{employee.empId}</td>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.salary}</td>
                                            <td>{employee.phoneNumber}</td>
                                            <td colSpan={2}>
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={() => handleUpdate(employee)}
                                                >
                                                    Update
                                                </button>
                                                &nbsp;
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => handleDelete(employee)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7">Loading...</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modify / Update Employee</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col>
                                        <input
                                            type="text"
                                            name="FirstName"
                                            className="form-control"
                                            placeholder="Enter First Name"
                                            value={editEmployeeData.FirstName}
                                            onChange={(e) =>
                                                setEditEmployeeData({
                                                    ...editEmployeeData,
                                                    FirstName: e.target.value,
                                                })
                                            }
                                        />
                                    </Col>
                                    <Col>
                                        <input
                                            type="text"
                                            name="LastName"
                                            className="form-control"
                                            placeholder="Enter Last Name"
                                            value={editEmployeeData.LastName}
                                            onChange={(e) =>
                                                setEditEmployeeData({
                                                    ...editEmployeeData,
                                                    LastName: e.target.value,
                                                })
                                            }
                                        />
                                    </Col>
                                    <Col>
                                        <input
                                            type="text"
                                            name="Email"
                                            className="form-control"
                                            placeholder="Enter Email Address"
                                            value={editEmployeeData.Email}
                                            onChange={(e) =>
                                                setEditEmployeeData({
                                                    ...editEmployeeData,
                                                    Email: e.target.value,
                                                })
                                            }
                                        />
                                    </Col>
                                    <Col>
                                        <input
                                            type="number"
                                            name="Salary"
                                            className="form-control"
                                            placeholder="Enter Salary"
                                            value={editEmployeeData.Salary}
                                            onChange={(e) =>
                                                setEditEmployeeData({
                                                    ...editEmployeeData,
                                                    Salary: e.target.value,
                                                })
                                            }
                                        />
                                    </Col>
                                    <Col>
                                        <input
                                            type="number"
                                            name="PhoneNumber"
                                            className="form-control"
                                            placeholder="Enter Phone Number"
                                            value={editEmployeeData.PhoneNumber}
                                            onChange={(e) =>
                                                setEditEmployeeData({
                                                    ...editEmployeeData,
                                                    PhoneNumber: e.target.value,
                                                })
                                            }
                                        />
                                    </Col>
                                </Row>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleSaveChanges}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Fragment>
                )}

                {showProductDetails && <ProductCard apiEndpoint="https://fakestoreapi.com/products" isEmployeeData={false} />}
            </Fragment>
        </div>
    );
};

export default EmployeeDetails;





// import React, { useState, useEffect, Fragment } from 'react';
// import Table from 'react-bootstrap/Table';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import axios from 'axios';
// import './All.css';
// import './form.css';
// import ProductDetails from './Product.Details';

// const EmployeeDetails = () => {
//     const [employees, setEmployees] = useState([]);
//     const [showProductDetails, setShowProductDetails] = useState(false);
//     const [showEmployeeDetails, setShowEmployeeDetails] = useState(true);

//     const [show, setShow] = useState(false);
//     const handleShow = () => setShow(true);
//     const handleClose = () => {
//         setShow(false);
//         setEmployeeData({
//             FirstName: '',
//             LastName: '',
//             Email: '',
//             Salary: '',
//             PhoneNumber: '',
//         });
//     };

//     const [employeeData, setEmployeeData] = useState({
//         FirstName: '',
//         LastName: '',
//         Email: '',
//         Salary: '',
//         PhoneNumber: '',
//     });

//     const [editEmployeeData, setEditEmployeeData] = useState({
//         EmpId: '',
//         FirstName: '',
//         LastName: '',
//         Email: '',
//         Salary: '',
//         PhoneNumber: '',
//     });

//     useEffect(() => {
//         getData();
//     }, []);

//     const getData = async () => {
//         try {
//             const response = await axios.get('https://localhost:7020/api/Employee');
//             setEmployees(response.data.result);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const handleUpdate = (employee) => {
//         setEditEmployeeData({
//             EmpId: employee.empId,
//             FirstName: employee.firstName,
//             LastName: employee.lastName,
//             Email: employee.email,
//             Salary: employee.salary,
//             PhoneNumber: employee.phoneNumber,
//         });
//         handleShow();
//     };

//     const handleSaveChanges = async () => {
//         try {
//             const response = await axios.put(
//                 `https://localhost:7020/api/Employee?id=${editEmployeeData.EmpId}`,
//                 editEmployeeData
//             );
//             getData();
//             handleClose();
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const handleDelete = async (employee) => {
//         if (window.confirm('Are you sure you want to delete this employee?')) {
//             try {
//                 const response = await axios.delete(
//                     `https://localhost:7020/api/Employee/${employee.empId}`
//                 );
//                 getData();
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     };

//     return (
//         <div>
//             <Fragment>
//                 <Button
//                     variant="secondary"
//                     style={{ marginRight: '10px' }}
//                     onClick={() => {
//                         setShowProductDetails(true);
//                         setShowEmployeeDetails(false);
//                     }}
//                 >
//                     Show Product Details
//                 </Button>
//                 <Button
//                     variant="secondary"
//                     onClick={() => {
//                         setShowEmployeeDetails(true);
//                         setShowProductDetails(false);
//                     }}
//                 >
//                     Show Employee Details
//                 </Button>

//                 {showEmployeeDetails && (
//                     <Fragment>
//                         <Table striped bordered hover>
//                             <thead>
//                                 <tr>
//                                     <th>Emp Id</th>
//                                     <th>FirstName</th>
//                                     <th>Last Name</th>
//                                     <th>Email</th>
//                                     <th>Salary</th>
//                                     <th>PhoneNumber</th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {employees && employees.length > 0 ? (
//                                     employees.map((employee, index) => (
//                                         <tr key={employee.empId}>
//                                             <td>{employee.empId}</td>
//                                             <td>{employee.firstName}</td>
//                                             <td>{employee.lastName}</td>
//                                             <td>{employee.email}</td>
//                                             <td>{employee.salary}</td>
//                                             <td>{employee.phoneNumber}</td>
//                                             <td colSpan={2}>
//                                                 <button
//                                                     className="btn btn-primary"
//                                                     onClick={() => handleUpdate(employee)}
//                                                 >
//                                                     Update
//                                                 </button>
//                                                 &nbsp;
//                                                 <button
//                                                     className="btn btn-danger"
//                                                     onClick={() => handleDelete(employee)}
//                                                 >
//                                                     Delete
//                                                 </button>
//                                             </td>
//                                         </tr>
//                                     ))
//                                 ) : (
//                                     <tr>
//                                         <td colSpan="7">Loading...</td>
//                                     </tr>
//                                 )}
//                             </tbody>
//                         </Table>
//                         <Modal show={show} onHide={handleClose}>
//                             <Modal.Header closeButton>
//                                 <Modal.Title>Modify / Update Employee</Modal.Title>
//                             </Modal.Header>
//                             <Modal.Body>
//                                 <Row>
//                                     <Col>
//                                         <input
//                                             type="text"
//                                             name="FirstName"
//                                             className="form-control"
//                                             placeholder="Enter First Name"
//                                             value={editEmployeeData.FirstName}
//                                             onChange={(e) =>
//                                                 setEditEmployeeData({
//                                                     ...editEmployeeData,
//                                                     FirstName: e.target.value,
//                                                 })
//                                             }
//                                         />
//                                     </Col>
//                                     <Col>
//                                         <input
//                                             type="text"
//                                             name="LastName"
//                                             className="form-control"
//                                             placeholder="Enter Last Name"
//                                             value={editEmployeeData.LastName}
//                                             onChange={(e) =>
//                                                 setEditEmployeeData({
//                                                     ...editEmployeeData,
//                                                     LastName: e.target.value,
//                                                 })
//                                             }
//                                         />
//                                     </Col>
//                                     <Col>
//                                         <input
//                                             type="text"
//                                             name="Email"
//                                             className="form-control"
//                                             placeholder="Enter Email Address"
//                                             value={editEmployeeData.Email}
//                                             onChange={(e) =>
//                                                 setEditEmployeeData({
//                                                     ...editEmployeeData,
//                                                     Email: e.target.value,
//                                                 })
//                                             }
//                                         />
//                                     </Col>
//                                     <Col>
//                                         <input
//                                             type="number"
//                                             name="Salary"
//                                             className="form-control"
//                                             placeholder="Enter Salary"
//                                             value={editEmployeeData.Salary}
//                                             onChange={(e) =>
//                                                 setEditEmployeeData({
//                                                     ...editEmployeeData,
//                                                     Salary: e.target.value,
//                                                 })
//                                             }
//                                         />
//                                     </Col>
//                                     <Col>
//                                         <input
//                                             type="number"
//                                             name="PhoneNumber"
//                                             className="form-control"
//                                             placeholder="Enter Phone Number"
//                                             value={editEmployeeData.PhoneNumber}
//                                             onChange={(e) =>
//                                                 setEditEmployeeData({
//                                                     ...editEmployeeData,
//                                                     PhoneNumber: e.target.value,
//                                                 })
//                                             }
//                                         />
//                                     </Col>
//                                 </Row>
//                             </Modal.Body>
//                             <Modal.Footer>
//                                 <Button variant="secondary" onClick={handleClose}>
//                                     Close
//                                 </Button>
//                                 <Button variant="primary" onClick={handleSaveChanges}>
//                                     Save Changes
//                                 </Button>
//                             </Modal.Footer>
//                         </Modal>
//                     </Fragment>
//                 )}

//                 {showProductDetails && <ProductDetails />}
//             </Fragment>
//         </div>
//     );
// }

// export default EmployeeDetails;








