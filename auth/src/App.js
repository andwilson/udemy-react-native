import React, { Component } from "react";
import { View } from "react-native";
import {
  Card,
  CardSection,
  Header,
  Button,
  Spinner
} from "./components/common";
import firebase from "firebase";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAJ_McYN2baP_odeDRZYFrh4KZ2i8qceUg",
      authDomain: "authentication-cc02c.firebaseapp.com",
      databaseURL: "https://authentication-cc02c.firebaseio.com",
      projectId: "authentication-cc02c",
      storageBucket: "authentication-cc02c.appspot.com",
      messagingSenderId: "98137538617"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
