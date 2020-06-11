import React from "react";
import "./styles.css";
//import MyComponent from "./MyComponent";
//import Content from "./template/Content";
import Navbar from "./template/Navbar";
import Footer from "./template/Footer";
import Contact from "./template/content/Contact";
import Tour from "./template/content/Tour";
import Slideshow from "./template/content/Slideshow";
import Band from "./template/content/Band";
import TestCompo from "./template/content/TestCompo";
//import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";
import {
  BrowserRouter as Router,
  Route,
  //Link,
  //browserHistory,
  //IndexRoute,
  Switch
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div
          className="w3-content"
          style={{ maxWidth: "2000px", marginTop: "46px" }}
        >
          <Switch>
            <Route exact path="/" component={Slideshow} />
            <Route path="/home" component={Slideshow} />
            <Route path="/tour" component={Tour} />
            <Route path="/contact" component={Contact} />
            <Route path="/band" component={Band} />
            <Route path="/test-compo" component={TestCompo} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>

    /* <Router history={browserHistory}>
      <Route path="/" component={Content}>
        <IndexRoute component={Slideshow} />
        <Route path="home" component={Slideshow} />
        <Route path="tour" component={Tour} />
        <Route path="contact" component={Contact} />
      </Route>
    </Router> */

    /* <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2> This is my start progrem</h2>
      <h4> This is good praktice plat form 1</h4>
      <MyComponent />
    </div> */
  );
}
