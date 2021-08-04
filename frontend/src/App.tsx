import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddNotes from './components/AddNotes';
import Home from './components/Home';
import EditNotes from './components/EditNotes';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/add" component={AddNotes}/>
          <Route exact path="/edit/:title/:desc" component={EditNotes}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
