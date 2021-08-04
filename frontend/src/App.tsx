import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddNotes from './components/AddNotes';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/add" component={AddNotes}/>
          <Route exact path="/edit/:param" component={AddNotes}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
