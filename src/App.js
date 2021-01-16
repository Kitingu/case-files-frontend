import React from 'react';
import store from './redux/store/';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import PrivateRoute from './components/protectedRoute';

import {
  faSearch,
  faArrowRight,
  faBars,
  faCaretUp,
  faFilePdf,
  faFileWord,
} from '@fortawesome/free-solid-svg-icons';
import './App.scss';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Home from './components/pages/Home';
import Courts from './components/pages/courts';
import Login from './components/pages/Login';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import SignUp from './components/pages/SignUp';
import axios from 'axios';
import LegalActivism from './components/pages/LegalActivism';
import Resources from './components/pages/Resources';
import Archives from './components/pages/Archives';
import { storeToken } from './utils/authHelper';
import BlogState from './context/blog/blogState';
import UserState from './context/user/userState';
import {Blogs} from './components/blog/blog'
import { Blogpost } from './components/blog/blogpost';
import Author from './components/blog/author';


library.add(
  fab,
  faSearch,
  faArrowRight,
  faBars,
  faCaretUp,
  faFilePdf,
  faFileWord
);

if (localStorage.token) {
  storeToken(localStorage.token);
}
const App = () => {
  axios.defaults.baseURL = 'https://case-files.herokuapp.com/api/v1';
  return (
    <Provider store={store}>
      <BlogState>
        <UserState>
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
                  <Route exact path="/signup" component={SignUp} />
                  <Route exact path="/legal" component={LegalActivism} />
                  <Route exact path="/resources" component={Resources} />
                  <PrivateRoute exact path="/archives" component={Archives} />
                  <Route exact path="/blog" component={Blogs} />
                  <Route exact path="/:blog" component={Blogpost} />
                  <Route exact path="/author/:id" component={Author} />
                </Switch>
                <Footer />
              </>
            </Router>
          </div>
        </UserState>
      </BlogState>
    </Provider>
  );
};

export default App;
