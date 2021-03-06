import React, { Component } from 'react';
import './App.css';
import Ladder from './Ladder/Ladder';
import Login from './Login/Login';
import MatchesPage from './Matches/MatchesPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ResultPage from './Result/ResultPage';
import CharacterSelect from './CharacterSelect/CharacterSelect';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/matches' component={MatchesPage} />
          <Route path='/result' component={ResultPage} />
          <Route path='/ladder' component={Ladder} />
          <Route path='/character-select' component={CharacterSelect} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
