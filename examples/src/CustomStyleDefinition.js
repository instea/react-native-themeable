import React, { Component } from 'react'
import { styles } from './styles'

import { Theme, Text, View, applyStyle } from 'react-native-themeable'

const stylable = Object.entries({ View, Text })
const withStyles = styleDefinition => applyStyle(type => {
  const entry = stylable.find(e => e[1] === type)
  return entry ? styleDefinition[entry[0]] : undefined
})

const redTheme = withStyles({
  Text: {
    color: 'black',
    fontSize: 16,
  },
  View: {
    backgroundColor: 'red',
  },
})

const blueTheme = withStyles({
  Text: {
    color: 'white',
    fontSize: 26, padding: 10,
  },
  View: {
    backgroundColor: 'blue',
  },
})

export default class CustomStyleDefinition extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.description}>
          This example demonstrates custom `apply` function factory implementation,
          which provides more convenient API to style themeable components.
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
