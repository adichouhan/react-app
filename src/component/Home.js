import React from 'react';
import { Container, Col, Row, Dropdown, Button, Table, Jumbotron } from 'react-bootstrap';

export const Home = ()=> {
        return (
            <div className="App">
                <Container className="apointment-size">
                    <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Date</th>
                                <th>Dr Name</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                    </Table>
                    <Table striped bordered hover>
                        <tbody>
                        <tr>
                            <td>i</td>
                            <td>Bruce</td>
                            <td>fdfdgfdg</td>
                            <td>fdgfdg</td>
                            <td>Dr Strange</td>
                            <th> <Button variant="outline-danger">Cancel</Button></th>
                        </tr>
                        </tbody>
                    </Table>
                    </div>
                </Container>
            </div>
        );
}

