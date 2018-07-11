import React, { Component } from 'react';
import './App.css';
import Main from '../components/main';
import Sidebar from '../components/sidebar';
import store from  '../store/store';
import  _ from 'lodash';

class App extends Component {
  render() {
    const { contacts, user, activeUserId } = store.getState();
    return (
      <div className="App">
        <Sidebar contacts={_.values(contacts)} />
        <Main user={user} activeUserId={activeUserId} />
      </div>
    );
  }
}

export default App;
