
//New
import React, { useState, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeForm = () => {
    const navigate = useNavigate();

    const [employeeData, setEmployeeData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Salary: '',
        PhoneNumber: '',
    });

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setEmployeeData({
            ...employeeData,
            [name]: value,
        });
    };
    const getData = async () => {
        try {
            const response = await axios.get('https://localhost:7020/api/Employee');
            setEmployees(response.data.result);
        } catch (error) {
            console.log(error);
        }
    };

    const handleFormSubmit = async () => {
        try {
            const response = await axios.post('https://localhost:7020/api/Employee', employeeData);
            getData();
            toast.success('Employee added successfully');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Fragment>
                <Container>
                    <div className="employee-form">
                        <h2 className="heading">GL Employee Form</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="FirstName">First Name:</label>
                                <input
                                    type="text"
                                    name="FirstName"
                                    className="form-control"
                                    placeholder="Enter First Name"
                                    value={employeeData.FirstName}
                                    onChange={handleFormChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="LastName">Last Name:</label>
                                <input
                                    type="text"
                                    name="LastName"
                                    className="form-control"
                                    placeholder="Enter Last Name"
                                    value={employeeData.LastName}
                                    onChange={handleFormChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="Email">Email:</label>
                                <input
                                    type="text"
                                    name="Email"
                                    className="form-control"
                                    placeholder="Enter Email Address"
                                    value={employeeData.Email}
                                    onChange={handleFormChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="Salary">Salary:</label>
                                <input
                                    type="number"
                                    name="Salary"
                                    className="form-control"
                                    placeholder="Enter Salary"
                                    value={employeeData.Salary}
                                    onChange={handleFormChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="PhoneNumber">Phone Number:</label>
                                <input
                                    type="number"
                                    name="PhoneNumber"
                                    className="form-control"
                                    placeholder="Enter Phone Number"
                                    value={employeeData.PhoneNumber}
                                    onChange={handleFormChange}
                                />
                            </div>

                            <Button className="btn btn-primary" onClick={handleFormSubmit}>
                                Submit
                            </Button>
                        </form>
                    </div>
                </Container>
            </Fragment>
            <ToastContainer autoClose={3000} />
        </div>
    );
}

export default EmployeeForm;

//Old
// import React, { useState, useEffect, Fragment } from 'react';
// import Container from 'react-bootstrap/Container';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import './All.css';
// import './form.css';

// const EmployeeForm = () => {
//     const [employeeData, setEmployeeData] = useState({
//         FirstName: '',
//         LastName: '',
//         Email: '',
//         Salary: '',
//         PhoneNumber: '',
//     });

//     const getData = async () => {
//         try {
//             const response = await axios.get('https://localhost:7020/api/Employee');
//             //console.log(response.data.result);
//             setEmployees(response.data.result);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         getData();
//     }, []);


//     const handleFormChange = (event) => {
//         const { name, value } = event.target;
//         setEmployeeData({
//             ...employeeData,
//             [name]: value,
//         });
//     };


//     const handleFormSubmit = async () => {
//         try {
//             const response = await axios.post('https://localhost:7020/api/Employee', employeeData);
//             getData();
//             window.location.reload();
//             //handleClose();
//         } catch (error) {
//             console.log(error);
//         }
//     };


//     return (
//         <div>
//             <Fragment>
//                 <Container>
//                     <div className='employee-form'>
//                         <h2 className='heading'>GL Employee-Form</h2>
//                         <form>
//                             <div className="form-group">
//                                 <label htmlFor="FirstName">First Name:</label>
//                                 <input
//                                     type="text"
//                                     name="FirstName"
//                                     className="form-control"
//                                     placeholder="Enter First Name"
//                                     value={employeeData.FirstName}
//                                     onChange={handleFormChange}
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="LastName">Last Name:</label>
//                                 <input
//                                     type="text"
//                                     name="LastName"
//                                     className="form-control"
//                                     placeholder="Enter Last Name"
//                                     value={employeeData.LastName}
//                                     onChange={handleFormChange}
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="Email">Email:</label>
//                                 <input
//                                     type="text"
//                                     name="Email"
//                                     className="form-control"
//                                     placeholder="Enter Email Address"
//                                     value={employeeData.Email}
//                                     onChange={handleFormChange}
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="Salary">Salary:</label>
//                                 <input
//                                     type="number"
//                                     name="Salary"
//                                     className="form-control"
//                                     placeholder="Enter Salary"
//                                     value={employeeData.Salary}
//                                     onChange={handleFormChange}
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="PhoneNumber">Phone Number:</label>
//                                 <input
//                                     type="number"
//                                     name="PhoneNumber"
//                                     className="form-control"
//                                     placeholder="Enter Phone Number"
//                                     value={employeeData.PhoneNumber}
//                                     onChange={handleFormChange}
//                                 />
//                             </div>

//                             <Button className="btn btn-primary" onClick={handleFormSubmit}>
//                                 Submit
//                             </Button>
//                         </form>
//                     </div>

//                 </Container>
//             </Fragment>
//         </div>
//     );
// }

// export default EmployeeForm
