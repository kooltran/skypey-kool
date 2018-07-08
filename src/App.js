import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './main';
import Sidebar from './sidebar';
import store from  './store/store';
import  _ from 'lodash';

class App extends Component {
  render() {
    const contacts = store.getState();
    return (
      <div className="App">
        <Sidebar contacts={_.values(contacts)} />
        <Main />
      </div>
    );
  }
}

export default App;
