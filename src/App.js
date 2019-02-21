import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import './App.css';
import Hompage from './components/google'
import Fb from './components/Fb'



class App extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
   
    return (
     <Router >
      <Switch>
        <Route exact path="/" component={Hompage}/>
        <Route path="/Fb" component={Fb}/>
        </Switch>
    </Router>
    
    );
  }
}



export default  App;
