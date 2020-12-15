import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Alert } from 'react-bootstrap';
import { Pane, TextInput, Button, InfoSignIcon } from 'evergreen-ui';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Pane
                                marginTop={10}
                                height={520}
                                width="100%"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                border="default"
                            >
                                <Card style={{ width: '20rem' }}>
                                    <Card.Body>
                                        <Alert variant="success">
                                            <Alert.Heading>Hey, nice to see you</Alert.Heading>
                                        </Alert>
                                        <Form>
                                            <Form.Group controlId="formGroupEmail">
                                                <InfoSignIcon color="info" marginRight={16} />
                                                <Form.Label>Email address</Form.Label>
                                                <TextInput
                                                    name="text-input-name"
                                                    placeholder="Text input placeholder..."
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="formGroupPassword">
                                                <InfoSignIcon color="info" marginRight={16} />
                                                <Form.Label>Password</Form.Label> <TextInput
                                                    name="text-input-name"
                                                    placeholder="Text input placeholder..."
                                                />
                                            </Form.Group>
                                        </Form>
                                        <Button marginRight={16} appearance="minimal"><Link to="student">Login</Link></Button>
                                    </Card.Body>
                                </Card>
                            </Pane>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;