import { Form, Button, Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react"
import { Auth_Checker_Action } from "../Actions/AuthActions"
import { connect } from "react-redux"

// import { withRouter } from "react-router";

function Login(props) {
  const [userdetail, setuserdetail] = useState({})


  function onClickHandler(event) {

    // let target=event.target.value
    // console.log("EVENT" ,[event.target.name])

    setuserdetail({
      ...userdetail,
      [event.target.name]: event.target.value




    })

  }
  if (props.login === true) {
    props.history.push("/admin/dashboard")
  }


  function submitme(event) {
    event.preventDefault()
    props.authem(userdetail)

  }





  return (
    <div>
      <Container className="marginForm">
        <Row className="justify-content-md-center ">
          <Col sm={4}>
            <Form onSubmit={submitme}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" name="username" onChange={onClickHandler} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" onChange={onClickHandler} />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

function myStateToProps(state) {
  return {


    "login": state.Auth_Reducer.isLogin


  }

}
export default connect(myStateToProps, { authem: Auth_Checker_Action })(Login)