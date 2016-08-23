import React, { Component } from 'react'
import { styles } from './styles'

import {
  Theme,
  View,
  TouchableHighlight,
  Text,
  withProps,
} from 'react-native-themeable'

const redTheme = withProps([
  {
    $type: Text,
    style: {
      color: 'black',
      fontSize: 16,
    },
  }, {
    $type: View,
    style: {
      backgroundColor: 'red',
    },
  }, {
    $type: TouchableHighlight,
    activeOpacity: 0.5,
    underlayColor: 'blue',
  }
])

const blueTheme = withProps([
  {
    $type: Text,
    style: {
      color: 'white',
      fontSize: 26,
    },
  }, {
    $type: View,
    style: {
      backgroundColor: 'blue',
    },
  }, {
    $type: TouchableHighlight,
    activeOpacity: 0.8,
    underlayColor: 'red',
  }
])

export default class ThemeWithProps extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.description}>
          Following elements use different themes defined by `withStyles` helper function:
        </Text>

        <Theme apply={redTheme}>
          <View>
            <TouchableHighlight onPress={() => console.log('Hello from red theme!')}>
              <Text>This component uses red theme with small black fonts</Text>
            </TouchableHighlight>
          </View>
        </Theme>

        <Theme apply={blueTheme}>
          <View>
            <TouchableHighlight onPress={() => console.log('Hello from blue theme!')}>
              <Text>This component uses blue theme and large white fonts</Text>
            </TouchableHighlight>
          </View>
        </Theme>

      </View>
    )
  }
}
