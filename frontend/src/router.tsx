import { Redirect, Route, Switch } from "wouter";
import Quote from "./pages/Quote";
import Quotes from "./pages/Quotes";

function Router() {
  return (
    <Switch>
      <Route path="/">
        <Redirect to="/quotes" />
      </Route>
      <Route path="/quotes" component={Quotes} />
      <Route path="/quotes/:id">{(params) => <Quote id={params.id} />}</Route>
      <Route component={() => <div>Page not found.</div>} />
    </Switch>
  );
}

export default Router;
