

import { Button, Form, Modal, Col, Container  ,Row} from "react-bootstrap"
import React, { useState } from "react"
import { connect } from "react-redux"
import { postcontentfromactions } from "../Actions/UserAuthAction"


function UserRegister(props){
    console.log("Register",props)
    const [userdetail, setuserdetail] = useState({})



    function onChangeHandler(event) {
        console.log("Value", event.target.value)

        setuserdetail({
            ...userdetail,
            [event.target.name]: event.target.value

        })
    }


    function submitme(event) {
        // event.preventDefault()
        event.preventDefault()
        props.post(userdetail)
        setuserdetail({
            
        })
        console.log("dadad",userdetail)
        props.history.push("/login")

    }

    function onClickHandler2(){
        props.history.push("/login")

    }
return  <div className="register">
 <Container>
    <Row>
<Col sm={6}>
                   
                    <h6>Sign up with your email and password</h6>
                    <Form onSubmit={submitme} >
                        <Form.Group >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="username" value={userdetail.username} onChange={onChangeHandler}  placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>UserId</Form.Label>
                            <Form.Control type="text" name="userId" value={userdetail.userId} onChange={onChangeHandler} placeholder="Enter userId" />
                            {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={userdetail.password}  onChange={onChangeHandler}   placeholder="Password" />
                        </Form.Group>
                        <br></br>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button variant="danger"  onClick={onClickHandler2}>
                            Cancle
                        </Button>
                    </Form>

                </Col>
                </Row>
                </Container>
                </div>
               


}
export default connect(null, { post: postcontentfromactions })(UserRegister)