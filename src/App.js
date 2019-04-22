import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './Router';
import store from './redux/store';
import keys from './utils/keys';
import firebase from 'firebase';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp(keys);
  }
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
