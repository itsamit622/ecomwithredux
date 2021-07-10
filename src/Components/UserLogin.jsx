
import { Button, Form, Modal, Col, Container } from "react-bootstrap"
import {Link,Route} from "react-router-dom"
import React, { useState } from "react"
import { connect } from "react-redux"
import { Auth_Checker_Action2, postcontentfromactions } from "../Actions/UserAuthAction"
import UserRegister from "./UserRegister"



function UserLogin(props) {
    // const [userdetail, setuserdetail] = useState({})
    const [userAuth, setuserAuth] = useState({})
    console.log("user", props)





    // function onChangeHandler(event) {
    //     console.log("Value", event.target.value)

    //     setuserdetail({
    //         ...userdetail,
    //         [event.target.name]: event.target.value

    //     })
    // }

    // function submitme(event) {
    //     // event.preventDefault()
    //     props.post(userdetail)
    //     setuserdetail({
            
    //     })
    //     console.log("dadad",userdetail)

    // }



    function onChangeHandler2(event) {
        console.log("Value2", event.target.value)

       setuserAuth({
           ...userAuth,
           [event.target.name]:event.target.value
       })
    }

    if(props.login ===true && props.cart.length>0){
        props.history.push("/cart")
    }
    else if(props.login=== true){
        props.history.push("/home")

    }
    // else if(props.login===true && props.cart.length>0){
    //     props.history.push("/about")

    // }
    function submitme2(event) {
        event.preventDefault()
        props.auth2(userAuth)
       

    }



    return (
        <div className="register">
        <Container>
            <div className="row mt-5 ">
                <Col sm={4}>
                    <h5>I already have an account</h5>
                    <h6>Sign in with your email and password</h6>
                    <Form onSubmit={submitme2}>
                        <Form.Group >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" name="userId" onChange={onChangeHandler2} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" onChange={onChangeHandler2} placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <br></br>
                        <Button variant="success" type="submit">Submit</Button>      <Link   to="/register">Register</Link>
                            
       {/* why not <Route></Route> in this page          */}
                        
                    </Form>
                   
                </Col>
                {/* <Col sm={6}>
                    <h5>I do not have a account</h5>
                    <h6>Sign up with your email and password</h6>
                    <Form onSubmit={submitme}>
                        <Form.Group >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="username" value={userdetail.username} onChange={onChangeHandler} placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" name="userId" value={userdetail.userId} onChange={onChangeHandler} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={userdetail.password}  onChange={onChangeHandler} placeholder="Password" />
                        </Form.Group>
                        <br></br>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Col> */}
                
            </div>
            
        </Container>
        </div>
    );
};
function mapStateToProps(state) {
    return {


        "login": state.Auth_Client.isLogin,
        "cart":state.CART_REDUCER.cart,
        


    }

}

export default connect(mapStateToProps, { post: postcontentfromactions, auth2: Auth_Checker_Action2 })(UserLogin)