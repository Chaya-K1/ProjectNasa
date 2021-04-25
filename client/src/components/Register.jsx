import React, { useState } from "react";
import { connect } from 'react-redux';
import { actions } from '../Redux/action';
import { createUser, idUser } from '../Services/service-user';
import { Form, Button, Card } from 'react-bootstrap';
import { Redirect, withRouter } from 'react-router-dom';
import './login-style.css'
import './style.css'
import firebase from "firebase/app";


function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    };
}

const mapDispatchToProps = (dispatch) => ({
    setId: (id) => dispatch(actions.setId(id)),
    setName: (name) => dispatch(actions.setName(name)),
    setPassword: (password) => dispatch(actions.setPassword(password)),
    setEmail: (email) => dispatch(actions.setEmail(email))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function Register(props) {

    const { user, setName, setPassword, setEmail, setId } = props
    const { error, setError } = useState('');
    const nameInput = React.createRef();
    const passwordInput = React.createRef();
    const { Text, Group, Label, Control } = Form;
    const { Body, Header } = Card;

    function sendDetails() {
        if (!user.email && !user.password && !user.name) {
            alert('No details were entered');
            return <Redirect to='/register'></Redirect>

        }
        else if (!user.email || !user.name || !user.password) {
            alert('Missing one or more of your details');
            return <Redirect to='/register'></Redirect>
        }
        else {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(
                (data) => {
                    createUser({ name: user.name, password: user.password, email: user.email });
                    setId(idUser);
                    setTimeout(() => {
                        props.history.push('/apod')
                    }, 2000);
                }
            ).catch(
                (err) => {
                    alert(err)
                })
        }
    }
    return (
        <>
            <Card className="center">
                <Header>
                    Signup
                </Header>
                <Body>
                    <Form>
                        <Group controlId="formBasicName">
                            <Label>
                                Name:
                            </Label>
                            <Control
                                className="input"
                                type="text"
                                placeholder="Enter name"
                                value={user.name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Text className="text-muted">
                            </Text>
                        </Group>
                        <Group controlId="formBasicPassword">
                            <Label>
                                <i className="fa fa-asterisk" style={{ color: "red", fontSize: "11px" }}></i>  Password:
                            </Label>
                            <Control
                                className="input"
                                type="password"
                                placeholder="Enter password"
                                value={user.password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Group>
                        <Group controlId="formBasicPassword">
                            <Label>
                                <i className="fa fa-asterisk" style={{ color: "red", fontSize: "11px" }}></i>  email:

                            </Label>
                            <Control
                                className="input"
                                type="email"
                                placeholder="Enter email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Group>
                        <Button
                            variant="danger"
                            onClick={sendDetails}>
                            Signup
                        </Button>
                    </Form>
                </Body>
            </Card>
        </>
    )
}))

