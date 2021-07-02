import { useLocation } from "react-router";



function UseQuery(props){
    console.log(props)
    console.log(useLocation().search)
    return new URLSearchParams(useLocation().search)
  
}
export default UseQuery;