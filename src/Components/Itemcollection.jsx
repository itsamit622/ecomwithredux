import UseQuery from "./UseQuery";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";
import { useLocation } from "react-router";
import { loadcontentfromactions } from "../Actions/ProductsAction";
import { CART_PRODUCTS } from "../Actions/ActionTypes";
import { addtocartfromactions } from "../Actions/Cart_Actions";

function Item(props) {
  console.log("propss", props.location.search)
  let params = new URLSearchParams(useLocation().search);
  console.log("new products", props.list)


  let id = params.get("categoryId");
  console.log("categoty", id);

  // let filerted = props.list.filter(function (items) {
  //   if (items.categoryId === id) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  // console.log("help", filerted);


  function myCart(value) {
    props.cart(value)
    console.log("itemcollection", value)



  }
  useEffect(() => {
    props.loadAll(props.location.search);
  }, [props.location.search]);



  let collections2 = props.list.map((value) => {

    let Offer_Price = value.price - value.discount
    console.log(console.log("sdsdsd", Offer_Price))
    //   return (
    //     <div key={value.id}>
    //       <div className="col-md-3 mt-4">
    //         <li className="list-style">
    //         <img src={value.imageurl} width="300px" height="300" /> &nbsp; &nbsp; &nbsp;<Button  onClick={()=>{myCart(value)}} >  Add to cart</Button>
    //           <div>
    //             {" "}
    //             <h5> {value.title}</h5> <br></br>
    //             {value.price}$ <br></br>
    //             {value.description}
    //           </div>
    //           <div> {value.discount} $</div>
    //         </li>
    //       </div>
    //     </div>
    //   );
    // });
    return <div className="col-3">
      <div className="products">
        <div className="product__img">
          <img src={value.imageurl} width="300px" height="300" />
   <span className="btn-class">      <Button variant="light" onClick={()=>{myCart(value)}} >  Add to cart</Button> </span> 

        </div>
        <div className="product_name">
          {value.title}

        </div>
        <div className="row">
          <div className="col-6">
            <div className="product_price price">
              ${value.price}
            </div>
          </div>

          <div className="col-6">
            <div className="product_discount">
              {/* {value.discount} */}
              <h1>${Offer_Price}</h1>

            </div>
          </div>
        </div>
      </div>

    </div>
  });
  console.log("Colllection", collections2)
  return (
    <div className="container mtb-30">
      <div className="row">{collections2}</div>
    </div>
  );
}
function mapstatetoprops(state) {
  console.log("mystate", state);
  return {
    list: state.ProductsReducer.products,
  };
}

export default connect(mapstatetoprops, { loadAll: loadcontentfromactions, cart: addtocartfromactions })(
  Item
);
