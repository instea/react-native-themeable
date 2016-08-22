/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import { Theme, Text, applyStyle } from 'react-native-themeable';

const redTheme = (type, props) => {
  if (type === Text) {
    return Object.assign({}, props, {
      style: { color: 'red' }
    })
  }
  return props
}

const blueTheme = applyStyle(type => {
  if (type === Text) {
    return { color: 'blue' }
  }
})

class examples extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>

        <Theme apply={redTheme}>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
        </Theme>

        <Theme apply={blueTheme}>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
        </Theme>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('examples', () => examples);
