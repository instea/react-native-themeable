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
    padding: 20,
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
    margin: 10,
  },
])

export default class NestedTheme extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.description}>
          This example demonstrates how themes can be nested in the compmonent tree:
        </Text>

        <Theme apply={redTheme}>
          <View>
            <Text>This is outer component which uses red theme</Text>

            <Theme apply={blueTheme}>
              <View>
                <Text>This inner component which uses blue theme</Text>
              </View>
            </Theme>

          </View>
        </Theme>

      </View>
    )
  }
}
