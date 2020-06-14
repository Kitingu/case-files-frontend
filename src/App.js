import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faArrowRight,
  faBars,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import "./App.scss";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Home from "./components/pages/Home";
import Courts from "./components/pages/courts";
import Login from "./components/pages/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

library.add(fab, faSearch, faArrowRight, faBars, faCaretUp);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/courts" component={Courts} />
              <Route exact path="/login" component={Login} />
            </Switch>
            <Footer />
          </>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
