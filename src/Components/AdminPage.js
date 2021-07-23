import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";

function AdminPage() {
  return (
    <div>
      <Switch>
        <Route path="/admin/login" component={Login} />
        <Route path="/admin/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default AdminPage;
