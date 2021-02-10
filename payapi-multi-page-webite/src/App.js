import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Pricing, About, Contact } from './mainPages';
import { Navbar, CTA, Footer } from './components';
import './App.scss';

const App = () => {
  const [page, setPage] = useState("home");

  return (
  <Router>
    <div className="App">
      <div className={page.localeCompare("home")===0 ? "bg-wrapper bg-wrapper-home": "bg-wrapper bg-wrapper-other"}>
        <Navbar changePage={setPage}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <CTA />
        <Footer />
      </div>
    </div>
</Router>);
};

export default App;