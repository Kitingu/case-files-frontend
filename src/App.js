import React from "react";
import store from './redux/store/';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route,HashRouter, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faArrowRight,
  faBars,
  faCaretUp,
  faFilePdf,
  faFileWord
} from "@fortawesome/free-solid-svg-icons";
import "./App.scss";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Home from "./components/pages/Home";
import Courts from "./components/pages/courts";
import Login from "./components/pages/Login";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import SignUp from "./components/pages/SignUp";
import axios from 'axios'
import LegalActivism from "./components/pages/LegalActivism";
import Archive from "./components/archive/archive";
import Resources from "./components/pages/Resources";
library.add(fab, faSearch, faArrowRight, faBars, faCaretUp,faFilePdf,faFileWord);

const App = () => {
  axios.defaults.baseURL = 'https://case-files.herokuapp.com/api/v1';
  return (
    <Provider store={store}>
      <div className="App">
        <Router history={HashRouter}>
          <>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/courts" component={Courts} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/legal" component={LegalActivism} />
              <Route exact path="/resources" component={Resources} />
              {/* <Route exact path="/archives" component={Archive} /> */}
            </Switch>
            <Footer />
          </>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
