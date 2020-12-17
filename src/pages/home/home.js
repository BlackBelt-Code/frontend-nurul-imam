import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Alert } from 'react-bootstrap';
import { Pane, TextInput, Button, InfoSignIcon, Text } from 'evergreen-ui';
import { getUser } from '../../common/http-common';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
        }
    }

    componentDidMount() {
        const user = getUser();
        const username = user.name;
        const email = user.email;
        this.setState({ username, email })
    }

    render() {

        return (
            <div>
                <Col style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                    <Pane clearfix border="none">
                        <Pane
                            elevation={0}
                            float="left"
                            backgroundColor="white"
                            width="100%"
                            height={100}
                            display="flex"
                            // justifyContent="center"
                            // alignItems="center"
                            flexDirection="column"
                            background="tint2"
                            border="none"
                        >
                            <Row>
                                <Col xs={6} width="100%">
                                    <Card style={{ border: 'none', padding: '5px', marginTop: '50px', marginLeft: 'auto', marginRight: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                                        <Card.Title>
                                            <Text>Welcome Student {this.state.email}</Text>
                                        </Card.Title>
                                        <Card.Body style={{ marginLeft: 'auto', marginRight: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                                            <Card.Img style={{ width: '500px', padding: '10px' }} variant="top" src="/dashboard2.svg" />
                                        </Card.Body>
                                        <Card.Title style={{ marginTop: '20px;', textAlign: 'justify' }}>Welcome Student&nbsp;
                                            <Text>{this.state.username} 
                                            Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf. Ia tidak hanya bertahan selama 5 abad, tapi juga telah beralih ke penataan huruf elektronik, tanpa ada perubahan apapun. Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum, dan seiring munculnya perangkat lunak Desktop Publishing seperti Aldus PageMaker juga memiliki versi Lorem Ipsum
                                            </Text>
                                            </Card.Title>
                                    </Card>
                                </Col>
                                <Col xs={6} width="100%">
                                    <Card style={{ border: 'none' }}>
                                        <Card.Body>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Pane>
                    </Pane>

                </Col>
            </div>
        )
    }
}

export default Home;