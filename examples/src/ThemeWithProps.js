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
    underlayColor: 'green',
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
    underlayColor: 'pink',
  }
])

export default class ThemeWithProps extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.description}>
          Following elements use themes which besides styles define component props.
          You can see that `underlayColor` property of TouchableHighlight is different in each theme.
        </Text>

        <Theme apply={redTheme}>
          <View>
            <TouchableHighlight onPress={() => console.log('Hello from red theme!')}>
              <Text>Red theme - press me to see theme specific highlight color</Text>
            </TouchableHighlight>
          </View>
        </Theme>

        <Theme apply={blueTheme}>
          <View>
            <TouchableHighlight onPress={() => console.log('Hello from blue theme!')}>
              <Text>Blue theme - press me to see theme specific highlight color</Text>
            </TouchableHighlight>
          </View>
        </Theme>

      </View>
    )
  }
}
