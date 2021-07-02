import UseQuery from "./UseQuery";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";
import { useLocation } from "react-router";
import { loadcontentfromactions } from "../Actions/ProductsAction";

function Item(props) {
  console.log("propss",props)
  let params = new URLSearchParams(useLocation().search);


  let id = params.get("categoryId");
  console.log("categoty", id);
  
  let filerted = props.list.filter(function (items) {
    if (items.categoryId === id) {
      return true;
    } else {
      return false;
    }
  });
  console.log("help", filerted);
  useEffect(() => {
    props.loadAll();
  }, []);
  let collections2 = filerted.map((value) => {
    return (
      <div>
        <div className="col-md-3 mt-4">
          <li className="list-style">
            <img src={value.imageurl} width="300px" height="300" />
            <div>
              {" "}
              <h5> {value.title}</h5> <br></br>
              {value.price}$ <br></br>
              {value.description}
            </div>
            <div> {value.discount} $</div>
          </li>
        </div>
      </div>
    );
  });

  return (
    <div>
      {" "}
      <ul className="list">{collections2}</ul>
    </div>
  );
}
function mapstatetoprops(state) {
  console.log("mystate", state);
  return {
    list: state.ProductsReducer.products,
  };
}

export default connect(mapstatetoprops, { loadAll: loadcontentfromactions })(
  Item
);
