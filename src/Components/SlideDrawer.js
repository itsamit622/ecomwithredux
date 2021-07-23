import { FiMapPin } from "react-icons/fi";
import { Button, Form } from "react-bootstrap";
import { addaddresstocartfromactions } from "../Actions/Cart_Actions";
import { connect } from "react-redux";

import React from "react";
function SlideDrawer(props) {
  const [address, setaddress] = React.useState([]);
  const [se, setse] = React.useState([]);
  const [form, setform] = React.useState(false);

  function toggelForm() {
    console.log("hello", form);
    setform(true);
  }

  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  function onClickHandler(event) {
    console.log("myid", event.target.value, event.target.name);
    setaddress({
      ...address,
      [event.target.name]: event.target.value,
    });
  }
  //    let addressval=[]
  //    function set(){
  //     addressval=addressval.concat(address)

  //    }
  //    console.log("Sdsdsd",addressval)
  function submitme(event) {
    event.preventDefault();
    setse((olditems) => {
      return [address];
    });

    props.addadress(address);
    setform(false);
    console.log("myadrees", se);
  }

  function addressList() {
    return se.map((value) => {
      console.log("productslis", value.name);
      return (
        <>
          <h3>{value.username}</h3>
          <div>{value.mobile}</div>
          <div>{value.pincode}</div>
          <div>{value.address} </div>
        </>
      );
    });
  }
  let value = "";
  if (form === false) {
    value = addressList();
  } else {
    value = (
      <Form>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            name="username "
            placeholder="Enter name"
            onChange={onClickHandler}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            onChange={onClickHandler}
          />
        </Form.Group>
        {/* <Form.Group controlId="formBasicCheckbox">
             <Form.Check type="checkbox" label="Check me out" />
           </Form.Group> */}
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            name="pincode"
            placeholder="Pincode"
            onChange={onClickHandler}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="Address"
            onChange={onClickHandler}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitme}>
          Submit
        </Button>
      </Form>
    );
  }

  return (
    <div className={drawerClasses}>
      <div className="address-margin">
        <h6>
          <FiMapPin /> Change Address{" "}
          <button className=" btn btn-primary address  " onClick={toggelForm}>
            Add New Address
          </button>
        </h6>
        {value}
      </div>
    </div>
  );
}

export default connect(null, { addadress: addaddresstocartfromactions })(
  SlideDrawer
);
