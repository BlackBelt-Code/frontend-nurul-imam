import React from 'react';
import { Router, Route, NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Home from '../home/home';
import Student from '../student/Student';
import Header from '../layouts/navbar';
import StudentCreate from '../student/Create';
import history from '../../base/history';
import ShowStudent from '../student/Show';

class RouterRoute extends React.Component {
    render() {
        return (
            <div className="header">
                <Header />
                <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/student" component={Student} />
                        <Route exact path="/student/create" component={StudentCreate} />
                        <Route exact path="/student/show" component={ShowStudent} />
                </div>
            </div>
        )
    }
}

export default RouterRoute;