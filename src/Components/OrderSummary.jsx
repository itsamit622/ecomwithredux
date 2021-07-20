import {addaddresstocartfromactions} from "../Actions/Cart_Actions"
import { connect } from "react-redux";
import {FiMapPin} from "react-icons/fi";
import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";
import {Link} from "react-router-dom"

function OrderSummary(props){
    console.log("ordersummary" ,props.cart_list)

    let totals=0
    props.cart_list.forEach((item) => (totals += item.total));
    console.log("hlel",totals)
    // let totaldiscount=0
    // props.cart_list.forEach((item) => (totaldiscount  = + parseInt(item.discount)));
    // console.log("hlel" ,totaldiscount)
    let totaldiscount=0
   props.cart_list.forEach((item)=>totaldiscount += parseInt(item.discount))
    console.log("hlel" ,totaldiscount)
 
    let totalPrice=0
    props.cart_list.forEach((item)=>totalPrice += parseInt(item.price * item.count))
     console.log("hlel" ,totalPrice)
//     let totaldiscount2=""

//   totaldiscount2=props.cart_list.reduce(
//   //reduce go through the array and cartItem is the each item in the array
//   (storediscount, cartItem) =>
//     storediscount + parseInt(cartItem.discount),
//   0 //0 is the start point of accumulatedTotal
// );

// console.log("sdsdsd", totaldiscount2)
    function Cartlisting(){

        return props.cart_list.map(value=>{
            console.log("productslis",value.Title)
            return <>
               <tr key={value.id}>
                    <td>{value.title}</td>
                    <td><img src={value.imageurl} width="100px" height="100" /></td>
                  </tr>
        
            </>
          })
    }
  
    // onClick={()=>{deleteHandler(value.id)}}
    let value=<Table striped bordered hover>
    <thead>
      <tr>
        <th>Title</th>
        <th>image</th>
      </tr>
    </thead>
    <tbody>
    {Cartlisting()}
      
    </tbody>
  </Table>


    return  <div className="container "> 
    <div className="row">
    <div className=" mtd col-8" >
        <h5><FiMapPin/> Delivery Address</h5>
       
        {props.address.map((val)=>{
            return <div>
                <h6>{val.username}</h6>
                <h6>{val.mobile}</h6>
                <h6>{val.pincode}</h6>  <h6>{val.address}</h6>
            </div>
        })}
 <button className="btn btn-primary"  onClick={props.toggle}>Add adress</button>
        <p className="h-6">We will deliver your order to this address</p>
       
        {value}

        </div>
        <div className="  paymentbox"><h5 className="mt-2">Order Details</h5>   
        <p>Bag total <span className="totals"> ${totalPrice}</span></p>
        
         <p>Bag discount <span className="total_discount"> -${totaldiscount}</span></p>
        
         <p>Delivery <span className="totalFree"> FREE</span></p>
         <p>Total Amount<span className="totalamout">${totals} </span></p>
         <Link to="/payment"><Button variant="info" style={{width:"253px"}}>Proceed to payment</Button></Link>
          </div>
          </div>
    </div>
}

function mapStateToProps(state) {
    console.log("mystate", state)
    return {
      address:state.CART_REDUCER.address,
      cart_list:state.CART_REDUCER.cart,
      
          }    
  }
  
  export default connect(mapStateToProps ,{addadress:addaddresstocartfromactions})(OrderSummary)
  