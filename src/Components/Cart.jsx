import { connect } from "react-redux"
import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { decquantityfromactions, deletecontentfromactions, incquantityfromactions } from "../Actions/Cart_Actions";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { Link } from "react-router-dom"



function Cart(props) {



  let totals = 0
  props.cart_list.forEach((item) => (totals += item.total));
  // let totals=props.cart_list.reduce(
  //   //reduce go through the array and cartItem is the each item in the array
  //   (storeTotal, cartItem) =>
  //     storeTotal + cartItem.total * cartItem.count,
  //   0 //0 is the start point of accumulatedTotal
  // );



  function clearCart(id) {
    props.delete(id)


  }
  function cartfunction() {
    if (props.cart_list.length > 0) {
      props.history.push("/login")
    }
    else if (props.cart_list.length > 0 && props.login === true) {
      props.history.push("/products2?categoryId=5")
    }
  }


  function increment(id) {
    props.inc_Count(id)

  }
  function decrement(id) {
    props.dec_Count(id)

  }
  let select = ""
  if (props.cart_list.length > 0 && props.login === true) {
    select = <Link to="/ordersummary"><Button
      onClick={cartfunction}>Checkout</Button></Link>
  }
  else {
    select = <Button onClick={cartfunction}>Proceed</Button>
  }
  let cartproducts = props.cart_list.map((value) => {
    //  if(value.discount){
    //    price =
    //  }
    let Offer_Price = value.price - value.discount
    let TotalPrice = Offer_Price * value.count
    return <>
      <tr key={value.id}>
        <td><img src={value.imageurl} width="100px" height="100" /></td>
        <td>{value.title}</td>
        <td> <span>{Offer_Price}$</span>  &nbsp;&nbsp;<span className="price">{value.price}$</span></td>
        <td>{value.discount} $</td>
        <td><span onClick={() => { decrement(value.id) }}><AiOutlineMinusCircle size={19} />{value.count}</span> <span onClick={() => { increment(value.id) }}><BsPlusCircle /></span></td>
        <td> {TotalPrice}$</td>
        <td> <button className="btn btn-danger" onClick={() => { clearCart(value.id) }}><IoIosRemoveCircleOutline /></button>   </td>
      </tr>
    </>
  })




  return <Container>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Discount</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>

          </th>
        </tr>
      </thead>
      <tbody>
        {cartproducts}
      </tbody>
      {/* <Button className="btn btn-primary" onClick={cartfunction} >Checkout</Button> */}
      {select}
      <div>
        Bag Total: {totals}
      </div>
    </Table>


  </Container>
}
function mapStateToProps(state) {
  console.log("mystate", state)
  return {
    cart_list: state.CART_REDUCER.cart,
    "login": state.Auth_Client.isLogin,
    "total": state.CART_REDUCER.subtotal,

  }
}

export default connect(mapStateToProps, { "delete": deletecontentfromactions, "inc_Count": incquantityfromactions, "dec_Count": decquantityfromactions })(Cart)