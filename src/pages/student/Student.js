import React from 'react';
import axios from 'axios';
import config from '../../base/baseurl';
import { Pane, Text, Table, Button, DuplicateIcon, EditIcon, toaster, Menu, AddIcon, Popover, PeopleIcon, TrashIcon, Position, MoreIcon, Dialog } from 'evergreen-ui';
import { Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Student extends React.Component {

    state = {
        student: [],
        isShown: false,
        show: false,
    }


    componentDidMount() {
        var BaseUrl = config.SERVER_IP_ADDR + 'students/Authenticated';
        axios.get(BaseUrl).then(response => {
            var student = response.data.student;
            this.setState({ student })
        })
    }

    render() {
        return (
            <div>
                <Col>
                <Pane display="flex" marginTop={10} padding={10} background="tint2" borderRadius={10}>
                    <Alert variant="info">
                        <Alert.Heading>Hey, nice to see you</Alert.Heading>
                        <p>
                            Aww yeah, you successfully read this important alert message. This example
                            text is going to run a bit longer so that you can see how spacing within an
                            alert works with this kind of content.
                    </p>
                    </Alert>
                </Pane>
                </Col>
                <Col>
                    <Pane display="flex" marginTop={10} padding={10} background="tint2" borderRadius={3}>
                        <Pane flex={1} alignItems="right" display="flex">
                        </Pane>
                        <Pane>
                            <Button marginRight={16} appearance="default" colos="white"><Link to="/student/create"><AddIcon size={15} />&nbsp;New Student</Link></Button>
                        </Pane>
                    </Pane></Col>
                <Col>
                    <Table>
                        <Table.Head>
                            <Table.TextHeaderCell>
                                Student ID
                        </Table.TextHeaderCell>
                            <Table.TextHeaderCell>
                                First Name
                        </Table.TextHeaderCell>
                            <Table.TextHeaderCell>
                                Last Name
                        </Table.TextHeaderCell>
                            <Table.TextHeaderCell>
                                Full Name
                        </Table.TextHeaderCell>
                            <Table.TextHeaderCell>
                                School Origin
                        </Table.TextHeaderCell>
                            <Table.TextHeaderCell>
                                Address
                        </Table.TextHeaderCell>
                            <Table.TextHeaderCell>
                                Action
                        </Table.TextHeaderCell>
                        </Table.Head>
                        <Table.Body height={240}>
                            {
                                this.state.student.map(row => <Table.Row key={row.id}>
                                    <Table.TextCell>{row.id}</Table.TextCell>
                                    <Table.TextCell>{row.first_name}</Table.TextCell>
                                    <Table.TextCell>{row.last_name}</Table.TextCell>
                                    <Table.TextCell>{row.first_name}&nbsp;{row.last_name}</Table.TextCell>
                                    <Table.TextCell>{row.school_origin}</Table.TextCell>
                                    <Table.TextCell>{row.place}</Table.TextCell>
                                    <Table.TextCell>
                                        <Button><DuplicateIcon size={10} /></Button>
                                        <Popover
                                            position={Position.BOTTOM_LEFT}
                                            content={
                                                <Menu>
                                                    <Menu.Group>
                                                        <Menu.Item icon={EditIcon}>Edit</Menu.Item>
                                                    </Menu.Group>
                                                    <Menu.Group>
                                                        <Menu.Item icon={PeopleIcon}>Share...</Menu.Item>
                                                    </Menu.Group>
                                                    <Menu.Divider />
                                                    <Menu.Group>
                                                        <Menu.Item icon={TrashIcon} intent="danger">
                                                            Delete...
                                                        </Menu.Item>
                                                    </Menu.Group>
                                                </Menu>
                                            }
                                        >
                                            <Button marginRight={16}><MoreIcon /></Button>
                                        </Popover>

                                    </Table.TextCell>
                                </Table.Row>)
                            }

                        </Table.Body>
                    </Table>
                </Col>
            </div>
        )
    }
}

export default Student;