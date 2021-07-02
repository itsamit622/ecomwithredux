
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {Link,Route ,Switch,BrowserRouter } from 'react-router-dom';
import Products2 from "./Products2"
import{connect} from "react-redux"
import React, {useEffect } from "react";
import { loadcontentfromactions } from "../Actions/CategoryAction";
import Item from "./Itemcollection" 
 function Home (props){
   console.log("myhome" ,props)
  useEffect( ()=>{
    props.loadAll()
   
}, [] )

    return <div>
       {/* <BrowserRouter> */}
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
      
          <Navbar.Brand href="#home">SCRED.</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              {/* <Link to="/products2" className="nav-link">
                Products2
              </Link> */}
              
              {props.categoryList.map((single) =>
              <Link  className="nav-link" to={"/products2?categoryId="+single.id }>{single.title}</Link>
        
         )}
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          
        </Container>
        
      </Navbar>
      {/* <h1>Home</h1> */}
      
    
    

      <Route  path="/products2"  component={Item} />

     {/* </BrowserRouter> */}
    
    </div>
}
function mapStateToProps(state) {
  console.log("myhome", state)
  return {
  
    categoryList:state.Category_Reducer.category
        }    
}


export default connect(mapStateToProps ,{loadAll:loadcontentfromactions})(Home);