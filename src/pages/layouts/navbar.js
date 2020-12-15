import React from 'react';
import { Pane, Button, Text, Heading, Popover, Menu, PeopleIcon, TrashIcon, Position, toaster, PersonIcon } from 'evergreen-ui';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
                    <Pane flex={1} alignItems="center" display="flex">
                        <img alt=""
                            src="/user.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top" />
                        <Heading size={600}>&nbsp;Schools Apps</Heading>
                    </Pane>
                    <Pane>
                        <Popover
                            position={Position.BOTTOM_LEFT}
                            content={
                                <Menu>
                                    <Menu.Group>
                                        <Menu.Item icon={PeopleIcon} onSelect={() => toaster.notify('Student')}><Link to="/student">Student</Link></Menu.Item>
                                        <Menu.Item icon={PersonIcon} onSelect={() => toaster.notify('Student Create')}><Link to="/student/create">New Student</Link></Menu.Item>
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
                            <Button marginRight={16}>With Icons</Button>
                        </Popover>
                        <Button marginRight={16}><Link to="/student"></Link>About</Button>
                        <Button appearance="primary">Login</Button>
                    </Pane>
                </Pane>
            </div>
        )
    }
}

export default Header;