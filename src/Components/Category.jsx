import { connect } from "react-redux";
import { postcontentfromactions ,loadcontentfromactions ,deletecontentfromactions} from "../Actions/CategoryAction";
import React, { useState,useEffect } from "react";
import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";

function Category(props) {
  const [form, setform] = useState(false);
  const [category, setcategory] = useState({});
console.log("myprops", props)
  



function onClickHandler(event) {
    setcategory({
      ...category,
      [event.target.name]: event.target.value,
    });
  }
  function submitme(event) {
    event.preventDefault();
    props.postme(category);
    setform(false)
    
    
  }

  function setdetails() {
    setform(true);
  }


  useEffect( ()=>{
    props.loadAll()
   
}, [] )


function deleteHandler(id){
  console.log("myid",id)
  props.deleteMe(id)
}
function categoryList(){

  return props.list.map(value=>{
    console.log("categorylis",value.Title)
    return <>
       <tr key={value.id}>
            <td>{value.id}</td>
            <td>{value.title}</td>
            <td>{value.description}</td>
            <td> <button className="btn btn-danger" onClick={()=>{deleteHandler(value.id)}}>delete</button>   </td>
          </tr>

    </>
  })
}


  let value = "";
  if (form === false) {
    value = (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Delete</th>
            <th>
              <Button className="btn btn-primary" onClick={setdetails}>
                
                Add
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
        {categoryList()}
          {/* <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
        </tbody>
      </Table>
    );
  } else {
    value = (
      <Form onSubmit={submitme}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter Title"
            onChange={onClickHandler}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="enter description"
            onChange={onClickHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
 

  return (
    <div>
      <Container>
        <Row className="table-wali">{value}</Row>
      </Container>
    </div>
  );
}

function mapStateToProps(state) {
  console.log("mystate", state)
  return {
    list:state.Category_Reducer.category
        }    
}



export default connect(mapStateToProps, { postme: postcontentfromactions,loadAll: loadcontentfromactions,deleteMe:deletecontentfromactions })(Category);

