import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch,faArrowRight,faBars } from '@fortawesome/free-solid-svg-icons';
import './App.scss';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Home from './components/pages/Home';
library.add(fab, faSearch, faArrowRight, faBars);

const App =() => {
  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/register" component={Register} />
          </Switch>
          <Footer />
        </>
      </Router>
    </div>
  );
}

export default App;
