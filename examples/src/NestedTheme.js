import React, { Component } from 'react'
import { styles } from './styles'

import { Theme, Text, View, applyStyle } from 'react-native-themeable'

const redTheme = applyStyle(type => {
  if (type === Text) {
    return {
      color: 'black',
      fontSize: 16,
    }
  }
  if (type === View) {
    return {
      backgroundColor: 'red',
      padding: 20,
    }
  }
})

const blueTheme = applyStyle(type => {
  if (type === Text) {
    return {
      color: 'white',
      fontSize: 26,
      padding: 10,
    }
  }
  if (type === View) {
    return {
      backgroundColor: 'blue',
      margin: 10,
    }
  }
})

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
