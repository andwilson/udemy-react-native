import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyB7AKm8LQPWjZ2IkWEBp5rnuo9Pi6o-lGc",
      authDomain: "manager-42326.firebaseapp.com",
      databaseURL: "https://manager-42326.firebaseio.com",
      projectId: "manager-42326",
      storageBucket: "manager-42326.appspot.com",
      messagingSenderId: "877727381483"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View>
          <Header headerText="Manager App"/>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
