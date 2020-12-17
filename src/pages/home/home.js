import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Alert } from 'react-bootstrap';
import { Pane, TextInput, Button, InfoSignIcon } from 'evergreen-ui';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Col xs={12} style={{ marginTop: '10px;'}}>
                        <Row>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Dashboard</Card.Title>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>

                </Container>
            </div>
        )
    }
}

export default Home;