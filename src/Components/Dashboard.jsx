import { Button, Row, Col, Navbar, Container } from "react-bootstrap"
import { connect } from "react-redux"
import { Auth_Checker_Action2 } from "../Actions/AuthActions"
import { Link, BrowserRouter, Route, Switch } from "react-router-dom"
import Products from "./Products"
import Category from "./Category"


function Dashboard(props) {


  const logOut = () => {
    props.auth2()
    props.history.push("/admin/login")
    console.log("hello", props.history)
  }
  const profilepage = () => {
    props.history.push("/")
  }

  return <div className="Dashboard-color">
    <Navbar >
      <Container>
        <Navbar.Brand href="#home">SCRED.</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button className="btn btn-primary" onClick={profilepage}>Profile</Button>
            <Button className="btn btn-danger" onClick={logOut} >LogOut</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Row className="mt-5">
      <Col xs lg="2" className="setHeight">
        <Link to="/dashboard" className="nav-link">
          Dashboard
        </Link>
        <Link to="/admin/dashboard/products" className="nav-link">
          Products
        </Link>
        <Link to="/admin/dashboard/category" className="nav-link">
          category
        </Link>

      </Col>
      <Col>

      </Col>
    </Row>

    <Switch>

      <Route path="/admin/dashboard/products" component={Products} />
      <Route path="/admin/dashboard/category" component={Category} />

    </Switch>

  </div>
}


export default connect(null, { auth2: Auth_Checker_Action2 })(Dashboard)