import React, { Component } from 'react'
import { styles } from './styles'

import { Theme, Text, View, withStyles } from 'react-native-themeable'

const customApply = options => withStyles([
  {
    $type: Text,
    color: options.fontColor,
    fontSize: options.fontSize,
    padding: 10,
  }, {
    $type: View,
    backgroundColor: options.backgroundColor,
  },
])

const redTheme = customApply({
  backgroundColor: 'red',
  fontColor: 'black',
  fontSize: 16,
})

const blueTheme = customApply({
  backgroundColor: 'blue',
  fontColor: 'white',
  fontSize: 26,
})

export default class CustomStyleDefinition extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.description}>
          This example demonstrates custom `apply` function implementation.
          Apply function is flexible and powerful, you can implement your own whenever you need:
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
