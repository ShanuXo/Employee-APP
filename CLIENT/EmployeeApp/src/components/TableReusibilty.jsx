import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const ProductCard = ({ apiEndpoint, isEmployeeData }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiEndpoint);
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [apiEndpoint]);

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>

                        {isEmployeeData ? (
                            <>
                                <th>EmpId</th>
                                <th>FirstName</th>
                                <th>LatName</th>
                                <th>Email</th>
                                <th>Salary</th>
                                <th>PhoneNumber</th>
                            </>
                        ) : (
                            <>
                                <th>Id</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Description</th>
                            </>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <tr key={index}>
                                {isEmployeeData ? (
                                    <>
                                        <td>{item.empId}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.salary}</td>
                                        <td>{item.phoneNumber}</td>
                                    </>
                                ) : (
                                    <>
                                        <td>{item.id}</td>
                                        <td>{item.price}</td>
                                        <td>{item.category}</td>
                                        <td>{item.description}</td>
                                    </>
                                )}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={isEmployeeData ? '7' : '7'}>Loading...</td>
                        </tr>
                    )}
                </tbody>

            </Table>
        </div>
    );
};

export default ProductCard;