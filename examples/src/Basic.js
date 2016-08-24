import React, { Component } from 'react'
import { styles } from './styles'

import { Theme, Text, View, withStyles } from 'react-native-themeable'

const redTheme = withStyles([
  {
    $type: Text,
    color: 'black',
    fontSize: 16,
  }, {
    $type: View,
    backgroundColor: 'red',
  },
])

const blueTheme = withStyles([
  {
    $type: Text,
    color: 'white',
    fontSize: 26,
  }, {
    $type: View,
    backgroundColor: 'blue',
  },
])

export default class Basic extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.description}>
          Following elements use different themes defined by `withStyles` helper function:
        </Text>

        <Theme apply={redTheme}>
          <View>
            <Text>This component uses red theme with small black fonts</Text>
          </View>
        </Theme>

        <Theme apply={blueTheme}>
          <View>
            <Text>This component uses blue theme and large white fonts</Text>
          </View>
        </Theme>

      </View>
    )
  }
}
