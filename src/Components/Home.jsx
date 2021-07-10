
import { Navbar, Container, Nav, NavDropdown ,Button } from "react-bootstrap";
import {Link,Route ,Switch,BrowserRouter } from 'react-router-dom';
import Products2 from "./Products2"
import{connect} from "react-redux"
import React, {useEffect } from "react";
import { loadcontentfromactions } from "../Actions/CategoryAction";
import Item from "./Itemcollection" 
import UserLogin from "./UserLogin"
import {logOutfromAction} from "../Actions/UserAuthAction"
import UserRegister from "./UserRegister"

import { FaAngular } from 'react-icons/fa';
import {VscAccount } from "react-icons/vsc";
import {BiCart } from "react-icons/bi";
import Cart from "./Cart";
import Home2 from "./Home2";
 function Home (props){
   console.log("myhome" ,props)
  useEffect( ()=>{
    props.loadAll()
   
}, [] )

function clickHandler(){
  console.log("hello" )
  props.logOut()
}

 let Select =""
 if(props.login===false){
   Select=<Link  to="/login"><Button variant="primary">Log in</Button></Link>
 }
 else{
 
  Select=<Link to="/login"><Button variant="primary" onClick={clickHandler}  >Log out</Button></Link>

 }

 //why not maping
 let nav=""
 if (props.users.length >0){
   nav= 
   <NavDropdown title={"Hi "+props.users[0].username} id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.2">
            Profile &nbsp;  < VscAccount/>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">
            Address <FaAngular /> 
          </NavDropdown.Item>
         
        </NavDropdown>
 }
else {
  nav=""
  
}

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
         
         {/* {props.users.map((details)=>{ */}
        
         
            {/* })}
               */}
            </Nav>
          </Navbar.Collapse>
         {/* <Link  to="/login"><Button variant="primary">Log in</Button></Link> */}
         
         
{nav}

{Select}
          
<Link to="/cart" className="position-relative"><BiCart color="white" size={40}/><p className="cartlength">{props.cartproducts.length}</p></Link>
        </Container>
       
      </Navbar>
      {/* <h1>Home</h1> */}
      {/* <img src="https://assets.ajio.com/medias/sys_master/images/images/h2d/h9e/33289232973854/01072021-d-unisex-brands-superdry-30to50.jpg" width="100%"  /> */}
      
    
      
      <Route  exact path="/"  component={Home2} />
      <Route  path="/products2"  component={Item} />
      <Route  path="/login"  component={UserLogin} />
      <Route  path="/register"  component={UserRegister} />
      <Route  path="/cart"  component={Cart} />

     {/* </BrowserRouter> */}
    
    </div>
}
function mapStateToProps(state) {
  console.log("myhome",  state.Auth_Client.customer)
  return {
  
    "categoryList":state.Category_Reducer.category ,
    "login" : state.Auth_Client.isLogin,
    "users" : state.Auth_Client.customer,
    "cartproducts":state.CART_REDUCER.cart
        }    
}


export default connect(mapStateToProps ,{loadAll:loadcontentfromactions ,logOut:logOutfromAction})(Home);