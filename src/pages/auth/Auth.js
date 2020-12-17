import React from 'react';
import axios from 'axios';
import { Container, Col, Alert, Card, Row } from 'react-bootstrap';
import { Pane, TextInputField, Button, toaster } from 'evergreen-ui';
import config from '../../base/baseurl';
import { setUserSession } from '../../common/http-common';

class Auth extends React.Component {

    constructor(props) {
        super();
        this.state = {
            name: '',
            password: '',
        }
    }


    handleNameChange = event => {
        this.setState({
            name: event.target.value,
        })
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        const params = {
            name: this.state.name,
            password: this.state.password
        }

        axios.post(config.SERVER_IP_ADDR + 'login', params).then(response => {
            console.log(response.data.token, response.data.users);
            setUserSession(response.data.token, response.data.users);
            this.props.history.push('/home');
        }).then(error => {
            // console.log(error);
        })
    }

    render() {
        return (
            <Container>
                <Col style={{ marginTop: '80px', marginLeft: 'auto', marginRight: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                    <Row>
                        <Col xs={12}>
                            <Card style={{ width: '100%', padding: '150px', border: 'none' }}>
                                <Row>
                                    <Col xs={6}>
                                        <Card style={{ width: '100%', padding: '20px', border: 'none' }}>
                                            <Card.Body>
                                                <Card.Text>
                                                    <Card.Img variant="top" src="/login.svg" />
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={6}>
                                        <Card style={{ width: '100%', padding: '20px' }}>
                                            <Card.Body>
                                                <Card.Title>Login</Card.Title>
                                                <Card.Text>
                                                    <TextInputField
                                                        label="Name"
                                                        description="entry student name"
                                                        placeholder="firstname"
                                                        name={this.state.name}
                                                        onChange={this.handleNameChange}
                                                    />
                                                    <TextInputField
                                                        label="Password"
                                                        description="entry student password"
                                                        placeholder="firstname"
                                                        type="password"
                                                        name={this.state.password}
                                                        onChange={this.handlePasswordChange}
                                                    />
                                                </Card.Text>
                                                    <Button marginRight={16} appearance="primary" intent="none" style={{ width: '100%', alignItems: 'center' }} onClick={this.handleSubmit}>Login</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Container>
        )
    }

}


export default Auth;