import{connect} from "react-redux"
import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";



function Cart(props){

   let cartproducts= props.cart_list.map((value)=>{
       return <>
            <tr key={value.id}>
            <td><img src={value.imageurl} width="100px" height="100" /></td>
            <td>{value.title}</td>
            <td>{value.price} $</td>
            <td>{value.discount} $</td>
            <td> <button className="btn btn-danger" >delete</button>   </td>
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
            <th>
              
            </th>
          </tr>
        </thead>
        <tbody>
        {cartproducts}
        </tbody>
        <Button className="btn btn-primary">Add Address</Button>
      </Table>


    </Container>
}
function mapStateToProps(state) {
    console.log("mystate", state)
    return {
      cart_list:state.CART_REDUCER.cart
          }    
  }

export default connect(mapStateToProps)(Cart)