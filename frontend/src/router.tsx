import { Redirect, Route, Switch } from "wouter";
import Quotes from "./pages/Quotes";

function Router() {
  return (
    <Switch>
      <Route path="/">
        <Redirect to="/quotes" />
      </Route>
      <Route path="/quotes" component={Quotes} />
      <Route path="/quotes/:id" component={() => <div>Quote Details</div>} />
      <Route component={() => <div>Page not found.</div>} />
    </Switch>
  );
}

export default Router;
