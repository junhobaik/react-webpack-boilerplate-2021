import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "@/store";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Provider store={store.store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
