import React from 'react';
import { Pane, TextInput, Text, Table, Button, DuplicateIcon, EditIcon, toaster, Menu, AddIcon, Popover, PeopleIcon, TrashIcon, Position, MoreIcon, Dialog } from 'evergreen-ui';
import { Col, Alert, Row, FormGroup, FormLabel, Container } from 'react-bootstrap';

export default class StudentCreate extends React.Component {
    render() {
        return (
           <Container>
                <Col>
                <Pane display="flex" marginTop={10} padding={10} background="tint2" borderRadius={10}>
                    <Col xs={6}>
                        <Row>
                            <FormGroup>
                                <TextInput name="text-input-name" placeholder="Entry First Name" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup>
                                <TextInput name="text-input-name" placeholder="Entry Last Name" />
                            </FormGroup>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        <Row>
                            <FormGroup>
                                <TextInput name="text-input-name" placeholder="Text input placeholder..." />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup>
                                <TextInput name="text-input-name" placeholder="Text input placeholder..." />
                            </FormGroup>
                        </Row>
                    </Col>
                </Pane>
            </Col>
           </Container>
        )
    }
}