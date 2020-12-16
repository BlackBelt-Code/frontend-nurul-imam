import React from 'react';

class ShowStudent extends React.Component {
    constructor(props) {
        super();
        this.state = {
            students: []
        }
    }

    render() {
        return (
            <h1>Show Student</h1>
        )
    }
}


export default ShowStudent;