import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { actions } from '../Redux/action'
import { nameUser, loginUser, getUserId, idUser } from '../Services/service-user';
import { Form, Button, Card } from 'react-bootstrap';
import { useParams, withRouter } from 'react-router-dom'
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
    setEmail: (email) => dispatch(actions.setEmail(email)),
    setPassword: (password) => dispatch(actions.setPassword(password)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function Login(props) {

    const { user, setEmail, setPassword, setName, setId } = props
    const { Text, Group, Label, Control } = Form;
    const { Body, Header } = Card;

    function sendDetails() {
        if (!user.email || !user.password) {
            alert('error')
        }
        else {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(
                (data) => {
                    loginUser({ email: user.email, password: user.password });
                    setId(idUser);
                    setTimeout(() => {
                        console.log("!!")
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
                    Login
                </Header>
                <Body>
                    <Form>
                        <Group controlId="formBasicName">
                            <Label>
                                <i className="fa fa-asterisk" style={{ color: "red", fontSize: "11px" }}></i>  Email:
                            </Label>
                            <Control
                                placeholder="Enter email"
                                value={user.email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Text className="text-muted">
                            </Text>
                        </Group>
                        <Group controlId="formBasicPassword">
                            <Label>
                                <i className="fa fa-asterisk" style={{ color: "red", fontSize: "11px" }}></i>  Password:
                            </Label>
                            <Control
                                type="password"
                                placeholder="Enter password"
                                value={user.password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Group>


                        <Button
                            variant="danger"
                            onClick={sendDetails}>
                            Login
                        </Button>
                    </Form>
                </Body>
            </Card>
        </>

    )
}))
