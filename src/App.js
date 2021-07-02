import "./App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { Provider } from "react-redux";
import Store from "./Reducers/Store";
import Dashboard from "./Components/Dashboard";
import AdminPage from "./Components/AdminPage";
import Products2 from "./Components/Products2";
import {Itemcollection} from "./Components/Itemcollection";

function App() {
  return (
    <Provider store={Store}>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/admin" component={AdminPage} />

            <Route   path="/" component={Home} />
           
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
