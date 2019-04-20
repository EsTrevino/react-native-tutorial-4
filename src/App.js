import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import store from './redux/store';
import LoginForm from './components/LoginForm';
import keys from './utils/keys';
import firebase from 'firebase';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp(keys);
  }
  render() {
    return (
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
