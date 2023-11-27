import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import LoginSetup from "../login/LoginSetup";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import electricity from "../home/featured/electricity/electricity.jsx";
import bank from "../home/featured/bank/bank.jsx";
import simcard from "../home/featured/simcard/simcard.jsx";
const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/:location" component={Blog} />
          <Route exact path="/login" component={LoginSetup} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/electricity" component={electricity} />
          <Route exact path="/bank" component={bank} />
          <Route exact path="/simcard" component={simcard} />
        

        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
