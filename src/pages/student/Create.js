import React from 'react';
import { Pane, TextInputField, Radio, TextareaField, SelectField, Button, AddIcon, CrossIcon, toaster } from 'evergreen-ui';
import { Col, Container, Row, Alert } from 'react-bootstrap';
import axios from 'axios';
import config from '../../base/baseurl';

class StudentCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        first_name: '',
        last_name: '',
        school_origin: '',
        address: '',
        father_name: '',
        mother_name: '',
        jobs: '',
        contact: '',
        nisn: '',
        class_type:'',
        class_student : '', };
      }
        
        // Student
        handleFirstNameChange = event => {this.setState({ first_name: event.target.value })}
        handleLastNameChange = event => {this.setState({ last_name: event.target.value })}
        handleSchoolOriginChange = event => {this.setState({ school_origin: event.target.value })}
        handleAddressChange = event => {this.setState({ address: event.target.value })}
        // Parent
        handleFatherNameChange = event => {this.setState({ father_name: event.target.value })}
        handleMotherNameChange = event => {this.setState({ mother_name: event.target.value })}
        handleJobsChange = event => {this.setState({ jobs: event.target.value })}
        handleContactChange = event => {this.setState({ contact: event.target.value })}
        // NISN
        handleNisnChange = event => {this.setState({ nisn: event.target.value })}
        // Class and Type 
        handleClassTypeChange = event => {this.setState({ class_type: event.target.value })}
        handleClassStudentChange = event => {this.setState({ class_student: event.target.value })}


        handleSubmit = event => {
            event.preventDefault();
    
            const params = {
                first_name: this.state.first_name,
                last_name:  this.state.last_name,
                school_origin:  this.state.school_origin,
                address:  this.state.address,
                father_name:  this.state.father_name,
                mother_name:  this.state.mother_name,
                jobs:  this.state.jobs,
                contact:  this.state.contact,
                nisn:  this.state.nisn,
                class_type: this.state.class_type,
                class_student :  this.state.class_student,
            }

            
            axios.post(config.SERVER_IP_ADDR + 'students/Authenticated/store', params).then(response => {
                console.log(response);
                toaster.notify('Entry Student Success .. !!');
                this.setState({
                    first_name: '',
                    last_name: '',
                    school_origin: '',
                    address: '',
                    father_name: '',
                    mother_name: '',
                    jobs: '',
                    contact: '',
                    nisn: '',
                    class_type:'',
                    class_student : '',
                });

                this.props.history.push("/student");
            });
        }
        

    render() {
        return (
            <Container>
                <Col>
                    <Pane display="flex" marginTop={10} padding={10} background="tint2" borderRadius={10}>
                        <Alert variant="info">
                            <Alert.Heading>Hey, nice to see you</Alert.Heading>
                            <p>
                                Aww yeah, you successfully read this important alert message. This example
                                text is going to run a bit longer so that you can see
                                </p>
                        </Alert>
                    </Pane>
                </Col>
                <br></br>
                <Col>

                    <Row>
                        <Col>
                            <TextInputField
                                label="Entry First Name"
                                description="entry student first name"
                                placeholder="firstname"
                                name={this.state.first_name}
                                onChange={this.handleFirstNameChange}
                            />
                        </Col>
                        <Col xs={6}>

                            <TextInputField
                                label="Entry Last Name"
                                description="entry student last name"
                                placeholder="Placeholder text"
                                name={this.state.last_name}
                                onChange={this.handleLastNameChange}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <TextareaField
                                label="Entry School Origin"
                                description="entry student school origin"
                                placeholder="Placeholder text"
                                name={this.state.school_origin}
                                onChange={this.handleSchoolOriginChange}
                            />
                        </Col>
                        <Col xs={6}>

                            <TextareaField
                                label="Default Address field"
                                description="This is a description."
                                placeholder="Placeholder text"
                                name={this.state.address}
                                onChange={this.handleAddressChange}
                            />

                        </Col>
                    </Row>

                    {/* Prarent Form */}
                    <hr></hr>
                    <Row>
                        <Col>
                            <TextInputField
                                label="Entry Father Name"
                                description="entry student Father Name"
                                placeholder="Placeholder text"

                                name={this.state.father_name}
                                onChange={this.handleFatherNameChange}
                            />
                        </Col>
                        <Col xs={6}>

                            <TextInputField
                                label="Entry Mother Name"
                                description="entry Mother Name"
                                placeholder="Placeholder text"

                                name={this.state.mother_name}
                                onChange={this.handleMotherNameChange}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <TextInputField
                                label="Entry Jobs"
                                description="This is a description."
                                placeholder="Placeholder text"

                                name={this.state.jobs}
                                onChange={this.handleJobsChange}
                            />
                        </Col>
                        <Col xs={5}>
                            <TextInputField
                                label="Entry Contact"
                                description="0812****"
                                placeholder="Placeholder text"

                                name={this.state.contact}
                                onChange={this.handleContactChange}
                            />
                        </Col>
                        <Col>
                            <TextInputField
                                label="Entry NISN"
                                description="This is a description."
                                placeholder="Placeholder text"

                                name={this.state.nisn}
                                onChange={this.handleNisnChange}
                            />
                        </Col>
                    </Row>
                    {/* NISN AND TYPE CLASS */}
                    <hr></hr>
                    <Row>
                        <Col xs={3}>
                            <TextInputField
                                label="Default text input field"
                                description="This is a description."
                                placeholder="Placeholder text"
                            />
                        </Col>
                        <Col xs={3}>
                            <SelectField
                                label="Default text input field"
                                description="This is a description."
                            >
                                <option value="1" selected onClick={this.handleClassStudentChange} name={this.state.class_student}>VII</option>
                                <option value="2" onClick={this.handleClassStudentChange} name={this.state.class_student}>VIII</option>
                                <option value="3" onClick={this.handleClassStudentChange} name={this.state.class_student}>IX</option>
                            </SelectField>
                        </Col>
                        <Col xs={3}>
                            <SelectField
                                label="Default text input field"
                                description="This is a description."
                            >
                                <option value="1" selected onClick={this.handleClassTypeChange} name={this.state.class_type}>Regular</option>
                                <option value="2" onClick={this.handleClassTypeChange} name={this.state.class_type}>Beasiswa</option>
                            </SelectField>
                        </Col>
                        <Col>
                            <Pane aria-label="Radio Group Label 16" role="group">
                                <Radio checked size={16} name="group2" value="1" label="Laki Laki"/>
                                <Radio size={16} name="group2" checked value="2" label="Perempuan"/>
                            </Pane>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col xs={1}>
                            <Button height="30" marginRight={16} appearance="primary" intent="success" onClick={this.handleSubmit} iconBefore={AddIcon}>Simpan</Button>
                        </Col>
                        <Col xs={1}>
                            <Button height="30" marginRight={16} appearance="primary" intent="warning" iconBefore={CrossIcon}>Cancel</Button>
                        </Col>
                    </Row>
                    <hr></hr>
                </Col>
            </Container>
        )
    }
}

export default StudentCreate;